import request from "superagent";
const baseUrl = "http://localhost:4000"; //

export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const SIGN_OUT = "SIGN_OUT";

export const signup = (username, password) => (dispatch, getState) => {
  console.log(username, password);
  request
    .post(`${baseUrl}/signup`)
    .send({ username, password })
    .then(response => {
      console.log("Create user?", response);
      dispatch({ type: SIGNUP_SUCCESS, payload: response.body.jwt });
    })
    .catch(error=> console.log(error));
};

export const login = (username, password) => (dispatch, getState) => {
  console.log(username, password);
  request
    .post(`${baseUrl}/login`)
    .send({ username, password })
    .then(response => {
      console.log("Login?", response);
      dispatch({ type: LOGIN_SUCCESS, payload: response.body.jwt, username });
    })
    .catch(console.error);
};

export const signout = () => (dispatch) => {
    dispatch({
        type: SIGN_OUT
    })
  };
