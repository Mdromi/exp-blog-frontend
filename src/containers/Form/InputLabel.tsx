import React from "react";

type InputLabelProps = {
  htmlFor: string;
  text?: string; // Make 'text' optional
  className?: string;
};

const InputLabel: React.FC<InputLabelProps> = ({ htmlFor, text, className }) => {
  return (
    <label htmlFor={htmlFor} className={`after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium leading-6 ${className || ''}`}>
      {text}
    </label>
  );
};

export default InputLabel;

