import { combineReducers } from "redux";
import results from "./results";
import errors from "./error";

export default combineReducers({ results, errors });
