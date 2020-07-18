import React from "react";
import "semantic-ui-css/semantic.min.css";
import { Card, Icon, Button } from "semantic-ui-react";

class RandomHaikuGen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      stanza1: "",
      stanza2: "",
      stanza3: "",
    };
  }
  // TODO: pull poems from firebase
  // TODO: pull pomems from state
  // TODO: generate random poems from the poems in state
  sampleArray = {
    stanza1: ["the days grow longer", "dogs are just pure love", "apples and oranges", "tacos or sushi"],
    stanza2: [
      "The months and years seem to shrink",
      "and sometimes after your job",
      "how is the comparison fair",
      "choosing your dinner in love",
    ],
    stanza3: ["I love to eat food", "thats just what you need", "fruit has uniquness", "what could be harder"],
  };
  buildRandomPoem = (poemlist) => {
    this.setState({
      stanza1: poemlist[0][Math.round(Math.random() * poemlist[0].length)],
      stanza2: poemlist[1][Math.round(Math.random() * poemlist[1].length)],
      stanza3: poemlist[2][Math.round(Math.random() * poemlist[2].length)],
    });
  };

  render() {
    return (
      <Card>
        <Card.Content>
          <Card.Group>
            <Card fluid color="red" header={this.stanza1} />
            <Card fluid color="orange" header={this.stanza2} />
            <Card fluid color="yellow" header={this.stanza3} />
          </Card.Group>
        </Card.Content>
        <Button
          positive
          onClick={(sampleArray) => {
            this.setState({
              stanza1: sampleArray["stanza1"][Math.round(Math.random() * 4)],
              stanza2: sampleArray[1][Math.round(Math.random() * 4)],
              stanza3: sampleArray[2][Math.round(Math.random() * 4)],
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
