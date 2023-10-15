import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AnyAction } from "redux";
import { SignOut } from "../../store/modules/auth/actions/authAction";
import Sidebar from "../../containers/Dashboard/Sidebar.tsx";
import { generateSidebarItems } from "./generateSidebarItems.tsx";


const Dashboard: React.FC = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(
    (state: AnyAction) => state.Auth.isAuthenticated
  );
  const currentState = useSelector((state: AnyAction) => state.Auth);

  const sidebarItems = generateSidebarItems();
  const handleLogout = () => {
    dispatch<any>(SignOut());
  };
  return (
    <div className="xl">
      {/* <h1>Welcome to the Profile</h1> */}
      {/* {isAuthenticated ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <p>Please log in to access the content.</p>
      )} */}
      {currentState.isAuthenticated ? (
        <Sidebar title="Sidebar Navigation By iAmine" items={sidebarItems} />
      ) : (
        <p>Please log in to access the content.</p>
      )}
    </div>
  );
};

export default Dashboard;
