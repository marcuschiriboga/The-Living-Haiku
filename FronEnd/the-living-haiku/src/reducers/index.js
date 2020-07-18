import { combineReducers } from 'redux';
import auth from './auth';
import profile from './profile';

const allReducers =  combineReducers({
	auth,
	profile
});

export default allReducers;