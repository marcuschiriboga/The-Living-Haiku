import * as actionTypes from './types';

export const loadUser = user => {
	return {
		type: actionTypes.USER_LOADED,
		payload: {
			currentUser: user
		}
	};
};

export const logoutUser = () => {
	return {
		type: actionTypes.CLEAR_USER
	};
};
