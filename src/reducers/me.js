const reducer = (state = null, action = {}) => {
  switch (action.type) {
    case "ADD_LOBBY":
      return 1;
    case "JOIN_LOBBY":
      return 2;
    case "ADD_MESSAGES":
      return state;
    default:
      return state;
  }
};

export default reducer;