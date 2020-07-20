import React from "react";
import "semantic-ui-css/semantic.min.css";
//import "./PostPoemsScreen.css";
import { Divider, Container } from "semantic-ui-react";
import PoemEntry from "../../Components/PoemEntry"
import NavBar from "../../Components/navigation/NavBar/NavBar";

class PostPoemsScreen extends React.Component {
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
            <PoemEntry />
        </Container>
      </Container>
    );
  }
}

export default PostPoemsScreen;