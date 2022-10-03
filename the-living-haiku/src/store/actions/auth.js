import * as actionTypes from './types';

export const setCurrentUser = user => {
	return {
		type: actionTypes.USER_LOADED,
		payload: user
	};
};
export const clearCurrentUser = () => ({
	type: actionTypes.CLEAR_USER
});