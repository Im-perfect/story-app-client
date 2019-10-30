import { combineReducers } from "redux";
import currentPlayer from "./currentPlayer";
import lobby from "./lobby";
import currentGame from "./currentGame";
import messages from "./messages";

export default combineReducers({
  currentPlayer,
  lobby,
  currentGame,
  messages
});
