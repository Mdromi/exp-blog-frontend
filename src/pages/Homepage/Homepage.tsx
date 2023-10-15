import React from "react";
import { useDispatch, useSelector } from "react-redux";
// import jwt from "jsonwebtoken";
import { AnyAction } from "redux";
import { SignOut } from "../../store/modules/auth/actions/authAction";

const Homepage: React.FC = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(
    (state: AnyAction) => state.Auth.isAuthenticated
  );

  const handleLogout = () => {
    dispatch<any>(SignOut());
  };

  return (
    <div className="homepage-container flex items-center justify-center h-screen">
      <h1>Welcome to the Homepage</h1>
      {isAuthenticated ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <p>Please log in to access the content.</p>
      )}
    </div>
  );
};

export default Homepage;
