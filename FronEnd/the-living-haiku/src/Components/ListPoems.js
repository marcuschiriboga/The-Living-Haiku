import React from "react";
import "semantic-ui-css/semantic.min.css";
import { Card, Icon, Button } from "semantic-ui-react";

class RandomHaikuGen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
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
        <Button positive>Like</Button>
        <Card.Content extra>
          <Icon name="user" />
          Randomize
        </Card.Content>
      </Card>
    );
  }
}

export default RandomHaikuGen;
