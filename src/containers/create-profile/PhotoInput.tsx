import React, { useState, useRef, ChangeEvent } from "react";
import {
  Cropper,
  CircleStencil,
  ImageRestriction,
} from "react-advanced-cropper";
import InputLabel from "./InputLabel";
import AvatarPreview from "../../components/profile/AvatarPreview";
import "react-advanced-cropper/dist/style.css";
import Modal from "./Modal";
import ImageButton from "./ImageButton";
import usePhotoInput from "../../hook/usePhotoInput";
import {PhotoInfo} from "./InputField"

interface PhotoInputProps {
  id: string;
  label: string;
  name?: string
  onPhotoChange: (newPhotoData: PhotoInfo) => void;
}

const PhotoInput: React.FC<PhotoInputProps> = ({ id, label, name, onPhotoChange }) => {
  const {
    selectedFile,
    isModalOpen,
    blobUrl,
    previewImage,
    cropperRef,
    handleFileChange,
    handleCropperApply,
    openCropperModal,
    closeCropperModal,
  } = usePhotoInput(onPhotoChange);

  return (
    <div className="col-span-full">
      <InputLabel htmlFor={id} label={label} />
      <div className="mt-2 flex items-center gap-x-3">
        <AvatarPreview previewImage={blobUrl || previewImage} />

        <input
          type="file"
          name={name}
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
          id={id}
        />

        {selectedFile && (
          <ImageButton label="Edit Image" onClick={openCropperModal} />
        )}

        <Modal isOpen={isModalOpen} onClose={closeCropperModal}>
          {selectedFile && (
            <Cropper
              src={URL.createObjectURL(selectedFile)}
              className="cropper"
              stencilComponent={CircleStencil}
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

        <label
          htmlFor={id}
          className="rounded-md bg-base-100 px-2.5 py-1.5 text-sm font-semibold text-accent-content shadow-sm ring-1 ring-inset ring-base-200 hover:bg-base-200 cursor-pointer"
        >
          Change
        </label>
      </div>
    </div>
  );
};

export default PhotoInput;
