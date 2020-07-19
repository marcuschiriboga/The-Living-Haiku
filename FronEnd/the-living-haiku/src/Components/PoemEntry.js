import React from "react";
import "semantic-ui-css/semantic.min.css";
import { Button, Checkbox, Form } from "semantic-ui-react";
import firebase from "../firebase";

//redux
// import {useSelector, useDispatch} from 'react-redux'
// import { postPoem } from '../actions/poems'

class PoemEntry extends React.Component {
  constructor(props) {
    super(props);
    // TODO: pull userId from context/redux
    // TODO: properly link up poem database.
    this.state = {
      title: "",
      stanza1: "",
      stanza2: "",
      stanza3: "",
      errors: [],
      loading: false,
    };
  }
  handleChange = (evt) => this.setState({ [evt.target.name]: evt.target.value });
  handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(this.state);
    let userId = "DcKwK9kCAnRJrpudqVJS1bj9szh2";
    let poemData = {
      title: this.state.title,
      stanza1: this.state.stanza1,
      stanza2: this.state.stanza2,
      stanza3: this.state.stanza3,
      tags: ["educational", "testing"],
    };
    var newPostKey = firebase.database().ref().child("posts").push().key;
    console.log(newPostKey);

    console.log(poemData);
    firebase.database().ref(`users/${userId}/poems/${newPostKey}`).set(poemData);
    firebase.database().ref(`allpoems/${newPostKey}`).update(poemData);
  };

  render() {
    //const postPoemsData = useSelector(state => state.poemsReducer)
    const { title, stanza1, stanza2, stanza3 } = this.state;
    return (
      <Form classname="haiku_form" method="POST" onSubmit={this.handleSubmit}>
        <Form.Field>
          <label>Title</label>
          <input
            placeholder="Title of your Haiku"
            name="title"
            type="text"
            onChange={this.handleChange}
            value={title}
          />
        </Form.Field>
        <Form.Field>
          <label>Stanza 1</label>
          <input placeholder="5 syllables" name="stanza1" type="text" onChange={this.handleChange} value={stanza1} />
        </Form.Field>
        <Form.Field>
          <label>Stanza 2</label>
          <input placeholder="7 syllables" name="stanza2" type="text" onChange={this.handleChange} value={stanza2} />
        </Form.Field>
        <Form.Field>
          <label>Stanza 3</label>
          <input placeholder="5 syllables" name="stanza3" type="text" onChange={this.handleChange} value={stanza3} />
        </Form.Field>
        <Button type="submit">Submit</Button>
        {/* onSubmit={() => dispatch(postPoem(poemData))} */}
      </Form>
    );
  }
}

export default PoemEntry;
