import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import allReducers from './reducers';

const initalState = {};

const middleware = [ thunk ];

const store = createStore(allReducers, initalState, composeWithDevTools(applyMiddleware(...middleware)));

let currentState = store.getState();

store.subscribe(() => {
	//let previousState = currentState;
	currentState = store.getState();
});

export default store;
