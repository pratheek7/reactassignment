import { components } from "./components";
import { board } from "./board";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    components,
    board
});

export default rootReducer;