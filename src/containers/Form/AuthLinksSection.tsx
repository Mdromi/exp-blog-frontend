import React from "react";
import { Link } from "react-router-dom";

type AuthLinksSectionProps = {
  authStatus: "signup" | "forgotPassword" | "login";
};

const AuthLinksSection: React.FC<AuthLinksSectionProps> = ({ authStatus }) => {
  const getLinks = () => {
    switch (authStatus) {
      case "signup":
        return [{ to: "/login", text: "Have an account? Please login" }];

      case "forgotPassword":
        return [
          { to: "/signup", text: "Sign Up" },
          { to: "/forgotpassword", text: "Forgot Password?" },
        ];

      case "login":
        return [
          { to: "/signup", text: "Sign Up" },
          { to: "/forgotpassword", text: "Forgot Password?" },
        ];

      default:
        return [];
    }
  };

  const links = getLinks();

  return (
    <div className="mt-2" style={{ display: "flex", justifyContent: "space-between" }}>
      {links.map((link, index) => (
        <div key={index}>
          <small>
            <Link to={link.to}>{link.text}</Link>
          </small>
        </div>
      ))}
    </div>
  );
};

{/* <AuthLinksSection authStatus="forgotPassword" /> */}
export default AuthLinksSection;
