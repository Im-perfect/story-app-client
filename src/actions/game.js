export const getGame = (id) => (dispatch, getState) => {
    //fetch game with id
    dispatch({
        type: "FETCH_GAME",
        payload:   {
            id: 0,
            name: "test name",
            player1: 1,
            player2: null,
            status: "waiting",
            story: {
              title: "title for this game",
              description: "this is a desc"
            }
          }
    })
}