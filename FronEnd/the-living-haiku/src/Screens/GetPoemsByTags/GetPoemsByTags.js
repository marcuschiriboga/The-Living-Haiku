import React from "react";
import "semantic-ui-css/semantic.min.css";
//import "./GetPoemsByTags.css";
import { Divider, Container } from "semantic-ui-react";
import SortPoemsByTag from "../../Components/SortPoemsByTag"
import NavBar from "../../Components/navigation/NavBar/NavBar";

class GetPoemsByTags extends React.Component {
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
            <SortPoemsByTag />
        </Container>
      </Container>
    );
  }
}

export default GetPoemsByTags;