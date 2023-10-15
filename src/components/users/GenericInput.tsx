import React from "react";
import { LinkIcon } from "@heroicons/react/24/solid";

import { InputField } from './InputField';
  

const GenericInput: React.FC<InputField> = (props) => {
  const { type, multiline, ...rest } = props;

  const getInputComponent = () => {
    switch (type) {
      case "text":
        return <TextInput {...(rest as InputField)} multiline={multiline} />;
      case "username":
        return <UsernameInput {...(rest as InputField)} />;
      case "profile":
        return <ProfileInputField {...(rest as InputField)} multiline={multiline} />;
      case "social":
        return <SocialLinkInput {...(rest as InputField)} />;
      default:
        return null;
    }
  };

  return getInputComponent();
};


const FormField: React.FC<
  {
    type: "url" | "text" | "textarea";
    className?: string;
    rows?: number;
  } & InputField
> = ({ id, name, autoComplete, placeholder, type, className, rows }) => {
  const baseClass = `
    block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-inset ring-gray-300
    placeholder:text-gray-400 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6
  `;

  const inputClass = className ? `${baseClass} ${className}` : baseClass;

  switch (type) {
    case "url":
      return (
        <input
          id={name}
          type="url"
          name={name}
          className={`
            ${inputClass}
            text-sm placeholder-gray-500 pl-10 pr-4 rounded-md border border-gray-400
            w-full py-2 focus:outline-none focus:border-blue-400
          `}
          placeholder={placeholder}
        />
      );
    case "textarea":
      return (
        <textarea
          id={id}
          name={name}
          autoComplete={autoComplete}
          rows={rows}
          className={inputClass}
          placeholder={placeholder}
        />
      );
    default:
      return (
        <input
          type="text"
          name={name}
          id={id}
          autoComplete={autoComplete}
          className={`
            ${inputClass}
            block flex-1 border-0 bg-transparent py-1.5 pl-2
          `}
          placeholder={placeholder}
        />
      );
  }
};

const TextInput: React.FC<InputField> = ({ id, name, autoComplete, placeholder, label, multiline }) => {
  return (
    <div className="col-span-full">
      <label
        htmlFor={id}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <div className="mt-2">
        <FormField
          type={multiline ? "textarea" : "text"}
          name={name}
          id={id}
          autoComplete={autoComplete}
          placeholder={placeholder}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          rows={multiline ? 3 : undefined}
        />
      </div>
    </div>
  );
};

const UsernameInput: React.FC<InputField> = ({
  id,
  name,
  autoComplete,
  placeholder,
  label,
}) => {
  return (
    <div className="sm:col-span-4">
      <label
        htmlFor={id}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <div className="mt-2">
        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
          <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">
            medium.com/
          </span>
          <FormField
            type="text"
            name={name}
            id={id}
            autoComplete={autoComplete}
            placeholder={placeholder}
            className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
    </div>
  );
};

const ProfileInputField: React.FC<InputField> = ({
  id,
  name,
  type = "text",
  autoComplete,
  placeholder,
  label,
  multiline,
}) => {
  return (
    <div className="sm:col-span-3">
      <label
        htmlFor={id}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <div className="mt-2">
        <FormField
          type={multiline ? "textarea" : (type as "url" | "text" | "textarea")} // Ensure type compatibility
          name={name}
          id={id}
          autoComplete={autoComplete}
          placeholder={placeholder}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          rows={multiline ? 3 : undefined}
        />
      </div>
    </div>
  );
};

const SocialLinkInput: React.FC<InputField> = ({
  label,
  name,
  placeholder,
}) => {
  return (
    <div className="mt-4 space-y-10">
      <div className="flex flex-col mb-5">
        <label
          htmlFor={name}
          className="mb-1 text-xs tracking-wide text-gray-600"
        >
          {label}
        </label>
        <div className="relative">
          <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
            <LinkIcon className="h-5 w-5 text-gray-300" aria-hidden="true" />
          </div>
          <FormField
            id={name}
            name={name}
            type="url"
            placeholder={placeholder}
            className="text-sm placeholder-gray-500 pl-10 pr-4 rounded-md border border-gray-400 w-full py-2 ring-1 focus:ring-2 focus:outline-none focus:border-blue-400"
          />
        </div>
      </div>
    </div>
  );
};



export default GenericInput;
