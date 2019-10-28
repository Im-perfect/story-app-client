export const ADD_LOBBY = "ADD_LOBBY"

export const addLobby = (gameInfo) => (dispatch) => {
    dispatch({
        type: ADD_LOBBY,
        gameInfo
    })
  };

  export const test = () => (dispatch) => {
    dispatch({
        type: "SIGN_OUT"
    })
  };