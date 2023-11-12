import { useState, useRef, ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AnyAction } from "redux";
import {
  CropperRef,
  ImageRestriction,
  CircleStencil,
} from "react-advanced-cropper";
import GetStoredUserData from "../utils/helperFunction/GetStoredUserData";
import GetImagePreview from "../utils/helperFunction/GetImagePreview";
import { setBlobData } from "../store/modules/profile/actions/profileAction";
import {PhotoInfo} from "../containers/create-profile/InputField"



const usePhotoInput = (onPhotoChange: (newPhotoData: PhotoInfo) => void) => {
  const storedUserData = GetStoredUserData();
  const dispatch = useDispatch();
  const blobData = useSelector((state: AnyAction) => state.Profile.blobData);

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [blobUrl, setBlobUrl] = useState<string | null | undefined>(null);

  const previewImage = GetImagePreview(storedUserData);
  const cropperRef = useRef<CropperRef | null>(null);

  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    if (file) {
      setSelectedFile(file);
      openCropperModal();
    }
  };

  const handleCropperApply = async () => {
    if (!selectedFile) return;
  
    const canvasData = cropperRef.current?.getCanvas();
    if (!canvasData) return;
  
    try {
      const blob = await canvasToBlob(canvasData);
  
      const newFile = new File([blob], selectedFile.name, {
        type: blob.type,
        lastModified: new Date().getTime(),
      });
  
      setBlobUrl(URL.createObjectURL(blob));
  
      const photoInfo: PhotoInfo = { data: blob, name: selectedFile.name };
  
      // Call onPhotoChange with the new PhotoInfo object
      onPhotoChange(photoInfo);
      dispatch(setBlobData(blob));
    } catch (error) {
      console.error("Error converting canvas to Blob", error);
    }
  
    closeCropperModal();
  };

  const canvasToBlob = (canvas: HTMLCanvasElement): Promise<Blob> =>
    new Promise((resolve, reject) =>
      canvas.toBlob(
        (blob) =>
          blob
            ? resolve(blob)
            : reject(new Error("Error converting canvas to Blob")),
        "image/png",
        1.0
      )
    );

  const openCropperModal = () => setIsModalOpen(true);
  const closeCropperModal = () => setIsModalOpen(false);

  return {
    selectedFile,
    isModalOpen,
    blobUrl,
    previewImage,
    cropperRef,
    handleFileChange,
    handleCropperApply,
    openCropperModal,
    closeCropperModal,
  };
};

export default usePhotoInput;
