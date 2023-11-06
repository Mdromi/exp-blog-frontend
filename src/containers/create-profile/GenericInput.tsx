import React, { useState, useEffect, ChangeEvent } from "react"
import { LinkIcon } from "@heroicons/react/24/solid";

import { InputField, FormFieldProps } from "./InputField";
import InputLabel from "./InputLabel";

interface InputComponentProps {
  value: string;
  onChange: (value: string) => void;
}

const GenericInput: React.FC<InputField & InputComponentProps> = ({
  type,
  value,
  onChange,
  ...rest
}) => {
  // Use internalValue state for components that require it
  const [internalValue, setInternalValue] = useState(value);

  // Update the internal value when the external value changes
  useEffect(() => {
    setInternalValue(value);
  }, [value]);

  const commonProps = {
    ...rest,
    value: internalValue,
    onChange: (newValue: string) => {
      setInternalValue(newValue);
      onChange(newValue);
    },
  };

  switch (type) {
    case "text":
      return <TextInput {...commonProps} />;
    case "username":
      return <UsernameInput {...rest} value={value} onChange={onChange} />;
    case "profile":
      return <ProfileInputField {...commonProps} />;
    case "social":
      return <SocialLinkInput {...rest} value={value} onChange={onChange} />;
    default:
      return null;
  }
};


const FormField: React.FC<FormFieldProps> = ({
  type,
  id,
  name,
  autoComplete,
  placeholder,
  className,
  rows,
  value,
  isDisabled,
  onChange,
}) => {
  const adaptedOnChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (onChange) {
      onChange(event.target.value);
    }
  };

  const baseClass = `
    block w-full rounded-md border-0 bg-transparent py-1.5 text-accent-content shadow-sm ring-inset ring-base-300
    placeholder:text-base-300 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6
  `;

  const inputClass = className ? `${baseClass} ${className}` : baseClass;

  if (type === "textarea") {
    return (
      <textarea
        id={id || ""}
        name={name}
        autoComplete={autoComplete}
        rows={rows}
        onChange={adaptedOnChange}
        value={value}
        className={inputClass}
        placeholder={placeholder}
      />
    );
  }

  return (
    <input
      type={type === "url" ? "url" : "text"}
      name={name}
      id={id || ""}
      autoComplete={autoComplete}
      onChange={adaptedOnChange}
      className={`
        ${inputClass}
        ${type === "url" ? "text-sm placeholder-accent-content pl-10 pr-4 rounded-md border border-base-300 w-full py-2 focus:outline-none focus:border-blue-400" : "block flex-1 border-0 bg-transparent py-1.5 pl-2"}
      `}
      placeholder={placeholder}
      value={value}
      disabled={isDisabled}
    />
  );
};

const TextInput: React.FC<
  InputField &  InputComponentProps
> = ({
  id,
  name,
  autoComplete,
  placeholder,
  label,
  multiline,
  value,
  onChange,
}) => {
    
  return (
    <div className="col-span-full">
     <InputLabel htmlFor={id} label={label} />
      <div className="mt-2">
        <FormField
          type={multiline ? "textarea" : "text"}
          name={name}
          id={id}
          autoComplete={autoComplete}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="block w-full rounded-md border-0 py-1.5 text-accent-content shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-base-content focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          rows={multiline ? 3 : undefined}
        />
      </div>
    </div>
  );
};

const UsernameInput: React.FC<
  InputField & InputComponentProps
> = ({
  id,
  name,
  autoComplete,
  placeholder,
  label,
  value,
  isDisabled,
  onChange,
}) => {
  return (
    <div className="sm:col-span-4">
      <InputLabel htmlFor={id} label={label} />
      <div className="mt-2">
        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-base-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
          <span className="flex font-bold select-none items-center pl-3 text-accent-content sm:text-sm">
            medium.com/
          </span>
          <FormField
            type="text"
            name={name}
            id={id}
            autoComplete={autoComplete}
            placeholder={placeholder}
            value={value || ""}
            isDisabled={isDisabled}
            onChange={onChange}
            className="block disabled disabled:opacity-75 flex-1 border-0 bg-transparent py-1.5 pl-1 text-base-content placeholder:text-base-content focus:ring-0 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
    </div>
  );
};

const ProfileInputField: React.FC<
  InputField & InputComponentProps
> = ({
  id,
  name,
  type = "text",
  autoComplete,
  placeholder,
  label,
  multiline,
  value,
  isDisabled,
  onChange,
}) => {
  return (
    <div className="sm:col-span-3">
      <InputLabel htmlFor={id} label={label} />
      <div className="mt-2">
        <FormField
          type={multiline ? "textarea" : (type as "url" | "text" | "textarea")} // Ensure type compatibility
          name={name}
          id={id}
          autoComplete={autoComplete}
          placeholder={placeholder}
          value={value || ""}
          isDisabled={isDisabled}
          onChange={onChange}
          className="block w-full  rounded-md border-0 py-1.5 text-base-content shadow-sm ring-1 ring-inset ring-base-300 placeholder:text-base-content focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          rows={multiline ? 3 : undefined}
        />
      </div>
    </div>
  );
};

const SocialLinkInput: React.FC<
  InputField & InputComponentProps
> = ({ label, name, placeholder, onChange }) => {
  return (
    <div className="mt-4 space-y-10">
      <div className="flex flex-col mb-5">
      <InputLabel htmlFor={name} label={label} />
        <div className="relative">
          <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-accent-content">
            <LinkIcon
              className="h-5 w-5 text-base-content"
              aria-hidden="true"
            />
          </div>
          <FormField
            id={name}
            name={name}
            type="url"
            placeholder={placeholder}
            onChange={onChange}
            className="text-sm bg-transparent placeholder:text-base-content pl-10 pr-4 rounded-md border border-base-300 w-full py-2 ring-1 focus:ring-2 focus:outline-none focus:border-blue-400"
          />
        </div>
      </div>
    </div>
  );
};

export default GenericInput;
