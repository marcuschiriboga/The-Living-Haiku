import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Container } from 'semantic-ui-react';
import Login from '../../Components/auth/Login.js';
import NavBar from '../../Components/navigation/NavBar/NavBar';

class HomeScreen extends React.Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return (
			<Container>
				<NavBar />
				<Login />
			</Container>
		);
	}
}

export default HomeScreen;
