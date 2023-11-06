export interface InputField {
  type?: string;
  id?: string;
  name?: string;
  autoComplete?: string;
  placeholder?: string;
  label?: string;
  multiline?: boolean;
  key?: number;
  value?: string;
  isDisabled?: boolean;
}

export interface FormFieldProps {
  type: "url" | "text" | "textarea";
  id?: string;
  name?: string;
  autoComplete?: string;
  placeholder?: string;
  className?: string;
  rows?: number;
  value?: string | undefined;
  isDisabled?: boolean;
  onChange?: (value: string) => void;
}

export interface InputFieldWithClassName extends InputField {
  className?: string;
}