import { combineReducers } from "redux";
import currentPlayer from "./currentPlayer";
import lobby from "./lobby";
import currentGame from "./currentGame";
import messages from "./messages";
import playerTurn from "./playerTurn";
import me from "./me"

export default combineReducers({
  currentPlayer,
  lobby,
  currentGame,
  messages,
  playerTurn,
  me
});
