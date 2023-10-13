import React, {  useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SignIn } from "../../store/modules/auth/actions/authAction";
import { AnyAction } from "redux";
import Form from "../../containers/Form/Form";
import {FormFieldConfig} from "../../containers/Form/Form";
import AuthLinksSection from "../../containers/Form/AuthLinksSection";


const loginFields: FormFieldConfig[] = [
  {
    id: "email",
    type: "email",
    name: "email",
    label: "Email address",
    autoComplete: "email",
    required: true,
    placeholder: "you@example.com",
    errorKeys: ["Required_email", "Invalid_email", "No_record"],
  },
  {
    id: "password",
    type: "password",
    name: "password",
    label: "Password",
    autoComplete: "current-password",
    required: true,
    placeholder: "*****",
    errorKeys: ["Required_password", "Invalid_password", "Incorrect_password"],
  },
];



const Login = () => {
  const currentState = useSelector((state: AnyAction) => state.Auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userLogin = (credentials: any) => {
    dispatch<any>(SignIn(credentials));
  };

  const handleLoginSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // Prevent the default form submission behavior
    e.preventDefault();
  
    // Access form data
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string; // Assume 'email' is the input name
    const password = formData.get("password") as string; // Assume 'password' is the input name
  
    // Perform user login
    userLogin({
      email: email,
      password: password,
    });
  };
  
  
  useEffect(() => {
    console.log("currentState", currentState);
    
    // Redirect if user is authenticated
    if (currentState.isAuthenticated) {
      navigate("/");
    }
  }, [currentState.isAuthenticated, navigate]);


  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight neutral">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <Form fields={loginFields} onSubmit={handleLoginSubmit} errorName="loginError" submitButtonText="Sign in" />
        <AuthLinksSection authStatus="login" />
      </div>
    </div>
  );


};

export default Login;
