import { combineReducers } from 'redux';
import auth from './auth';
import profile from './profile';
import poemsReducer from './poems'
import loginSuccess from './auth'

const allReducers =  combineReducers({
	auth,
	profile,
	poemsReducer,
	loginSuccess
});

export default allReducers;