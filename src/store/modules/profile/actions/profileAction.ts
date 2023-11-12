import axios from "axios";
import {
  BEFORE_STATE_PROFILE,
  CREATE_PROFILE_SUCCESS,
  CREATE_PROFILE_ERROR,
  FETCH_PROFILE,
  FETCH_PROFILE_ERROR,
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
import { Dispatch } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import routes from "../../../../apiRoute";
import GetStoredUserData from "../../../../utils/helperFunction/GetStoredUserData";
import FormDataToObject from "../../../../utils/helperFunction/formDataToObject";
import {PhotoInfo} from "../../../../containers/create-profile/InputField"

export const setBlobData = (blobData: Blob) => ({
  type: SET_BLOB_DATA,
  payload: blobData,
});

const API_ROUTE = routes.API_ROUTE;

export const CreateProfile = (newProfileData: any) => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    dispatch({ type: BEFORE_STATE_PROFILE });

    try {
      const data = GetStoredUserData(); // You need to have a function to retrieve the token

      // Create FormData
      const formData = new FormData();
      Object.entries(newProfileData).forEach(([key, value]) => {
        if (key === 'userID') value = String(value);

        if (key === 'profilePic' || key === 'coverPic') {
          const photoInfo = value as PhotoInfo;
          if (photoInfo.data instanceof Blob) {
            formData.append(key, photoInfo.data, photoInfo.name || 'photo.jpg');
          }
        } else if (typeof value === 'string' || value instanceof Blob) {
          formData.append(key, value as string | Blob);
        }
      });

      const formdata = FormDataToObject(formData)
      console.log("formData", formdata);

      const res = await fetch(`${API_ROUTE}/profiles`, {
        method: 'POST',
        headers: {
          // Do not set Content-Type, let the browser set it for FormData
          Authorization: `Bearer ${data.token}`,
        },
        body: formData,
      });

      const profileData = await res.json();
      console.log('profileData', profileData);

      dispatch({ type: CREATE_PROFILE_SUCCESS, payload: profileData });
    } catch (err: any) {
      dispatch({
        type: CREATE_PROFILE_ERROR,
        payload: err.response?.data.error,
      });
    }
  };
};










export const CreateProfile2 = (newProfileData: any) => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    dispatch({ type: BEFORE_STATE_PROFILE });
    
    try {
      const data = GetStoredUserData(); // You need to have a function to retrieve the token
      const res = await fetch(`${API_ROUTE}/profiles`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${data.token}`,
        },
        body: JSON.stringify(newProfileData),
      });

      const profileData = await res.json();
      console.log("profileData", profileData);
      
      dispatch({ type: CREATE_PROFILE_SUCCESS, payload: profileData });
    } catch (err: any) {
      dispatch({
        type: CREATE_PROFILE_ERROR,
        payload: err.response?.data.error,
      });
    }
  };
};






export const fetchProfile = (userId: string) => {
  return async (dispatch: Function) => {
    dispatch({ type: BEFORE_STATE_PROFILE });

    try {
      const res = await axios.get(`${API_ROUTE}/profiles/${userId}`);
      const profileData = res.data.response;
      dispatch({ type: FETCH_PROFILE, payload: profileData });
    } catch (err: any) {
      dispatch({ type: FETCH_PROFILE_ERROR, payload: err.response.data.error });
    }
  };
};

export const fetchAuthProfile = () => {
  return async (dispatch: Function) => {
    dispatch({ type: BEFORE_STATE_PROFILE });

    try {
      const res = await axios.get(`${API_ROUTE}/profiles/auth`);
      const profileData = res.data.response;
      dispatch({ type: FETCH_AUTH_PROFILE, payload: profileData });
    } catch (err: any) {
      dispatch({
        type: FETCH_AUTH_PROFILE_ERROR,
        payload: err.response.data.error,
      });
    }
  };
};

export const getProfile = (userId: string) => {
  return async (dispatch: Function) => {
    dispatch({ type: BEFORE_STATE_PROFILE });

    try {
      const res = await axios.get(`${API_ROUTE}/profiles/${userId}`);
      const profileData = res.data.response;
      dispatch({ type: GET_PROFILE_SUCCESS, payload: profileData });
    } catch (err: any) {
      dispatch({ type: GET_PROFILE_ERROR, payload: err.response.data.error });
    }
  };
};

export const updateProfile = (updateProfile: string) => {
  return async (dispatch: Function, getState: Function) => {
    dispatch({ type: BEFORE_STATE_PROFILE });
    const { currentUser } = getState().Auth;

    try {
      const res = await axios.put(
        `${API_ROUTE}/profiles/${currentUser.profileID}`,
        updateProfile
      );
      const updatedProfile = res.data.response;
      dispatch({ type: UPDATE_PROFILE_SUCCESS, payload: updatedProfile });
    } catch (err: any) {
      dispatch({
        type: UPDATE_PROFILE_ERROR,
        payload: err.response.data.error,
      });
    }
  };
};

export const deleteProfile = (profileId: string) => {
  return async (dispatch: Function) => {
    dispatch({ type: BEFORE_STATE_PROFILE });

    try {
      const res = await axios.delete(`${API_ROUTE}/profiles/${profileId}`);
      const deleteMessage = res.data.response;
      dispatch({ type: DELETE_PROFILE_SUCCESS, payload: deleteMessage });
    } catch (err: any) {
      dispatch({
        type: DELETE_PROFILE_ERROR,
        payload: err.response.data.error,
      });
    }
  };
};
