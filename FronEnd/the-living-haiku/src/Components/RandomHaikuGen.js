import React from "react";
import "semantic-ui-css/semantic.min.css";
import { Card, Icon, Button } from "semantic-ui-react";
import { poemlist } from "../PoemList";
import firebase from "../firebase";
import PoemEntry from "../Components/PoemEntry.css";
class RandomHaikuGen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      poemsList: {},
      poemsArray: [],
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
  componentDidMount() {
    let getData = () => {
      firebase
        .database()
        // .ref(`/users/${userId}/poems/`)
        .ref(`allpoems/`)
        .once("value")
        .then((snapshot) => {
          var poems = snapshot.val();

          this.setState({
            poemsList: poems,
          });
          let poemsArray = [];
          for (let keys in this.state.poemsList) {
            let newPoem = [
              this.state.poemsList[keys].title,
              this.state.poemsList[keys].stanza1,
              this.state.poemsList[keys].stanza2,
              this.state.poemsList[keys].stanza3,
            ];
            console.log(keys);
            poemsArray.push(newPoem);
          }
          this.setState({
            poemsArray: poemsArray,
          });
          this.setState({
            stanza1: this.state.poemsArray[Math.floor(Math.random() * this.state.poemsArray.length)][1],
            stanza2: this.state.poemsArray[Math.floor(Math.random() * this.state.poemsArray.length)][2],
            stanza3: this.state.poemsArray[Math.floor(Math.random() * this.state.poemsArray.length)][3],
          });
        });
    };
    getData();
  }
  render() {
    // this.getData();
    return (
      <Card>
        <Card.Content id="poem">
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
              stanza1: this.state.poemsArray[Math.floor(Math.random() * this.state.poemsArray.length)][1],
              stanza2: this.state.poemsArray[Math.floor(Math.random() * this.state.poemsArray.length)][2],
              stanza3: this.state.poemsArray[Math.floor(Math.random() * this.state.poemsArray.length)][3],
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
