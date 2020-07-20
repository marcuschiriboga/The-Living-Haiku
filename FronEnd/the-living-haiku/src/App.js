import React, { useEffect } from 'react';
import { auth } from './firebase';
import { setCurrentUser, clearCurrentUser } from './store/actions/auth';
import { connect } from 'react-redux';
// import Login from "./Components/Login";
// import MenuBar from "./Components/navigation/MenuBar";
// import Register from "./Components/auth/Register";
// import PageNotFound from "./Components/PageNotFound";

// import Login from './Components/auth/Login';
import MenuBar from './Components/navigation/MenuBar';
// import Register from './Components/auth/Register';
//import HomeScreen from './Screens/HomeScreen/HomeScreen';
//import RegisterScreen from './Screens/RegisterScreen/RegisterScreen';
//import MenuBar from './Components/navigation/MenuBar';

import { BrowserRouter } from 'react-router-dom';

const App = ({ currentUser, setCurrentUser, clearCurrentUser }) => {
	// return (
	//   <div className="App">
	//     <BrowserRouter>
	//       {/* Put everything that will need state between UserContext.Provider  */}
	//       <UserContext.Provider>
	//         <MenuBar />
	//         {/* <Switch>
	//           <Route exact path="/login" component={Login} />
	//           <Route exact path="/register" component={Register} />
	//         </Switch> */}
	//       </UserContext.Provider>
	//     </BrowserRouter>
	//   </div>
	// );

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
				{/* <Switch>
  					<Route exact path="/login" component={Login} />
  				</Switch> */}
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
