import candidates from "./candidates";
import threads from "./threads";
import { combineReducers } from "redux";
import users from "./users";
import errors from "./errors";
export default combineReducers({candidates, users, threads, errors});