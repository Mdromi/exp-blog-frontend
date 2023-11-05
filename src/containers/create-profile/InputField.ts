export interface InputField {
  type: string;
  id?: string;
  name?: string;
  autoComplete?: string;
  placeholder?: string;
  label?: string;
  multiline?: boolean;
  key?: number;
}

export interface InputFieldWithClassName extends InputField {
  className?: string;
}