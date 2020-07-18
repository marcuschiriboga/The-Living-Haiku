import React from 'react';

import Login from './Components/Login';
import MenuBar from './Components/navigation/MenuBar';
import Register from './Components/auth/Register';
//import HomeScreen from './Screens/HomeScreen/HomeScreen';
//import RegisterScreen from './Screens/RegisterScreen/RegisterScreen';
//import MenuBar from './Components/navigation/MenuBar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import store from './store'
import { Provider } from "react-redux"
 
//Context Api for state End

export default function App() {
	return (
		<div className="App">
			<Provider store={store}>
				<BrowserRouter>
				<MenuBar />
				<Register />
				<Switch>
					<Route exact path="/login" component={Login} />
				</Switch>
				</BrowserRouter>
			</Provider>
			
		</div>
	);
}
