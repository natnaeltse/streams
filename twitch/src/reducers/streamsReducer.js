import {
	GET_STREAM,
	GET_STREAMS,
	CREATE_STREAM,
	EDIT_STREAM,
	DELETE_STREAM,
} from "../actions/actionTypes";
import _ from "lodash";

const streamsReducer = (state = {}, action) => {
	switch (action.type) {
		case GET_STREAMS:
			return { ...state, ..._.mapKeys(action.payload, "id") };
		case GET_STREAM:
			return { ...state, [action.payload.id]: action.payload };
		case CREATE_STREAM:
			return { ...state, [action.payload.id]: action.payload };
		case EDIT_STREAM:
			return { ...state, [action.payload.id]: action.payload };
		case DELETE_STREAM:
			return _.omit(state, action.payload);
		default:
			return state;
	}
};

export default streamsReducer;
