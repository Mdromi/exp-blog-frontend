import { Action, AnyAction } from "redux";
import {
  CREATE_PROFILE_SUCCESS,
  CREATE_PROFILE_ERROR,
  FETCH_PROFILE,
  FETCH_PROFILE_ERROR,
  BEFORE_STATE_PROFILE,
  BEFORE_PROFILEPIC_STATE,
  BEFORE_PROFILECOVER_STATE,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_ERROR,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_ERROR,
  DELETE_PROFILE_SUCCESS,
  DELETE_PROFILE_ERROR,
  FETCH_AUTH_PROFILE,
  FETCH_AUTH_PROFILE_ERROR,
  SET_BLOB_DATA,
} from "../profileTypes/index";

// Initial state for the profile reducer
export const initialProfileState = {
  profile: {},
  authProfile: {},
  isLoadingProfile: false,
  isLoadingProfilePic: false,
  isLoadingProfileCover: false,
  profileError: null,
};

// Profile reducer function
const profileReducer = (state = initialProfileState, action: AnyAction) => {
  switch (action.type) {
    case SET_BLOB_DATA:
      return {
        ...state,
        blobData: action.payload,
      };
    case BEFORE_STATE_PROFILE:
      return {
        ...state,
        profileError: null,
        isLoadingProfile: true,
      };

    case BEFORE_PROFILEPIC_STATE:
      return {
        ...state,
        profileError: null,
        isLoadingProfilePic: true,
      };

    case BEFORE_PROFILECOVER_STATE:
      return {
        ...state,
        profileError: null,
        isLoadingProfileCover: true,
      };

    case CREATE_PROFILE_SUCCESS:
      return {
        ...state,
        isLoadingProfile: false,
        profileError: null,
        profile: action.payload,
      };

    case CREATE_PROFILE_ERROR:
      return {
        ...state,
        isLoadingProfile: false,
        profileError: action.payload,
      };

    case FETCH_PROFILE:
      return {
        ...state,
        isLoadingProfile: false,
        profileError: null,
        profile: action.payload,
      };

    case FETCH_PROFILE_ERROR:
      return {
        ...state,
        isLoadingProfile: false,
        profileError: action.payload,
      };

    case GET_PROFILE_SUCCESS:
      return {
        ...state,
        isLoadingProfile: false,
        profileError: null,
        profile: action.payload,
      };

    case GET_PROFILE_ERROR:
      return {
        ...state,
        isLoadingProfile: false,
        profileError: action.payload,
      };

    case UPDATE_PROFILE_SUCCESS:
      return {
        ...state,
        isLoadingProfile: false,
        profileError: null,
        profile: action.payload,
      };

    case UPDATE_PROFILE_ERROR:
      return {
        ...state,
        isLoadingProfile: false,
        profileError: action.payload,
      };

    case DELETE_PROFILE_SUCCESS:
      return {
        ...state,
        isLoadingProfile: false,
        profileError: null,
        profile: {},
      };

    case DELETE_PROFILE_ERROR:
      return {
        ...state,
        isLoadingProfile: false,
        profileError: action.payload,
      };

    case FETCH_AUTH_PROFILE:
      return {
        ...state,
        isLoadingProfile: false,
        profileError: null,
        authProfile: action.payload,
      };

    case FETCH_AUTH_PROFILE_ERROR:
      return {
        ...state,
        isLoadingProfile: false,
        profileError: action.payload,
        authProfile: {},
      };

    default:
      return state;
  }
};

export default profileReducer;
