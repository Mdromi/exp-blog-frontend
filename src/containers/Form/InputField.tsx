import React from "react";

type InputFieldProps = {
  type: string;
  name: string;
  id: string;
  autoComplete?: string;
  required?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  placeholder?: string;
};

const InputField: React.FC<InputFieldProps> = ({
  type,
  name,
  id,
  autoComplete,
  required,
  onChange,
  className,
  placeholder
}) => {
  const inputClasses = `block p-6 w-full rounded-md border-0 py-1.5 base-100 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:base-100 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${className || ''}`;

  return (
    <input
      onChange={onChange}
      id={id}
      name={name}
      type={type}
      autoComplete={autoComplete}
      required={required}
      className={inputClasses}
      placeholder={placeholder}
    />
  );
};

export default InputField;
