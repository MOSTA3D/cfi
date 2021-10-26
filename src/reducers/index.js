import candidates from "./candidates";
import threads from "./threads";
import { combineReducers } from "redux";

export default combineReducers(candidates, threads);