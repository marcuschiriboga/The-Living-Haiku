import * as actionTypes from './types';

export const loadUser = userData => {
	return {
		type: actionTypes.USER_LOADED,
		payload: userData
		
	};
};
export const loginSuccess = (userData) => {
	return {
		type: actionTypes.LOGIN_SUCCESS,
		payload: userData
	}
}

export const logoutUser = () => {
	return {
		type: actionTypes.CLEAR_USER,
		payload: {

		}
	};
};
