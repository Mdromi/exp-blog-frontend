import { AnyAction } from "redux";
import Form, { FormFieldConfig } from "../../containers/Form/Form";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SignUp } from "../../store/modules/auth/actions/authAction";
import AuthLinksSection from "../../containers/Form/AuthLinksSection";


const registrationFields: FormFieldConfig[] = [
  {
    id: "username",
    type: "username",
    name: "username",
    label: "username",
    autoComplete: "username",
    required: true,
    placeholder: "unique username",
    errorKeys: ["Required_email", "Taken_username", ""],
  },
  {
    id: "email",
    type: "email",
    name: "email",
    label: "Email address",
    autoComplete: "email",
    required: true,
    placeholder: "you@example.com",
    errorKeys: ["Required_email", "Invalid_email", "Taken_email"],
  },
  {
    id: "password",
    type: "password",
    name: "password",
    label: "Password",
    autoComplete: "current-password",
    required: true,
    placeholder: "******",
    errorKeys: ["Required_password", "Invalid_password", "Incorrect_password"],
  },
];

const Registration = () => {
  const currentState = useSelector((state: AnyAction) => state.Auth);
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const addUser = (credentials: any) => {
    dispatch<any>(SignUp(credentials));
  };

  
  const handleRegisterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
   
    // Access form data
    const formData = new FormData(e.currentTarget);
    const username = formData.get("username") as string;
    const email = formData.get("email") as string; 
    const password = formData.get("password") as string; 

    addUser({
      username: username,
      email: email,
      password: password,
    })
  };

  if(currentState.authSuccess){
    navigate("/login");
  }
 
  console.log("currentState", currentState)
  
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight neutral">
          Signup on your account
        </h2>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <Form fields={registrationFields} onSubmit={handleRegisterSubmit} errorName="signupError" submitButtonText="Sign up" />
        <AuthLinksSection authStatus="signup" />
      </div>
    </div>
  )
};

export default Registration