import React from 'react';
import { InputField } from './InputField';

interface FormFieldProps {
  id: string;
  name: string;
  autoComplete?: string;
  placeholder: string;
  type: 'url' | 'text' | 'textarea';
  className?: string;
  rows?: number;
}


const FormField: React.FC<FormFieldProps & InputField> = ({
  type,
  id,
  name,
  autoComplete,
  placeholder,
  className,
  rows,
  key,
}) => {
  const baseClass = `
    block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-inset ring-gray-300
    placeholder:text-gray-400 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6
  `;

  const inputClass = className ? `${baseClass} ${className}` : baseClass;

  switch (type) {
    case 'url':
      return (
        <input
          key={key}
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
    case 'textarea':
      return (
        <textarea
          key={key}
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
          key={key}
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

export default FormField;
