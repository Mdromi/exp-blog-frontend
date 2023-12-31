import React, { useState } from "react";
import InputField from "./InputField";
import RenderError from "../Error/RenderError";
import InputLabel from "./InputLabel";
import { AnyAction } from "redux";
import { useSelector } from "react-redux";
import SubmitButton from "./SubmitButton";
import LoadingButton from "./LoadingButton";

export type FormFieldConfig = {
  id: string;
  type: string;
  name: string;
  label: string;
  autoComplete?: string;
  required?: boolean;
  placeholder?: string;
  errorKeys: string[];
};

type FormProps = {
  fields: FormFieldConfig[];
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
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
    Object.keys(currentState[errorName]).reduce((acc, key) => {
      acc[key] = "";
      return acc;
    }, currentState[errorName]);

    currentState[errorName] = null;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    if (currentState[errorName] != null) {
      clearErrors();
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      {fields.map(({ id, errorKeys, ...field }) => (
        <div key={id}>
          <div className="mb-2">
            {errorKeys.map((errorKey) => (
              <RenderError
                key={errorKey}
                errorName={errorName}
                errorKey={errorKey}
              />
            ))}
          </div>
          <InputLabel htmlFor={id} {...field} text={field.label} />
          <div className="mt-2">
            <InputField
              id={id}
              onChange={handleChange}
              autoComplete={field.autoComplete}
              required={field.required}
              className={"invalid:border-red-500"}
              {...field}
            />
          </div>
        </div>
      ))}

      <div>
        {currentState.isLoading ? (
          <LoadingButton buttonText="Processing..." />
        ) : (
          <SubmitButton
            buttonText={submitButtonText}
            isDisabled={
              Object.values(formData).some((value) => value === "") ||
              currentState[errorName] != null
            }
          />
        )}
      </div>
    </form>
  );
};

export default Form;
