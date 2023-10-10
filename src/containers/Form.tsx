import React, { useState } from "react";
import InputField from "./InputField";
import RenderError from "./RenderError";
import InputLabel from "./InputLabel";
import { AnyAction } from "redux";
import { useSelector } from "react-redux";

export type FormFieldConfig = {
  id: string;
  type: string;
  name: string;
  label: string;
  autoComplete?: string;
  required?: boolean;
  errorKeys: string[];
};

type FormProps = {
  fields: FormFieldConfig[];
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  errorName: string;
  submitButtonText: string;
};

const Form: React.FC<FormProps> = ({
  fields,
  onSubmit,
  submitButtonText,
  errorName,
}) => {
  const [formData, setFormData] = useState<Record<string, string>>({});
  const currentState = useSelector((state: AnyAction) => state.Auth);

  const clearErrors = () => {
    // Update the state to clear errors
    Object.keys(currentState[errorName]).forEach((key) => {
      currentState.loginError[key] = "";
    });
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    if (Object.values(formData).some((value) => value !== "")) {
      clearErrors();
    }
  };

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(e); // Pass the entire event object to the onSubmit function
  };

  console.log("formData", formData);
  console.log("currentState", currentState.loginError);

  return (
    <form onSubmit={submitForm} className="space-y-6">
      {fields.map((field) => (
        <div key={field.id}>
          <div className="mb-2">
            {field.errorKeys.map((errorKey) => (
              <RenderError
                key={errorKey}
                errorName={errorName}
                errorKey={errorKey}
              />
            ))}
          </div>
          <InputLabel htmlFor={field.id} text={field.label} />
          <div className="mt-2">
            <InputField
              type={field.type}
              name={field.name}
              id={field.id}
              autoComplete={field.autoComplete}
              required={field.required}
              onChange={handleChange}
            />
          </div>
        </div>
      ))}

      <div>
        <button
          type="submit"
          className="flex w-full justify-center rounded-md base-200 bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary-focus focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400 disabled:bg-error"
          disabled={Object.values(formData).some((value) => value === "")}
        >
          {submitButtonText}
        </button>
      </div>
    </form>
  );
};

export default Form;
