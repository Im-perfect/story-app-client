import { SIGN_OUT } from "../actions/player";
const currentPlayerToken = window.localStorage.getItem("jwt") || "somefaketoken" || null;

const reducer = (state = currentPlayerToken, action = {}) => {
  switch (action.type) {
    case SIGN_OUT:
      localStorage.removeItem("jwt");
      return null;
    default:
      return state;
  }
};

export default reducer;
