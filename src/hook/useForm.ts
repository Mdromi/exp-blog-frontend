import { useState, useEffect } from 'react';

interface UseFormProps {
  initialValues: Record<string, string>;
  errorKeys: string[];
  clearErrors: () => void;
}

interface UseFormResult {
  formData: Record<string, string>;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  submitForm: (e: React.FormEvent<HTMLFormElement>) => void;
}

export function useForm({ initialValues, errorKeys, clearErrors }: UseFormProps): UseFormResult {
  const [formData, setFormData] = useState<Record<string, string>>(initialValues);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    clearErrors();
    // Pass the entire event object to the onSubmit function
    // (you can modify this if you need form data)
    // e.g., onSubmit(formData);
  };

  useEffect(() => {
    // Clear form data on component unmount
    return () => setFormData(initialValues);
  }, [initialValues]);

  return { formData, handleChange, submitForm };
}
