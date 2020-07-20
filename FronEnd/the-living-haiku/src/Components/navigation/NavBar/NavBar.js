import { auth } from "../../../firebase";

import React from "react";
import _ from "lodash";
import faker from "faker";
import "semantic-ui-css/semantic.min.css";
import "./NavBar.css";
import { Container, Card, Feed, Search, Grid, Dropdown, Image, Button } from "semantic-ui-react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import bamboo from "../../../Picture/Bamboo.png";

//just for now
let user = "databaseName";
//need to figure this out 100%
const source = _.times(5, () => ({
  title: faker.company.companyName(),
  description: faker.company.catchPhrase(),
  image: faker.internet.avatar(),
  price: faker.finance.amount(0, 100, 2, "$"),
}));

const friendOptions = [
  {
    key: "Home",
    text: "Home",
    value: "Home",
    image: { avatar: true, src: "/images/avatar/small/jenny.jpg" },
  },
  {
    key: "Profile",
    text: "Profile",
    value: "Profile",
    image: { avatar: true, src: "/images/avatar/small/elliot.jpg" },
  },
  {
    key: "Logout",
    text: "Logout",
    value: "Logout",
    image: { avatar: true, src: "/images/avatar/small/stevie.jpg" },
  },
  // {
  //     key: 'Post Poem',
  //     text: 'Post Poem',
  //     value: 'Post Poem',
  //     image: { avatar: true, src: '/images/avatar/small/christian.jpg' },
  // },
  // {
  //     key: 'Top Poems',
  //     text: 'Top Poems',
  //     value: 'Top Poems',
  //     image: { avatar: true, src: '/images/avatar/small/matt.jpg' },
  // },
  // {
  //     key: 'Your Poems',
  //     text: 'Your Poems',
  //     value: 'Your Poems',
  //     image: { avatar: true, src: '/images/avatar/small/justen.jpg' },
  // },
];

//button/dropdown
const options = [
  // {
  // 	key: 'Home',
  // 	icon: <i className="home icon" />,
  // 	text: <Link to="/">Home</Link>,
  // 	value: 'Home'
  // },
  // {
  // 	key: 'Profile',
  // 	icon: <i className="user icon" />,
  // 	text: <Link to="/Profile">Profile</Link>,
  // 	value: 'Profile'
  // },
  // {
  // 	key: 'Logout',
  // 	icon: <i className="sign out alternate icon" />,
  // 	text: <Link to="/Login">Login</Link>,
  // 	value: 'Logout'
  // },
  // {
  // 	key: 'Register',
  // 	icon: <i className="sign out alternate icon" />,
  // 	text: <Link to="/Register">Register</Link>,
  // 	value: 'register'
  // },

  {
    key: "Register",
    icon: <i className="sign out alternate icon" />,
    text: <Link onClick={() => auth.signOut()}>Signout</Link>,
    value: "signout",
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

  // Need to figure this out
  //+++++++
  handleResultSelect = (e, { result }) => this.setState({ value: result.title });

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value });

    setTimeout(() => {
      if (this.state.value.length < 1) return this.setState(this.state);

      const re = new RegExp(_.escapeRegExp(this.state.value), "i");
      const isMatch = (result) => re.test(result.title);

      this.setState({
        isLoading: false,
        results: _.filter(source, isMatch),
      });
    }, 300);
  };

  render() {
    const { isLoading, value, results } = this.state;
    return (
      <Container>
        <div id="navContainer">
          <Image id="image" src={bamboo} />

          <div id="dropDown">
            <Button.Group color="teal">
              <Button>
                <Grid>
                  <Grid.Column width={6}>
                    <Search
                      loading={isLoading}
                      onResultSelect={this.handleResultSelect}
                      onSearchChange={_.debounce(this.handleSearchChange, 500, {
                        leading: true,
                      })}
                      results={results}
                      value={value}
                      {...this.props}
                    />
                  </Grid.Column>
                </Grid>
              </Button>
              <Dropdown className="button icon" floating options={options} trigger={<React.Fragment />}></Dropdown>
            </Button.Group>
          </div>
        </div>
      </Container>
    );
  }
}

export default NavBar;
