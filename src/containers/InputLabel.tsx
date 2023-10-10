import React from "react";

type InputLabelProps = {
  htmlFor: string;
  text: string;
  className?: string;
};

const InputLabel: React.FC<InputLabelProps> = ({ htmlFor, text, className }) => {
  return (
    <label htmlFor={htmlFor} className={`block text-sm font-medium leading-6 ${className || ''}`}>
      {text}
    </label>
  );
};

export default InputLabel;
