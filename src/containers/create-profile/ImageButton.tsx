import React from 'react';

interface ImageButtonProps {
  label: string;
  onClick: () => void;
  className?: string;
}

const ImageButton: React.FC<ImageButtonProps> = ({ label, onClick, className }) => (
  <div className={className}>
    <button
      type="button"
      onClick={onClick}
      className="rounded-md bg-base-100 px-2.5 py-1.5 text-sm font-semibold text-accent-content shadow-sm ring-1 ring-inset ring-base-200 hover:bg-base-200 cursor-pointer"
    >
      {label}
    </button>
  </div>
);

export default ImageButton;
