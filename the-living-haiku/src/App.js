import React, { useEffect } from 'react';
import { auth } from './firebase';
import { setCurrentUser, clearCurrentUser } from './store/actions/auth';
import { connect } from 'react-redux';
import MenuBar from './Components/navigation/MenuBar';

import { BrowserRouter } from 'react-router-dom';

const App = ({ currentUser, setCurrentUser, clearCurrentUser }) => {

	useEffect(
		() => {
			let unsubscribeFromAuth = null;

			unsubscribeFromAuth = auth.onAuthStateChanged(currentUser => {
				currentUser ? setCurrentUser(currentUser) : clearCurrentUser(currentUser);
			});
			return () => unsubscribeFromAuth();
		},
		[ currentUser, setCurrentUser, clearCurrentUser ]
	);

	return (
		<div className="App">
			<BrowserRouter>
				<MenuBar />
			</BrowserRouter>
		</div>
	);
};

const mapStateToProps = state => ({
	currentUser: state.auth.currentUser
});
const mapDispatchToProps = dispatch => ({
	setCurrentUser: user => dispatch(setCurrentUser(user)),
	clearCurrentUser: () => dispatch(clearCurrentUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
