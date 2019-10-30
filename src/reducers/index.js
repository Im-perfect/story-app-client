import { combineReducers } from "redux";
import currentPlayer from './currentPlayer'
import lobby from './lobby'
import currentGame from './currentGame'

export default combineReducers({
    currentPlayer,
    lobby,
    currentGame
});