import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Divider, Container } from 'semantic-ui-react';
import Login from '../../Components/auth/Login';
import NavBar from '../../Components/navigation/NavBar/NavBar';
import Register from '../../Components/auth/Register';
import { register } from '../../serviceWorker';
import './RegisterScreen.css'
class RegisterScreen extends React.Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return (
			<Container >
				<NavBar />
				<Divider />
				<div id='Container'>
					<h2>Register New User</h2>
					<Register />
				</div>
				
			</Container>
		);
	}
}

export default RegisterScreen;
