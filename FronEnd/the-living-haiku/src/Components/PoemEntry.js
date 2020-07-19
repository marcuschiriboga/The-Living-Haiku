import React from "react";
import "semantic-ui-css/semantic.min.css";
import { Button, Checkbox, Form } from "semantic-ui-react";
import firebase from "../firebase";

class PoemEntry extends React.Component {
  constructor(props) {
    super(props);
    // TODO: pull userId from Redux
    // TODO: properly link up poem database -- done
    // TODO: send the right data

    this.writeNewPost = (userId, title, stanza1, stanza2, stanza3) => {
      let poemData = {
        userId: "DcKwK9kCAnRJrpudqVJS1bj9szh2",
        title: "title",
        stanza1: "the days grow longer",
        stanza2: "The months and years seem to shrink",
        stanza3: "thats just what you need",
      };

      console.log(poemData);
      firebase.database().ref(`poems/${userId}`).update(poemData);
    };
  }

  render() {
    return (
      <Form classname="haiku_form" onSubmit={this.writeNewPost}>
        <Form.Field>
          <label>Title</label>
          <input placeholder="Title of your Haiku" name="title" type="text" />
        </Form.Field>
        <Form.Field>
          <label>Stanza 1</label>
          <input placeholder="5 syllables" name="stanza1" type="text" />
        </Form.Field>
        <Form.Field>
          <label>Stanza 2</label>
          <input placeholder="7 syllables" name="stanza2" type="text" />
        </Form.Field>
        <Form.Field>
          <label>Stanza 3</label>
          <input placeholder="5 syllables" name="stanza3" type="text" />
        </Form.Field>
        <Button type="submit">Submit</Button>
      </Form>
    );
  }
}

export default PoemEntry;
