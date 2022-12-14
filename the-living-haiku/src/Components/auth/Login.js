import React, { Fragment } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import 'semantic-ui-css/semantic.min.css';
import { Button, Message, Form } from 'semantic-ui-react';
import firebase from '../../firebase';
import './Login.css';

class Login extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: '',
			errors: [],
			loading: false
		};
	}

	isformValid = ({ email, password }) => email && password;
	displayErrors = ({ errors }) => errors.map(error => <p key={uuidv4()}>{error.message}</p>);
	handleChange = evt => this.setState({ [evt.target.name]: evt.target.value });

	handleSubmit = evt => {
		evt.preventDefault();
		if (this.isformValid(this.state)) {
			this.setState({ error: [], loading: true });
			firebase
				.auth()
				.signInWithEmailAndPassword(this.state.email, this.state.password)
				.then(signInUser => {
					this.setState({ errors: [], loading: false });
					console.log({ signInUser });
					console.log(signInUser.user.providerData);
					console.log(signInUser.user.uid);
				})
				.catch(err => {
					console.log(err);
					console.log(err);
					this.setState({
						errors: this.state.errors.concat(err),
						loading: false
					});
				});
		}
	};

	render() {
		if (this.props.isAuthenticated) {
			return <Redirect to="/Profile" />;
		}
		const { email, password, errors } = this.state;
		return (
			<Fragment>
				<div id="firebaseui-auth-container">
					<h1>Login</h1>
				</div>
				<div id="sign-in-status" />
				<div id="sign-in" />
				<pre id="account-details" />
				<Form action={this.loginFunction} method="POST" onSubmit={this.handleSubmit} id="loginForm">
					<Form.Field>
						<label>Email</label>
						<input
							placeholder="Email"
							name="email"
							type="text"
							// className={this.handleInputError(errors, 'email')}
							onChange={this.handleChange}
							value={email}
						/>
					</Form.Field>
					<Form.Field>
						<label>Password</label>
						<input
							placeholder="Password"
							name="password"
							type="password"
							// className={this.handleInputError(errors, 'password')}
							onChange={this.handleChange}
							value={password}
						/>
					</Form.Field>
					<Button disabled={this.props.loading} className={this.props.loading ? 'loading' : ''} type="submit">
						Submit
					</Button>
				</Form>
				{errors.length > 0 && (
					<Message error>
						<h3>Error</h3>
						{this.displayErrors(errors)}
					</Message>
				)}
				<Message>
					Need an account <Link to="/register"> Sign In</Link>
				</Message>
			</Fragment>
		);
	}
}
const mapStateToProps = state => ({
	isAuthenticated: state.auth.isAuthenticated,
	loading: state.auth.isAuthenticated
});
export default connect(mapStateToProps)(Login);
