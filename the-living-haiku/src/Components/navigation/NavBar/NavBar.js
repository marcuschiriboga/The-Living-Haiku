import { auth } from '../../../firebase';
// <<<<<<< HEAD
import { connect } from 'react-redux';
import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import './NavBar.css';
import { Container, Card, Feed, Search, Grid, Dropdown, Image, Button } from 'semantic-ui-react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import bamboo from "../../../Picture/Bamboo.png";


//button/dropdown
const options = [
	{
		key: 'Signout',
		icon: <i className="sign out alternate icon" />,
		text: (
			<Link onClick={() => auth.signOut()} to="/Login">
				Signout
			</Link>
		),
		value: 'signout'
	},
  {
    key: "Home",
    icon: <i className="home icon"></i>,
    text: <Link to="/">Home</Link>,
    value: "Home",
  },
  {
    key: "Profile",
    icon: <i className="user icon"></i>,
    text: <Link to="/Profile">Profile</Link>,
    value: "Profile",
  },
  {
    key: "Logout",
    icon: <i className="sign out alternate icon"></i>,
    text: <Link to="/Login">Login</Link>,
    value: "Logout",
  },
  {
    key: "Register",
    icon: <i className="sign out alternate icon"></i>,
    text: <Link to="/Register">Register</Link>,
    value: "register",
  },
  {
    key: "PostPoems",
    icon: <i className="sign out alternate icon"></i>,
    text: <Link to="/PostPoems">Contribute Poems</Link>,
    value: "PostPoems",
  },
  {
    key: "UserHaikus",
    icon: <i className="sign out alternate icon"></i>,
    text: <Link to="/UserHaikus">Your Haikus</Link>,
    value: "UserHaikus",
  },
  {
    key: "AllHaikus",
    icon: <i className="sign out alternate icon"></i>,
    text: <Link to="/allHaikus">All Haikus</Link>,
    value: "AllHaikus",
  },
  {
    key: "GetPoemsByTags",
    icon: <i className="sign out alternate icon"></i>,
    text: <Link to="/GetPoemsByTags">Haiku's By #Tag</Link>,
    value: "GetPoemsByTags",
  },
];

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //for the search bar
      isLoading: false,
      results: [],
      value: "",
    };
  }

  render() {
    const { isLoading, value, results } = this.state;
    return (
      <Container>
        <div id="navContainer">
          {/* TODO:: reorganize navBar and bring bamboo up */}
          <div id="dropDown">
              <Dropdown className="button icon" floating options={options} trigger={<React.Fragment />}></Dropdown>
              Menu
            
          </div>
        </div>
      </Container>
    );
  }
}

export default NavBar;
