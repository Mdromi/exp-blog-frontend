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
        className="text-sm font-semibold leading-6 text-gray-900"
        onClick={onCancel}
      >
        Cancel
      </button>
      <button
        type="submit"
        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        onClick={onSave}
      >
        Save
      </button>
    </div>
  );
};

export default SaveCancelButtons;