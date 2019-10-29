export const ADD_LOBBY = "ADD_LOBBY"

export const addLobby = (gameInfo) => (dispatch) => {
    //post request => response.id etc.
    dispatch({
        type: ADD_LOBBY,
        gameInfo
    })
  };

export const addLobbies = (payload) => ({
    type: "ADD_LOBBIES",
    payload
})