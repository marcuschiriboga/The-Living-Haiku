import React from "react";
import "semantic-ui-css/semantic.min.css";
import { Card, Icon, Button } from "semantic-ui-react";
import { poemlist } from "../PoemList";
class RandomHaikuGen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      stanza1: "",
      stanza2: "",
      stanza3: "",

      // TODO: pull poems from firebase
      // TODO: pull pomems from state
      // TODO: generate random poems from the poems in state
    };
  }
  buildRandomPoem = (poemlist) => {
    this.setState({
      stanza1: poemlist[0][0],
      stanza2: poemlist[1][Math.round(Math.random() * poemlist[1].length)],
      stanza3: poemlist[2][Math.round(Math.random() * poemlist[2].length)],
    });
  };

  render() {
    return (
      <Card>
        <Card.Content>
          <Card.Group>
            <Card fluid color="red" header={this.state.stanza1} />
            <Card fluid color="orange" header={this.state.stanza2} />
            <Card fluid color="yellow" header={this.state.stanza3} />
          </Card.Group>
        </Card.Content>
        <Button
          positive
          onClick={() => {
            this.setState({
              stanza1: poemlist[0][Math.floor(Math.random() * poemlist[0].length)],
              stanza2: poemlist[1][Math.floor(Math.random() * poemlist[1].length)],
              stanza3: poemlist[2][Math.floor(Math.random() * poemlist[2].length)],
            });
          }}
        >
          Randomize
        </Button>
      </Card>
    );
  }
}

export default RandomHaikuGen;
