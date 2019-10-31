const reducer = (state = null, action = {}) => {
  switch (action.type) {
    case "SET_GAME":
      return action.payload.turnToPlay;
    case "ADD_MESSAGES":
        return state;
    default:
      return state;
  }
};

export default reducer;
