const reducer = (state = {}, action = {}) => {
  switch (action.type) {
    case "FETCH_GAME":
      return action.payload;
    case "ADD_LOBBY":
      return action.payload;
    case "JOIN_LOBBY":
      return action.payload;
    case "SET_GAME":
      return action.payload;
    case "SIGN_OUT":
      return {};
    default:
      return state;
  }
};

export default reducer;
