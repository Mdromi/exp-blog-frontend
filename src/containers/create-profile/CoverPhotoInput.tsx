import {
  Cropper,
  RectangleStencil,
  ImageRestriction,
} from "react-advanced-cropper";
import { PhotoIcon } from "@heroicons/react/24/solid";
import InputLabel from "./InputLabel";
import usePhotoInput from "../../hook/usePhotoInput";
import Modal from "./Modal";
import ImageButton from "./ImageButton";
import {PhotoInfo} from "./InputField"

interface CoverPhotoInputProps {
  id: string;
  label: string;
  onCoverPhotoChange: (newCoverPhotoData: PhotoInfo) => void; // Callback prop
}
const CoverPhotoInput: React.FC<CoverPhotoInputProps> = ({
  id,
  label,
  onCoverPhotoChange,
}) => {
  const {
    selectedFile,
    isModalOpen,
    blobUrl,
    cropperRef,
    handleFileChange,
    handleCropperApply,
    openCropperModal,
    closeCropperModal,
  } = usePhotoInput(onCoverPhotoChange);

  return (
    <div className="col-span-full">
      <InputLabel htmlFor={id} label={label} />
      <Modal isOpen={isModalOpen} onClose={closeCropperModal}>
        {selectedFile && (
          <Cropper
            src={URL.createObjectURL(selectedFile)}
            className="cropper"
            stencilComponent={RectangleStencil}
            imageRestriction={ImageRestriction.fillArea}
            ref={cropperRef}
          />
        )}
        <ImageButton
          label="Apply Changes"
          onClick={handleCropperApply}
          className="w-full flex justify-center mt-4"
        />
      </Modal>
      <div
        className="mt-2 flex justify-center rounded-lg border border-dashed border-accent-content/25 px-6 py-10"
        style={{
          backgroundImage: `url(${blobUrl})`,
          backgroundSize: "cover", 
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center", 
          position: "relative",
        }}
      >
        {blobUrl && (
          <div
            style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "", // Adjust the opacity as needed
            }}
            className="bg-neutral opacity-25"
          ></div>
        )}
        <div className="text-center" style={{ zIndex: 10 }}>
          <PhotoIcon
            className="mx-auto h-12 w-12 text-gray-300"
            aria-hidden="true"
          />

          <div className="mt-4 flex text-sm leading-6 text-neutral-content">
            <label
              htmlFor="file-upload"
              className="relative cursor-pointer rounded-md  font-semibold text-primary focus-within:outline-none focus-within:ring-2 focus-within:ring-primary-focus focus-within:ring-offset-2 hover:text-primary-focus"
            >
              <span>Upload a file</span>
              <input
                id="file-upload"
                type="file"
                accept="image/*"
                className="sr-only hidden"
                onChange={handleFileChange}
              />
            </label>
            <p className="pl-1">or drag and drop</p>
          </div>
          <p className="text-xs leading-5 text-neutral-content">
            PNG, JPG, GIF up to 10MB
          </p>
          {selectedFile && (
            <button
              type="button" // Add this line to explicitly set the type to "button"
              onClick={openCropperModal}
              className="text-sm cursor-pointer rounded-md font-semibold text-primary focus-within:outline-none focus-within:ring-2 focus-within:ring-primary-focus focus-within:ring-offset-2 hover:text-primary-focus"
            >
              Edit Image
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
export default CoverPhotoInput;
