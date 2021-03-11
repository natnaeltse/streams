/* eslint-disable import/no-anonymous-default-export */
const INITAIL_STATE = {
	isSignedIn: null,
	userId: null,
	userEmail: null,
};

export default (state = INITAIL_STATE, action) => {
	switch (action.type) {
		case "SIGN_IN":
			return {
				...state,
				...action.payload,
			};
		case "SIGN_OUT":
			return { ...state, isSignedIn: false, userId: null, userEmail: null };
		default:
			return state;
	}
};

// isSignedIn: true,
// userId: action.payload.userId,
// userEmail: action.payload.userEmail,
