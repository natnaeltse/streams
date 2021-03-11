import jsonServer from "../apis/jsonServer";
import history from "../history";
import {
	SIGN_IN,
	SIGN_OUT,
	GET_STREAM,
	GET_STREAMS,
	CREATE_STREAM,
	EDIT_STREAM,
	DELETE_STREAM,
} from "./actionTypes";

export const signIn = (isSignedIn, userId, userEmail) => {
	return {
		type: SIGN_IN,
		payload: { isSignedIn, userId, userEmail },
	};
};

export const signOut = () => {
	return {
		type: SIGN_OUT,
	};
};

export const createStream = (formValues) => async (dispatch, getState) => {
	const userId = getState().auth.userId;
	const response = await jsonServer.post("/streams", { ...formValues, userId });

	dispatch({ type: CREATE_STREAM, payload: response.data });
	// Programmatic navigation to send the user back to the "/streams" page.
	history.push("/");
};

export const getStreams = () => async (dispatch) => {
	const response = await jsonServer.get("/streams");

	dispatch({ type: GET_STREAMS, payload: response.data });
};

export const getStream = (id) => async (dispatch) => {
	const response = await jsonServer.get(`/streams/${id}`);

	dispatch({ type: GET_STREAM, payload: response.data });
};

export const editStream = (id, formValues) => async (dispatch) => {
	const response = await jsonServer.patch(`/streams/${id}`, formValues);

	dispatch({ type: EDIT_STREAM, payload: response.data });
	history.push("/");
};

export const deleteStream = (id) => async (dispatch) => {
	// No response after deleting a data
	await jsonServer.delete(`/streams/${id}`);

	dispatch({ type: DELETE_STREAM, payload: id });
	history.push("/");
};
