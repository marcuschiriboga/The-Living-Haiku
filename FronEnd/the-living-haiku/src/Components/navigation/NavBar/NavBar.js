import React from "react";
import _ from "lodash";
import faker from "faker";
import "semantic-ui-css/semantic.min.css";
import "./NavBar.css";
import { Container, Card, Feed, Search, Grid, Dropdown, Image, Button } from "semantic-ui-react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import dojo from "../../../Picture/dojo.png";

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
  //++++++++

  render() {
    const { isLoading, value, results } = this.state;
    return (
      <Container>
        <div id="navContainer">
          <Image id="image" src={dojo} />

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
