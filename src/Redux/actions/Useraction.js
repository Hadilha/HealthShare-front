// UserActions.js
import axios from "axios";
import { ActionTypes } from "../constants/ActionTypes";
import { useNavigate } from "react-router-dom";

export const authRequest = () => ({
  type: ActionTypes.AUTH_REQUEST,
});

export const authSuccess = (user) => ({
  type: ActionTypes.AUTH_SUCCESS,
  payload: user,
});

export const authFailure = (error) => ({
  type: ActionTypes.AUTH_FAILURE,
  payload: error,
});

export const logout = () => ({
  type: ActionTypes.LOGOUT,
});

export const signIn = (credentials) => async (dispatch) => {
  try {
    const response = await axios.post(
      "http://localhost:3001/users/signin",
      credentials
    );
    const user = response.data;
    console.log("user", user);
    localStorage.setItem("token", user.data.result.data.token);
    localStorage.setItem("id", user.data.result.data.id);

    dispatch(authSuccess(user));
    console.log("2");
  } catch (error) {
    console.log("3");
    dispatch(authFailure("Sign-in failed. Please check your credentials."));
  }
};

export const signUp = (credentials) => async (dispatch) => {
  try {
    console.log("1");
    const response = await axios.post(
      "http://localhost:3001/users/signup",
      credentials
    );

    const user = response.data;
    dispatch(authSuccess(user));
    console.log("2");
  } catch (error) {
    console.log("3");
    dispatch(authFailure("Sign-up failed. Please check your credentials."));
  }
};
/*
export const logoutUser = () => (dispatch) => {
  dispatch(logout());
};*/
