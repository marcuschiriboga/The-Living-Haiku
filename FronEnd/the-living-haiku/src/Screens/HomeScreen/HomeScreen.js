import React from "react";
import "semantic-ui-css/semantic.min.css";
import "./HomeScreen.css";
import { Divider, Container } from "semantic-ui-react";
import RandomHaikuGen from "../../Components/RandomHaikuGen";
import LeftSideBar from "../../Components/LeftSideBar";
import SignInBar from "../../Components/navigation/SignInBar";
import NavBar from "../../Components/navigation/NavBar/NavBar";
import Login from "../../Components/Login";
class HomeScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Container>
        <NavBar />
        <Divider />
        <Container id="homeContainer">
          <LeftSideBar />
          <RandomHaikuGen />
        </Container>
        <Login />
      </Container>
    );
  }
}

export default HomeScreen;
