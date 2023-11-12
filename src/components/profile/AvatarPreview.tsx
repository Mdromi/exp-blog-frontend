import React from 'react';

interface AvatarPreviewProps {
  previewImage: string | null;
}

const AvatarPreview: React.FC<AvatarPreviewProps> = ({ previewImage }) => {
  return (
    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
      <div className="w-10 rounded-full">
        {previewImage ? (
          <img src={previewImage} alt="avatar" />
        ) : (
          <span>No Image</span>
        )}
      </div>
    </label>
  );
};

export default AvatarPreview;
