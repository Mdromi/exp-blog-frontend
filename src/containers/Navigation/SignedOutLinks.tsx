import React from "react";
import { useNavigate } from "react-router-dom";
import NavItem from "./NavItem";

const SignedOutLinks: React.FC = () => {
  const navigate = useNavigate();
  const handleClick = (e: React.MouseEvent, destination: string) => {
    e.preventDefault();
    // Add logic for handling the click event
    navigate(destination);
  };
  return (
    <div className="flex-none gap-2">
      <div className="navbarItem">
        <div className="hidden sm:ml-6 sm:block">
          <div className="flex space-x-4">
          <NavItem href="/login" onClick={handleClick} text="Login" />
          <NavItem href="/signup" onClick={handleClick} text="Signup" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignedOutLinks;
