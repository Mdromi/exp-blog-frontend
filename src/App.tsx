<<<<<<< HEAD
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
=======
import { useEffect } from 'react';
import './App.css';
import  AppRoutes from './Route';
import { useDispatch } from 'react-redux';
import { setTheme } from './store/modules/theme/action/themeAction';
import Navigation from './components/Navigation';

function App() {
  const dispatch = useDispatch();
>>>>>>> 8947cd2743747b3cf99989f3a5e0f3f638eb4201

  useEffect(() => {
    // Dispatch the initial theme
    dispatch(setTheme('light')); // or your default theme
  }, [dispatch]);
  
  return (
    <div className="App">
<<<<<<< HEAD
=======
      <Navigation />
>>>>>>> 8947cd2743747b3cf99989f3a5e0f3f638eb4201
      <AppRoutes />
    </div>
  );
}

export default App;
