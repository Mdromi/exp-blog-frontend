<<<<<<< HEAD
import React, {  useEffect } from "react";
=======
import React, { useState, useEffect } from "react";
>>>>>>> 8947cd2743747b3cf99989f3a5e0f3f638eb4201
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SignIn } from "../../store/modules/auth/actions/authAction";
import { AnyAction } from "redux";
<<<<<<< HEAD
import Form from "../../containers/Form/Form";
import {FormFieldConfig} from "../../containers/Form/Form";
import AuthLinksSection from "../../containers/Form/AuthLinksSection";
=======
import Form from "../../containers/Form";
import {FormFieldConfig} from "../../containers/Form";
>>>>>>> 8947cd2743747b3cf99989f3a5e0f3f638eb4201


const loginFields: FormFieldConfig[] = [
  {
    id: "email",
    type: "email",
    name: "email",
    label: "Email address",
    autoComplete: "email",
    required: true,
<<<<<<< HEAD
    placeholder: "you@example.com",
=======
>>>>>>> 8947cd2743747b3cf99989f3a5e0f3f638eb4201
    errorKeys: ["Required_email", "Invalid_email", "No_record"],
  },
  {
    id: "password",
    type: "password",
    name: "password",
    label: "Password",
    autoComplete: "current-password",
    required: true,
<<<<<<< HEAD
    placeholder: "*****",
=======
>>>>>>> 8947cd2743747b3cf99989f3a5e0f3f638eb4201
    errorKeys: ["Required_password", "Invalid_password", "Incorrect_password"],
  },
];

<<<<<<< HEAD

=======
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
>>>>>>> 8947cd2743747b3cf99989f3a5e0f3f638eb4201

const Login = () => {
  const currentState = useSelector((state: AnyAction) => state.Auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

<<<<<<< HEAD
  const userLogin = (credentials: any) => {
=======
  const userLogin = (credentials: { email: string; password: string }) => {
>>>>>>> 8947cd2743747b3cf99989f3a5e0f3f638eb4201
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
<<<<<<< HEAD
    console.log("currentState", currentState);
    
    // Redirect if user is authenticated
    if(currentState.profileID === 0) {
      navigate("/create-profile");
    }
    else if (currentState.isAuthenticated) {
=======
    // Redirect if user is authenticated
    if (currentState.isAuthenticated) {
>>>>>>> 8947cd2743747b3cf99989f3a5e0f3f638eb4201
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
<<<<<<< HEAD
        <AuthLinksSection authStatus="login" />
=======
>>>>>>> 8947cd2743747b3cf99989f3a5e0f3f638eb4201
      </div>
    </div>
  );


};

export default Login;
