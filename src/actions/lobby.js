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
      console.log("res.body", res.body);
      dispatch({
        type: ADD_LOBBY,
        payload: res.body
      });
      console.log("body id", res.body.id);
      return res.body.id;
    })
    .catch(console.error);
};

export const join = (gameId, playerJWT) => (dispatch, getState) => {
  //post request => response.id etc.
  return request
    .put(`${baseUrl}/lobbies/${gameId}`)
    .set("playerJWT", playerJWT)
    .then(res => {
      console.log("res.body", res.body);
      dispatch({
        type: ADD_LOBBY,
        payload: res.body
      });
      console.log("body id", res.body.id);
      return res.body.id;
    })
    .catch(console.error);
};

export const addLobbies = payload => ({
  type: "ADD_LOBBIES",
  payload
});

export const fillRandom = () => (dispatch, getState) => { 
    const a = {
            place: "random",
            character: "random",
            verb: "random",
            noun: "random"
        }
        return  a
//   return request
//     .get(`${baseUrl}/description/random`)
//     .then(res => {
//         // dispatch({
//         //     type: "GET_RANDOM_DESC",
//         //     description: res.body
//         // })
//        //res.body
//     })
//     .catch(console.error);
};
