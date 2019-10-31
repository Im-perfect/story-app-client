const reducer = (state = [], action = {}) => {
  switch (action.type) {
    case "ADD_MESSAGES":
        console.log("log:",action.payload)
      return action.payload;

    default:
      return state;
  }
};

export default reducer