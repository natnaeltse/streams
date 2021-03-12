import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import streamReducer from "./streamsReducer";
import authReducer from "./authReducer";

export default combineReducers({
	streams: streamReducer,
	auth: authReducer,
	form: formReducer,
});
