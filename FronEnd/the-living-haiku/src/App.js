// import React, { useState, useEffect } from "react";
// import Axios from "axios";
// import setAuthToken from "./utlis/setAuthToken";

// import Login from "./Components/Login";
// import MenuBar from "./Components/navigation/MenuBar";
// import Register from "./Components/auth/Register";
// import PageNotFound from "./Components/PageNotFound";
// //Context Api for state Start
// import UserContext from "./context/UserContext";
// import { BrowserRouter, Route, Switch } from "react-router-dom";
//
import React from "react";

import Login from "./Components/Login";
import MenuBar from "./Components/navigation/MenuBar";
import Register from "./Components/auth/Register";
//import HomeScreen from './Screens/HomeScreen/HomeScreen';
//import RegisterScreen from './Screens/RegisterScreen/RegisterScreen';
//import MenuBar from './Components/navigation/MenuBar';

import { BrowserRouter, Route, Switch } from "react-router-dom";

//Context Api for state End

export default function App() {
  // 	const [ userData, setUserData ] = useState({
  // 		token: undefined,
  // 		user: undefined,
  // 		isAuthenticated: false,
  // 		loading: true
  // 	});

  // 	useEffect(() => {
  // 		setAuthToken(localStorage.token);
  // 		const checkLoggedIn = async () => {
  // 			let token = localStorage.getItem('x-auth-token');
  // 			if (token === null) {
  // 				localStorage.setItem('x-auth-token', '');
  // 				token = '';
  // 			}
  // 			if (token) {
  // 				const userRes = await Axios.get('http://localhost:5000/api/auth', {
  // 					header: { 'x-auth-token': token }
  // 				});

  // 				setUserData({
  // 					token,
  // 					user: userRes.data,
  // 					isAuthenticated: true
  // 				});

  // 			}
  // 		};
  // 		checkLoggedIn();
  // 	}, []);

  return (
    <div className="App">
      <BrowserRouter>
        {/* Put everything that will need state between UserContext.Provider  */}
        <UserContext.Provider>
          <MenuBar />
          {/* <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
          </Switch> */}
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );

  // 	return (
  // 		<div className="App">
  // 			<BrowserRouter>
  // 				<MenuBar />
  // 				<Register />
  // 				<Switch>
  // 					<Route exact path="/login" component={Login} />
  // 				</Switch>
  // 			</BrowserRouter>
  // 		</div>
  // 	);
}
