import {
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	USER_LOADED,
	AUTH_ERROR,
	LOGIN_FAIL,
	LOGIN_SUCCESS,
	LOGOUT
} from '../actions/types';

//TODO possiable token
const initalUserState = {
	isAuthenticated: false,
	loading: true,
	user: null
};

export default function(state = initalUserState, action) {
	const { type, payload } = action;
	switch (type) {
		case USER_LOADED:
			return {
				...state,
				isAuthenticated: true,
				loading: false,
				user: action.payload
			};
		case REGISTER_SUCCESS:
		case LOGIN_SUCCESS:
			return {
				...state,
				isAuthenticated: true,
				loading: false,
				user: action.payload
			};
		case AUTH_ERROR:
		case LOGIN_FAIL:
		case LOGOUT:
		case REGISTER_FAIL:
			localStorage.removeItem('token');
			return {
				...state,
				isAuthenticated: false,
				loading: false
			};
		default:
			return state;
	}
}
