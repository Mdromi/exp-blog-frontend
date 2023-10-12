// SubmitButton.tsx

import React, { ReactNode } from "react";

type SubmitButtonProps = {
  buttonText: string | ReactNode;
  isDisabled: boolean;
  additionalClasses?: string;
};

const SubmitButton: React.FC<SubmitButtonProps> = ({
  buttonText,
  isDisabled,
  additionalClasses,
}) => (
  <button
    type="submit"
    className={`flex w-full justify-center rounded-md base-200 bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary-focus focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400 disabled:bg-primary-focus ${additionalClasses || ''}`}
    disabled={isDisabled}
  >
    {buttonText}
  </button>
);

export default SubmitButton;
