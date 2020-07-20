import React from "react";
import "semantic-ui-css/semantic.min.css";
import { Button, Checkbox, Form, Dropdown } from "semantic-ui-react";
import firebase from "../firebase";
import { connect } from "react-redux";
import PomEntry from "../Components/PoemEntry.css";

const options = [
  { key: "Pets", text: "Pets", value: "pets" },
  { key: "Nature", text: "Nature", value: "nature" },
  { key: "love", text: "Love ", value: "love" },
  { key: "Home", text: "Home", value: "home" },
  { key: "Identity", text: "Identity", value: "identity" },
  { key: "Self", text: "Self", value: "self" },
  { key: "Spiritual", text: "Spiritual", value: "spiritual" },
  { key: "Toys", text: "Toys", value: "toys" },
  { key: "Games", text: "Games", value: "Games" },
  { key: "Time", text: "Time", value: "time" },
  { key: "Place", text: "Place", value: "place" },
  { key: "Future", text: "Future", value: "future" },
  { key: "Food", text: "Food", value: "food" },
  { key: "Sadness", text: "Sadness", value: "sadness" },
  { key: "Educational", text: "Educational", value: "Educational" },
];

class PoemEntry extends React.Component {
  constructor(props) {
    super(props);
    // TODO:
    this.state = {
      title: "",
      stanza1: "",
      stanza2: "",
      stanza3: "",
      tags: [],
      errors: [],
      loading: false,
    };
  }
  isFormValid = ({ userId, poemData }) => userId && poemData;
  dropdownHandler = (e, data) => {
    this.setState({ ...this.state, tags: data.value });
  };
  handleChange = (evt) => this.setState({ [evt.target.name]: evt.target.value });
  handleSubmit = (evt) => {
    // console.log(evt);
    evt.preventDefault();
    // console.log(this.state);
    let userId = this.props.currentUser.uid;
    let poemData = {
      title: this.state.title,
      stanza1: this.state.stanza1,
      stanza2: this.state.stanza2,
      stanza3: this.state.stanza3,
      tags: this.state.tags,
    };
    var newPostKey = firebase.database().ref().child("posts").push().key;
    // console.log(newPostKey);
    if (this.isFormValid({ userId, poemData })) {
      console.log(poemData);
      firebase.database().ref(`users/${userId}/poems/${newPostKey}`).set(poemData);
      firebase.database().ref(`allpoems/${newPostKey}`).update(poemData);
    }
  };

  render() {
    //const postPoemsData = useSelector(state => state.poemsReducer)
    const { title, stanza1, stanza2, stanza3 } = this.state;
    return (
      <Form classname="haiku_form" method="POST" onSubmit={this.handleSubmit} id="poem">
        <Form.Field className="formField">
          <label>Title</label>
          <input
            placeholder="Title of your Haiku"
            name="title"
            type="text"
            onChange={this.handleChange}
            value={title}
            required
          />
        </Form.Field>
        <Form.Field className="formField">
          <label>Stanza 1</label>
          <input
            placeholder="5 syllables"
            name="stanza1"
            type="text"
            onChange={this.handleChange}
            value={stanza1}
            required
          />
        </Form.Field>
        <Form.Field className="formField">
          <label>Stanza 2</label>
          <input
            placeholder="7 syllables"
            name="stanza2"
            type="text"
            onChange={this.handleChange}
            value={stanza2}
            required
          />
        </Form.Field>
        <Form.Field className="formField">
          <label>Stanza 3</label>
          <input
            placeholder="5 syllables"
            name="stanza3"
            type="text"
            onChange={this.handleChange}
            value={stanza3}
            required
          />
        </Form.Field>
        <Dropdown
          placeholder="Tag Your Poem for the Generator"
          fluid
          multiple
          selection
          options={options}
          onChange={this.dropdownHandler}
        />
        <Button type="submit" id="subButton">Submit</Button>
      </Form>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.auth.currentUser,
});
export default connect(mapStateToProps)(PoemEntry);
