import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
// import rootReducer from "./reducers";
import { Provider } from "react-redux";
import store from "./store/index";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <Provider store={store}>
    <App />
  </Provider>
);
