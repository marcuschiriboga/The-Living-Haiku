import React from "react";
import "semantic-ui-css/semantic.min.css";
//import "./UserHaikus.css";
import { Divider, Container } from "semantic-ui-react";
import ListPoems from "../../Components/ListPoems"
import NavBar from "../../Components/navigation/NavBar/NavBar";

class UserHaikus extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Container>
        <NavBar />

        <Divider />
        <Container id="postPage">
            <ListPoems />
        </Container>
      </Container>
    );
  }
}

export default UserHaikus;