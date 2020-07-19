import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Container, Card, Icon, Dropdown, Image } from 'semantic-ui-react';
import { connect } from 'react-redux';
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

const ProfileComponent = ({ currentUser }) => {
	// constructor(props) {
	//   super(props);
	// }

	return (
		<Container>
			<Card id="Pro">
				<Card.Content header="Profile..." />
				<Card.Content>
					<Card>
						<Image src="https://react.semantic-ui.com/images/avatar/large/matthew.png" wrapped ui={false} />
						<Card.Content>
							<Card.Header>
								{currentUser && currentUser ? <p>{currentUser.displayName} </p> : <p>Login in</p>}
							</Card.Header>
							<Card.Meta>
								<span className="date">Joined in 2015</span>
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
	);
};

const mapStateToProps = state => ({
	currentUser: state.auth.currentUser
});

export default connect(mapStateToProps)(ProfileComponent);
