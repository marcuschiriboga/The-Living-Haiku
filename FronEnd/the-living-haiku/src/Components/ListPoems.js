import React from "react";
import "semantic-ui-css/semantic.min.css";
import { Card, Icon, Button } from "semantic-ui-react";
import firebase from "../firebase";
class RandomHaikuGen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.getData = () => {
      firebase.database
        .ref("/poems/" + "DcKwK9kCAnRJrpudqVJS1bj9szh2/")
        .once("value")
        .then(function (snapshot) {
          var poem = snapshot.val();
          console.log("poem responce: " + poem);
        });
    };
  }
  //TODO: pull poems from database.
  //TODO: list poems with a certain list of tags.
  //TODO: list tags.

  render() {
    return (
      <Card>
        <Card.Content header={`Haiku's By You`} />
        <Card.Content>
          <Card.Group>
            <Card fluid color="red" header="The days grow longer" />
            <Card fluid color="orange" header="The months and years seem to shrink" />
            <Card fluid color="yellow" header="I love to eat food" />
          </Card.Group>
        </Card.Content>
        <Button onClick={this.getData} positive>
          get
        </Button>
      </Card>
    );
  }
}

export default RandomHaikuGen;
