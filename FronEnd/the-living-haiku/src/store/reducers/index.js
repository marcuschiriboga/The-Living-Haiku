import { combineReducers } from 'redux';
import authReducer from './authReducer';

export default combineReducers({
	auth: authReducer
});

// import auth from './auth';
// import profile from './profile';
// import poemsReducer from './poems'
// import loginSuccess from './auth'
// import logoutUser from './auth'
// import registerSuccess from './auth'
// import getOnePoem from './poems'
// import getPoems from './poems'

// const allReducers =  combineReducers({
// 	auth,
// 	profile,
// 	poemsReducer,
// 	loginSuccess,
// 	logoutUser,
// 	registerSuccess,
// 	getOnePoem,
// 	getPoems
// });

// export default allReducers;
