import React, { useEffect } from "react";
import SignedInLinks from "../containers/Navigation/SignedInLinks";
import SignedOutLinks from "../containers/Navigation/SignedOutLinks";
import ThemeDropDown from "../containers/Theme/ThemeDropDown";
import { AnyAction } from "redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import LogoLink from "../containers/Navigation/LogoLink";
import SearchInput from "../containers/Navigation/SearchInput";

const Navigation = () => {
  const navigate = useNavigate();
  const currentState = useSelector((state: AnyAction) => state);
  const { isAuthenticated, profile } = currentState.Auth;

  // console.log("currentState", currentState);
  
  // useEffect(() => {
  //   // If authenticated and no profile, automatically navigate to create-profile
  //   if (isAuthenticated && !profile) {
  //     navigate("/create-profile");
  //   }
  // }, [isAuthenticated, profile, navigate]);

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    navigate("/");
  };

  return (
    <div className="navbar bg-base-100 shadow sticky top-0 z-50">
      <div className="flex-1">
        <LogoLink onClick={handleClick} />
        <SearchInput />
      </div>

      {isAuthenticated ? <SignedInLinks /> : <SignedOutLinks />}
      
      <div className="">
        <ThemeDropDown />
      </div>
    </div>
  );
};

export default Navigation;
