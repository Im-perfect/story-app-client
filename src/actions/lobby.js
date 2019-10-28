export const ADD_LOBBY = "ADD_LOBBY"

export const addLobby = (gameInfo) => (dispatch) => {
    //post request
    //get request
    dispatch({
        type: ADD_LOBBY,
        gameInfo
    })
  };