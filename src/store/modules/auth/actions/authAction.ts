import API_ROUTE from "../../../../apiRoute";
<<<<<<< HEAD
import axios from "axios";
import setAuthorizationToken from "../../../../authorization/authorization";
import {
  BEFORE_STATE,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT_SUCCESS,
  UPDATE_USER_AVATAR,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_ERROR,
  UPDATE_USER_AVATAR_ERROR,
  BEFORE_AVATAR_STATE,
  BEFORE_USER_STATE,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_ERROR,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_ERROR,
  DELETE_USER_SUCCESS,
  DELETE_USER_ERROR,
  SET_CURRENT_USER
} from "../authTypes/index";
import { Dispatch } from 'redux';
// import  {history} from '../../../../history'
// import { useNavigate } from 'react-router-dom';

export const SignIn = (credentials: string) => {
=======
import axios from 'axios'
import setAuthorizationToken  from "../../../../authorization/authorization";
import { BEFORE_STATE, SIGNUP_SUCCESS, SIGNUP_ERROR, LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT_SUCCESS, UPDATE_USER_AVATAR, UPDATE_USER_SUCCESS, UPDATE_USER_ERROR, UPDATE_USER_AVATAR_ERROR, BEFORE_AVATAR_STATE, BEFORE_USER_STATE, FORGOT_PASSWORD_SUCCESS, FORGOT_PASSWORD_ERROR, RESET_PASSWORD_SUCCESS, RESET_PASSWORD_ERROR, DELETE_USER_SUCCESS, DELETE_USER_ERROR } from '../authTypes/index'
import  {history} from '../../../../history'


export const SignIn = (credentials: { email: string; password: string }) => {
>>>>>>> 8947cd2743747b3cf99989f3a5e0f3f638eb4201
  return async (dispatch: Function) => {
    dispatch({ type: BEFORE_STATE });

    try {
      const res = await axios.post(`${API_ROUTE}/login`, credentials);
      const userData = res.data.response;

<<<<<<< HEAD
      localStorage.setItem("token", userData.token);
      localStorage.setItem("user_data", JSON.stringify(userData));
=======
      localStorage.setItem('token', userData.token);
      localStorage.setItem('user_data', JSON.stringify(userData));
>>>>>>> 8947cd2743747b3cf99989f3a5e0f3f638eb4201

      setAuthorizationToken(userData.token);

      dispatch({ type: LOGIN_SUCCESS, payload: userData });
    } catch (err: any) {
<<<<<<< HEAD
      const error: string = (err.response?.data?.error ||
        "An error occurred") as string;
=======
      const error: string = (err.response?.data?.error || 'An error occurred') as string;
>>>>>>> 8947cd2743747b3cf99989f3a5e0f3f638eb4201
      dispatch({ type: LOGIN_ERROR, payload: error });
    }
  };
};
<<<<<<< HEAD
=======


>>>>>>> 8947cd2743747b3cf99989f3a5e0f3f638eb4201

export const SignOut = () => {
  return (dispatch: Function) => {
    localStorage.removeItem("token");
    setAuthorizationToken(false);
    dispatch({ type: LOGOUT_SUCCESS });
    window.localStorage.clear(); //update the localstorage
  };
};

export const SignUp = (newUser: string) => {
  return async (dispatch: Function) => {
    dispatch({ type: BEFORE_STATE });
    try {
      await axios.post(`${API_ROUTE}/users`, newUser);
      dispatch({ type: SIGNUP_SUCCESS });
    } catch (err: any) {
      dispatch({ type: SIGNUP_ERROR, payload: err.response.data.error });
    }
  };
};

export const setCurrentUserAction = (decodedUser: any) => {
  return {
    type: SET_CURRENT_USER,
    payload: decodedUser,
  };
};


export const updateUserAvatar = (updateUserAvatar: string) => {
  return async (dispatch: Function, getState: Function) => {
    dispatch({ type: BEFORE_AVATAR_STATE });
    const { id } = getState().Auth.currentUser;
    try {
      const res = await axios.put(
        `${API_ROUTE}/avatar/users/${id}`,
        updateUserAvatar,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      let updatedUser = res.data.response;
      window.localStorage.setItem("user_data", JSON.stringify(updatedUser)); //update the localstorage
      dispatch({ type: UPDATE_USER_AVATAR, payload: updatedUser });
    } catch (err: any) {
      dispatch({
        type: UPDATE_USER_AVATAR_ERROR,
        payload: err.response.data.error,
      });
    }
  };
};

export const updateUser = (updateUser: string, clearInput: any) => {
  return async (dispatch: Function, getState: Function) => {
    dispatch({ type: BEFORE_USER_STATE });
    const { currentUser } = getState().Auth;
    try {
      const res = await axios.put(
        `${API_ROUTE}/users/${currentUser.id}`,
        updateUser
      );
      let updatedUser = res.data.response;

      dispatch({ type: UPDATE_USER_SUCCESS, payload: updatedUser });
      window.localStorage.setItem("user_data", JSON.stringify(updatedUser)); //update the localstorages
      clearInput();
    } catch (err: any) {
      dispatch({ type: UPDATE_USER_ERROR, payload: err.response.data.error });
    }
  };
};

export const deleteUser = (id: string) => {
  return async (dispatch: Function) => {
    dispatch({ type: BEFORE_STATE });
    try {
      const res = await axios.delete(`${API_ROUTE}/users/${id}`);
      let deleteMessage = res.data.response;
      dispatch({ type: DELETE_USER_SUCCESS, payload: deleteMessage });
      window.localStorage.clear(); //update the localstorage
      window.location.href = "/";
    } catch (err: any) {
      dispatch({ type: DELETE_USER_ERROR, payload: err.response.data.error });
    }
  };
};

export const ForgotPassword = (userEmail: string, clearInput: Function) => {
  return async (dispatch: Function) => {
    dispatch({ type: BEFORE_STATE });

    try {
      const res = await axios.post(`${API_ROUTE}/password/forgot`, userEmail);
      let passwordRequest = res.data.response;
      dispatch({ type: FORGOT_PASSWORD_SUCCESS, payload: passwordRequest });
      clearInput();
    } catch (err: any) {
      dispatch({
        type: FORGOT_PASSWORD_ERROR,
        payload: err.response.data.error,
      });
    }
  };
};

export const ResetPassword = (details: string, clearInput: Function) => {
  return async (dispatch: Function) => {
    dispatch({ type: BEFORE_STATE });

    try {
      const res = await axios.post(`${API_ROUTE}/password/reset`, details);
      let passwordRequest = res.data.response;
      dispatch({ type: RESET_PASSWORD_SUCCESS, payload: passwordRequest });
      clearInput();
    } catch (err: any) {
      dispatch({
        type: RESET_PASSWORD_ERROR,
        payload: err.response.data.error,
      });
    }
  };
};
