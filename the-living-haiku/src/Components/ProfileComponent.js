import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Container, Card, Icon,  Image } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const ProfileComponent = ({ currentUser, isAuthenticated }) => {
	return isAuthenticated ? (
		<Container>
			<Card id="Pro">
				<Card.Content header={`${currentUser.displayName}`} />
				<Card.Content>
					<Card>
						<Image src={`${currentUser.photoURL}`} wrapped ui={false} />
						<Card.Content>
							<Card.Header>
								{currentUser && currentUser ? <p>{currentUser.email} </p> : <p>Login in</p>}
							</Card.Header>
							<Card.Meta>
								<p className="date">Created @ {`${currentUser.createdAt}`}</p>
								<p className="date">Last Login @ {`${currentUser.lastLoginAt}`}</p>
							</Card.Meta>
							<Card.Description>
								{currentUser && currentUser ? (
									<p>{currentUser.displayName} is a musician living in Nashville.</p>
								) : (
									<p>Login in</p>
								)}
							</Card.Description>
						</Card.Content>
						<Card.Content extra>
							<div>
								<Icon name="chart line" /> {`Number of Poems: `}
							</div>
						</Card.Content>
					</Card>
					
				</Card.Content>
				<Card.Content extra>
					<Icon name="calendar check" />
					{`Date Joined: [already dynamic]`}
				</Card.Content>
			</Card>
		</Container>
	) : (
		<Redirect to="/Login" />
	);
};

const mapStateToProps = state => ({
	currentUser: state.auth.currentUser,
	isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(ProfileComponent);
