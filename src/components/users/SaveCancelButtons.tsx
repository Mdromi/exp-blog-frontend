import React from 'react';

interface SaveCancelButtonsProps {
  onCancel?: () => void;
  onSave?: () => void;
}

const SaveCancelButtons: React.FC<SaveCancelButtonsProps> = ({ onCancel, onSave }) => {
  return (
    <div className="mt-6 flex items-center justify-end gap-x-6">
      <button
        type="button"
        className="text-sm font-semibold leading-6 text-accent-content"
        onClick={onCancel}
      >
        Cancel
      </button>
      <button
        type="submit"
        className="rounded-md bg-primary px-3 py-2 text-sm font-semibold text-base-100 shadow-sm hover:bg-primary-focus focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        onClick={onSave}
      >
        Save
      </button>
    </div>
  );
};

export default SaveCancelButtons;
