import {
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	USER_LOADED,
	AUTH_ERROR,
	LOGIN_FAIL,
	LOGIN_SUCCESS,
	LOGOUT,
	CLEAR_USER
} from '../actions/types';

//TODO possiable token
const initalState = {
	isAuthenticated: false,
	loading: true,
	currentUser: null
};

const authReducer = (state = initalState, action) => {
	const { type, payload } = action;
	switch (type) {
		case USER_LOADED:
			return {
				...state,
				isAuthenticated: true,
				loading: false,
				currentUser: payload
			};
		case CLEAR_USER:
			return {
				...state,
				isAuthenticated: false,
				loading: false,
				currentUser: null
			};
		default:
			return state;
	}
};

export default authReducer;
