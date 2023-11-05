import React from 'react';
import { UserCircleIcon } from "@heroicons/react/24/solid"; // Assuming you have these icons

interface PhotoInputProps {
  id: string;
  label: string;
}

const PhotoInput: React.FC<PhotoInputProps> = ({ id, label }) => {
  return (
    <div className="col-span-full">
      <label htmlFor={id} className="block text-sm font-medium leading-6 text-accent-content">
        {label}
      </label>
      <div className="mt-2 flex items-center gap-x-3">
        <UserCircleIcon
          className="h-12 w-12 text-base-200"
          aria-hidden="true"
        />
        <button
          type="button"
          className="rounded-md bg-base-100 px-2.5 py-1.5 text-sm font-semibold text-accent-content shadow-sm ring-1 ring-inset ring-base-200 hover:bg-base-200"
        >
          Change
        </button>
      </div>
    </div>
  );
};

export default PhotoInput