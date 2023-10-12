// ... other imports
import { useForm } from "../../hook/useForm";
import {FormFieldConfig} from "../../containers/Form/Form";

const registrationFields: FormFieldConfig[] = [
    // Additional fields for registration
    // {
    //   id: "firstName",
    //   type: "text",
    //   name: "firstName",
    //   label: "First Name",
    //   autoComplete: "given-name",
    //   required: true,
    //   errorKeys: ["Required_firstName"],
    // },
    // ... more fields
  ];

const Registration = () => {


  const { formData, handleChange, clearErrors } = useForm({
    initialValues: {},
    errorKeys: ['Required_firstName', 'Invalid_firstName', 'No_record'],
  });

  const handleRegistrationSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Access form data
    const firstName = formData.firstName;
    const lastName = formData.lastName;
    const email = formData.email;
    const password = formData.password;

    // Perform registration logic
    // ...

    // Clear errors after submission
    clearErrors();
  };

  // ... rest of the component
};
