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

// export const loadUser = userData => {
// 	return {
// 		type: actionTypes.USER_LOADED,
// 		payload: userData

// 	};
// };
// export const loginSuccess = (userData) => {
// 	return {
// 		type: actionTypes.LOGIN_SUCCESS,
// 		payload: userData
// 	}
// }

// export const logoutUser = () => {
// 	return {
// 		type: actionTypes.LOGOUT,
// 		payload: null
// 	};
// };

// export const registerSuccess = (userData) => {
// 	return {
// 		type: actionTypes.REGISTER_SUCCESS,
// 		payload: userData
// 	}
// }
// //need to dispatch
// export const authError = (userData) => {
// 	return {
// 		type: actionTypes.AUTH_ERROR
// 	}
// }
// //need to dispatch
// export const loginFail = (userData) => {
// 	return {
// 		type: actionTypes.LOGIN_FAIL
// 	}
// }
