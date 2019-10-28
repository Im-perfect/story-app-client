import { combineReducers } from "redux";
import currentPlayer from './currentPlayer'
import lobby from './lobby'


export default combineReducers({
    currentPlayer,
    lobby
});