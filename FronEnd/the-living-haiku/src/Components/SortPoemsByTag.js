import React from "react"
import "semantic-ui-css/semantic.min.css";
import { Card, Icon, Button, Dropdown, Image } from "semantic-ui-react";
import firebase from "../firebase";

const options = [
	{ key: 'abstract', text: 'Abstract', value: 'abstract' },
	{ key: 'city', text: 'City', value: 'city' },
	{ key: 'night', text: 'Night', value: 'night' },
    { key: 'earth', text: 'Earth', value: 'earth' }
]
    
class SortPoemsByTag extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
          poemsList: {},
          poemsArray: [],
        };
            this.getData = () => {
            let userId = "DcKwK9kCAnRJrpudqVJS1bj9szh2";
            firebase
                .database()
                .ref(`/users/${userId}/poems/`)
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
                this.state.poemsList[keys].tag
            ];
            if(this.state.poemsList[keys].tag === options.value){
                console.log(keys);
                poemsArray.push(newPoem);}
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
                <div>h</div>
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
            <Card>
              <Card.Content header={`Haiku's By You`} />
              <Card.Content>
                <Card.Group>
                  <Card fluid color="red" header="The days grow longer" />
                  <Card fluid color="orange" header="The months and years seem to shrink" />
                  <Card fluid color="yellow" header="I love to eat food" />
                </Card.Group>
              </Card.Content>
              <Dropdown placeholder="Haiku(#Tags)" fluid multiple selection options={options} />
              <Button onClick={this.getData} positive>
                get
              </Button>
            </Card>
          </>
        );
      }
    
}

export default SortPoemsByTag;