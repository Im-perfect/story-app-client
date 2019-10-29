const lobby = [
  {
    id: 0,
    name: "test name",
    player1: 1,
    player2: null,
    status: "waiting",
    story: {
      title: "title for this game",
      description: "this is a desc"
    }
  },
  {
    id: 3,
    name: "test name111",
    player1: 5,
    player2: 24,
    status: "full",
    story: {
      title: "title for this game",
      description: "this is a desc"
    }
  }
];

const reducer = (state = lobby, action = {}) => {
  switch (action.type) {
    case "ADD_LOBBY":
      return [
        ...state,
        {
          id: 1,
          name: "test name111",
          player1: 5,
          player2: null,
          status: "waiting",
          story: {
            title: action.gameInfo.title,
            description: action.gameInfo.description
          }
        }
      ];
    case "SIGN_OUT":
      return [];
    default:
      return state;
  }
};

export default reducer;
