import { baseUrl } from "./url";
import request from "superagent";

export const ADD_LOBBY = "ADD_LOBBY";

export const addLobby = (gameInfo, playerJWT) => (dispatch, getState) => {
  //post request => response.id etc.
  return request
    .post(`${baseUrl}/lobbies`)
    .set("playerJWT", playerJWT)
    .send(gameInfo)
    .then(res => {
        console.log("res.body", res.body)
      dispatch({
        type: ADD_LOBBY,
        payload: res.body
      });
      console.log("body id", res.body.id)
      return res.body.id
    })
    .catch(console.error); 
};

export const addLobbies = payload => ({
  type: "ADD_LOBBIES",
  payload
});
