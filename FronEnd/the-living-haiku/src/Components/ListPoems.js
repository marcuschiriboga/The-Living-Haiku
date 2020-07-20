import React from "react";
import "semantic-ui-css/semantic.min.css";
import { Card, Button, } from "semantic-ui-react";
import firebase from "../firebase";
import "./ListPoems.css"
// import ListPoems from "./ListPoems.css";


// class RandomHaikuGen extends React.Component {
class ListAllPoems extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      poemsList: {},
      poemsArray: [],
    };
    this.getData = () => {
      firebase
        .database()
        .ref(`/allpoems/`)
        // .ref(`allpoems/`)
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
        });
    };
  }
  //TODO: list poems with a certain list of tags.
  //TODO: list tags.

  render() {
    console.log(this.state.poemsArray);
    // let randomPoem = poems[0][2];
    //   poems[Math.floor(Math.random() * poems.length)][3],
    //   poems[Math.floor(Math.random() * poems.length)][4],
    // ];
    // console.log(randomPoem);
    return (
      <>
        {this.state.poemsArray.map((content, index) => {
          console.log(content);
          return (
            <>
              <Card key={index} index={index}>
                <Card.Content header={content[0]} />
                <Card.Content>
                  <Card.Group>
                    <Card header={content[1]} />
                    <Card header={content[2]} />
                    <Card header={content[3]} />
                  </Card.Group>
                </Card.Content>
              </Card>
            </>
          );
        })}
        <Card id="cardBox">
          <Card.Content header={`Haiku's By You`} />
          <Card.Content>
            <Card.Group>
              <Card fluid color="red" header="The days grow longer" />
              <Card fluid color="orange" header="The months and years seem to shrink" />
              <Card fluid color="yellow" header="I love to eat food" />
            </Card.Group>
          </Card.Content>
          <Button onClick={this.getData} positive id="subButton">
            get
          </Button>
        </Card>
      </>
    );
  }
}

export default ListAllPoems;
