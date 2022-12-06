import authreducer from "./authreduce";
import { combineReducers } from "redux";
import ErrorReducer from "./ErrorReducer";

const rootreducer = combineReducers({ authreducer, ErrorReducer });

export default rootreducer;
