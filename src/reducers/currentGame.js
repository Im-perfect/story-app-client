const reducer = (state = {}, action = {}) => {
  switch (action.type) {
    case "FETCH_GAME":
      return action.payload;
    case "UPDATE_CURRENT_GAME":
      return action.payload;
    case "ADD_LOBBY":
      return action.payload;
    case "SIGN_OUT":
      return {};
    default:
      return state;
  }
};

export default reducer;
