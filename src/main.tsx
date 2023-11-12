import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
// import rootReducer from "./reducers";
import { Provider } from "react-redux";
import store from "./store/index";
import { LOGIN_SUCCESS } from "./store/modules/auth/authTypes/index.ts";
import setAuthorizationToken from "./authorization/authorization.tsx";

if (localStorage.token) {
  setAuthorizationToken(localStorage.token);
  const userDataString = localStorage.getItem("user_data");
  let userData = null;

  if (userDataString) {
    try {
      userData = JSON.parse(userDataString);
    } catch (error) {
      console.error("Error parsing user data:", error);
    }
  }

  store.dispatch({ type: LOGIN_SUCCESS, payload: userData });
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <Provider store={store}>
    <App />
  </Provider>
);
