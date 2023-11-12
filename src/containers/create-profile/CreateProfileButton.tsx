import React from 'react';

interface CreateProfileButtonProps {
  onSubmit?: React.FormEventHandler<HTMLFormElement>;
}

const CreateProfileButton: React.FC<CreateProfileButtonProps> = ({ onSubmit }) => {
  return (
    <div className="mt-6 flex items-center justify-end gap-x-6">
      <button
        type="submit"
        className="rounded-md bg-primary px-3 py-2 text-sm font-semibold text-base-100 shadow-sm hover:bg-primary-focus focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      >
        Create Profile
      </button>
    </div>
  );
};

export default CreateProfileButton;
