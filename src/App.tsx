import { useEffect } from "react";
import "./App.css";
import AppRoutes from "./Route";
import { useDispatch } from "react-redux";
import { setTheme } from "./store/modules/theme/action/themeAction";
import { setCurrentUserAction } from "./store/modules/auth/actions/authAction";
import jwt_decode from "jwt-decode";

function App() {
  
  const decodeToken = (token: string) => {
    const decodedUser = jwt_decode(token)
    return decodedUser
  };
  const dispatch = useDispatch();
  useEffect(() => {
    // Dispatch the initial theme
    dispatch(setTheme("light")); // or your default theme

    const token = localStorage.getItem("token");
    // Decode the token to get user information
    if (token) {
    const decodedUser = decodeToken(token);
    console.log("decodedUser", decodedUser);
    
    dispatch(setCurrentUserAction(decodedUser));
    }
  }, [dispatch]);

  return (
    <div className="App">
      <AppRoutes />
    </div>
  );
}

export default App;
