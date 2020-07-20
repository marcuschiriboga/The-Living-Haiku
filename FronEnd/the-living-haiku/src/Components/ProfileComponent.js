import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Container, Card, Icon, Dropdown, Image } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
//import Profilecomponent from "../Components/Profilecomponent.css"
const description = [
	'Amy is a violinist with 2 years experience in the wedding industry.',
	'She enjoys the outdoors and currently resides in upstate New York.'
].join(' ');

const options = [
	{ key: 'angular', text: 'Angular', value: 'angular' },
	{ key: 'css', text: 'CSS', value: 'css' },
	{ key: 'design', text: 'Graphic Design', value: 'design' },
	{ key: 'ember', text: 'Ember', value: 'ember' },
	{ key: 'html', text: 'HTML', value: 'html' },
	{ key: 'ia', text: 'Information Architecture', value: 'ia' },
	{ key: 'javascript', text: 'Javascript', value: 'javascript' },
	{ key: 'mech', text: 'Mechanical Engineering', value: 'mech' },
	{ key: 'meteor', text: 'Meteor', value: 'meteor' },
	{ key: 'node', text: 'NodeJS', value: 'node' },
	{ key: 'plumbing', text: 'Plumbing', value: 'plumbing' },
	{ key: 'python', text: 'Python', value: 'python' },
	{ key: 'rails', text: 'Rails', value: 'rails' },
	{ key: 'react', text: 'React', value: 'react' },
	{ key: 'repair', text: 'Kitchen Repair', value: 'repair' },
	{ key: 'ruby', text: 'Ruby', value: 'ruby' },
	{ key: 'ui', text: 'UI Design', value: 'ui' },
	{ key: 'ux', text: 'User Experience', value: 'ux' }
];

// const convertTime = time => {
// 	let date = new Date(time);
// 	let options = {
// 		weekday: 'short',
// 		year: 'numeric',
// 		month: '2-digit',
// 		day: 'numeric',
// 		hour: 'numeric',
// 		minute: 'numeric'
// 	};

// 	const startDate = date.toLocaleDateString('en', options);

// 	return startDate;
// };

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
							<a>
								<Icon name="chart line" /> {`Number of Poems: `}
							</a>
						</Card.Content>
					</Card>
					<Dropdown placeholder="Haiku(s)" fluid multiple selection options={options} />
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
