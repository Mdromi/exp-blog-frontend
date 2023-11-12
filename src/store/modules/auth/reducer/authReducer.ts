import { AnyAction } from "redux";
import {
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT_SUCCESS,
  UPDATE_USER_AVATAR,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_ERROR,
  BEFORE_STATE,
  UPDATE_USER_AVATAR_ERROR,
  BEFORE_AVATAR_STATE,
  BEFORE_USER_STATE,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_ERROR,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_ERROR,
  DELETE_USER_SUCCESS,
  DELETE_USER_ERROR,
  SET_CURRENT_USER,
} from "../authTypes";
import isEmpty from "lodash/isEmpty";

// Retrieve user_data from localStorage
const storedUserData = localStorage.getItem("user_data");
let currentUser;
try {
  currentUser = storedUserData ? JSON.parse(storedUserData) : {};
} catch (error) {
  console.error("Error parsing storedUserData:", error);
  currentUser = {};
}

export const initState = {
  isAuthenticated: false,
  currentUser: currentUser, // Use stored value or empty object
  isLoading: false,
  isLoadingAvatar: false,
  isUpdatingUser: false,
  authError: null,
  authSuccess: null,
  blobData: null,
};

const authReducer = (state = initState, action: AnyAction) => {
  switch (action.type) {
    case BEFORE_STATE:
      return {
        ...state,
        authError: null,
        isLoading: true,
      };
    case BEFORE_AVATAR_STATE:
      return {
        ...state,
        avatarError: null,
        isLoadingAvatar: true,
      };
    case BEFORE_USER_STATE:
      return {
        ...state,
        userError: null,
        isUpdatingUser: true,
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        isLoading: false,
        signupError: null,
        loginError: null,
        authSuccess: true,
      };
    case SIGNUP_ERROR:
      return {
        ...state,
        isLoading: false,
        signupError: action.payload,
        loginError: null,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        currentUser: action.payload,
        profileID: action.payload.profileID,
        isAuthenticated: !isEmpty(action.payload),
        loginError: null,
        signupError: null,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        isLoading: false,
        loginError: action.payload,
        signupError: null,
      };
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
        isAuthenticated: !isEmpty(action.payload),
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        isAuthenticated: false,
        currentUser: {},
        logoutError: null,
        isLoading: false,
        signupError: null,
        loginError: null,
        authSuccess: null,
      };

    case UPDATE_USER_AVATAR:
      return {
        ...state,
        isLoadingAvatar: false,
        currentUser: action.payload,
        avatarError: null,
        authSuccessImage: "Image Uploaded",
      };
    case UPDATE_USER_AVATAR_ERROR:
      return {
        ...state,
        isLoadingAvatar: false,
        avatarError: action.payload,
      };
    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        isUpdatingUser: false,
        currentUser: action.payload,
        userError: null,
        authSuccessUser: "Details Updated",
      };
    case UPDATE_USER_ERROR:
      return {
        ...state,
        isUpdatingUser: false,
        userError: action.payload,
      };
    case DELETE_USER_SUCCESS:
      return {
        ...state,
        isAuthenticated: false,
        currentUser: {},
        isLoading: false,
        authSuccessUser: "User Deleted",
        authSuccess: null,
      };
    case DELETE_USER_ERROR:
      return {
        ...state,
        isLoading: false,
        userError: action.payload,
      };
    case FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        forgotError: null,
        successMessage:
          "Mesage sent to the email provided. Please check the spam folder",
      };
    case FORGOT_PASSWORD_ERROR:
      return {
        ...state,
        isLoading: false,
        forgotError: action.payload,
      };
    case RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        resetError: null,
        successMessage: "Success! Password Reset",
      };
    case RESET_PASSWORD_ERROR:
      return {
        ...state,
        isLoading: false,
        resetError: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
