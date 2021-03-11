import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import streamsReducer from "./streamsReducer";
import authReducer from "./authReducer";

export default combineReducers({
	streams: streamsReducer,
	auth: authReducer,
	form: formReducer,
});
