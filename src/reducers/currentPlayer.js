import { SIGN_OUT, SIGNUP_SUCCESS, LOGIN_SUCCESS } from "../actions/player";
const currentPlayerToken =
  window.localStorage.getItem("jwt")  || null;

const reducer = (state = currentPlayerToken, action = {}) => {
  switch (action.type) {
    //case SIGNUP_SUCCESS:
      //localStorage.setItem("jwt", action.payload);
      //return action.payload;
    case LOGIN_SUCCESS:
      localStorage.setItem("jwt", action.payload);
      return action.payload;
    case SIGN_OUT:
      localStorage.removeItem("jwt");
      return null;
    default:
      return state;
  }
};

export default reducer;
