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
  // const currentState = useSelector((state: AnyAction) => state.Auth);

  const { isAuthenticated } = currentState.Auth;
  console.log("currentState2", currentState)

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    // const destination = event.currentTarget.getAttribute('href') || '/';
    navigate("/");
  };

  return (
    <div className="navbar bg-base-100 shadow">
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
