import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Divider, Container } from 'semantic-ui-react';
import Login from '../../Components/auth/Login';
import NavBar from '../../Components/navigation/NavBar/NavBar';
import Register from '../../Components/auth/Register';
import { register } from '../../serviceWorker';

class RegisterScreen extends React.Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return (
			<Container>
				<NavBar />
				<Divider />
				<h2>Register New User</h2>
				<Register />
			</Container>
		);
	}
}

export default RegisterScreen;
