import React, { Component } from 'react';
import { connect } from 'react-redux';
import firebase from '../../firebase';
import './Register.css';
import { Grid, Form, Segment, Button, Message } from 'semantic-ui-react';
import { Link, Redirect } from 'react-router-dom';

class Register extends Component {
	constructor(props) {
		super(props);

		this.state = {
			username: '',
			email: '',
			password: '',
			passwordConfirmation: '',
			errors: [],
			loading: false,
			usersRef: firebase.database().ref('users')
		};
	}

	isFormValid = () => {
		let errors = [];
		let err;
		if (this.isFormEmpty(this.state)) {
			//throw error
			err = { message: 'Fill in all fields' };
			this.setState({ errors: errors.concat(err) });
			return false;
		} else if (!this.isPasswordVaild(this.state)) {
			//throw error
			err = { message: 'Password invalid' };
			this.setState({ errors: errors.concat(err) });
			return false;
		} else {
			return true;
		}
	};
	isPasswordVaild = ({ password, passwordConfirmation }) => {
		if (password.length < 6 || passwordConfirmation.length < 6) {
			return false;
		} else if (password !== passwordConfirmation) {
			return false;
		} else {
			return true;
		}
	};
	isFormEmpty = ({ username, email, password, passwordConfirmation }) => {
		return !username.length || !email.length || !password.length || !passwordConfirmation.length;
	};
	displayErrors = errors => errors.map((error, idx) => <p key={idx}>{error.message}</p>);
	handleChange = evt => {
		this.setState({
			[evt.target.name]: evt.target.value
		});
	};
	handleSubmit = event => {
		const rando = Math.floor(Math.random() * (0 - 8000 + 1) + 0);
		const avatar = `http://api.adorable.io/avatars/200/${rando}.png`;

		event.preventDefault();
		if (this.isFormValid()) {
			this.setState({ errors: [], loading: true });
			firebase
				.auth()
				.createUserWithEmailAndPassword(this.state.email, this.state.password)
				.then(createdUser => {
					createdUser.user
						.updateProfile({
							displayName: this.state.username,
							photoURL: avatar,
							isAuth: true
						})
						.then(() => {
							this.saveUser(createdUser).then(() => {
								console.log('user saved');
							});
						})
						.catch(err => {
							console.error(err);
							this.setState({
								errors: this.state.errors.concat(err),
								loading: false
							});
						});
				})
				.catch(err => {
					console.error(err);
					this.setState({
						errors: this.state.errors.concat(err),
						loading: false
					});
				});
		}
	};
	saveUser = createdUser => {
		return this.state.usersRef.child(createdUser.user.uid).set({
			name: createdUser.user.displayName,
			avatar: createdUser.user.photoURL
		});
	};
	handleInputError = (errors, inputName) => {
		return errors.some(error => error.message.toLowerCase().includes(inputName)) ? 'error' : '';
	};

	render() {
		if (this.props.isAuthenticated) {
			return <Redirect to="/Profile" />;
		}
		const { username, email, password, passwordConfirmation, errors, loading } = this.state;
		return (
			<div id="registerForm">

			<Grid textAlign="center" verticalAlign="middle" className="app" >
				<Grid.Column style={{ maxWidth: 450 }}>
					<Form onSubmit={this.handleSubmit} size="large" >
						<Segment stacked id="registerFromForm">
							<Form.Input
								fluid
								name="username"
								icon="user"
								iconPosition="left"
								placeholder="Username"
								onChange={this.handleChange}
								value={username}
								className={this.handleInputError(errors, 'username')}
								type="text"
							/>
								<Form.Input
									fluid
									name="email"
									icon="mail"
									iconPosition="left"
									placeholder="Email Address"
									onChange={this.handleChange}
									value={email}
									className={this.handleInputError(errors, 'email')}
									type="email"
								/>

								<Form.Input
									fluid
									name="password"
									icon="lock"
									iconPosition="left"
									placeholder="Password"
									onChange={this.handleChange}
									value={password}
									className={this.handleInputError(errors, 'password')}
									type="password"
								/>

								<Form.Input
									fluid
									name="passwordConfirmation"
									icon="repeat"
									iconPosition="left"
									placeholder="Password Confirmation"
									onChange={this.handleChange}
									value={passwordConfirmation}
									className={this.handleInputError(errors, 'password')}
									type="password"
								/>
								<div id="buttonContainer">
								<Button
									disabled={loading}
									className={loading ? 'loading' : ''}
									color="blue"
									fluid
									size="large"
									id="subButton"
								>
									Submit
								</Button>
								</div>
								{/* onSubmit={() => dispatch(registerSuccuss(userData))} */}
							</Segment>
						</Form>
						{errors.length > 0 && (
							<Message error>
								<h3>Error</h3>
								{this.displayErrors(errors)}
							</Message>
						)}
					</Grid.Column>
				</Grid>
				<Message>
					Already a user? <Link to="/login"> Sign In</Link>
				</Message>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	isAuthenticated: state.auth.isAuthenticated,
	loading: state.auth.isAuthenticated
});
export default connect(mapStateToProps)(Register);
