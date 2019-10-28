const currentPlayerToken = JSON.parse(
  window.localStorage.getItem("jwt") || null
);

const reducer = (state = currentPlayerToken, action = {}) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;