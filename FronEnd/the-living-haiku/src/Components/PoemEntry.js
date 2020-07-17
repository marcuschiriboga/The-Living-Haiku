import React from "react";
import "semantic-ui-css/semantic.min.css";
import { Button, Checkbox, Form } from "semantic-ui-react";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Form classname="haiku_form" action="/" method="POST" >
        <Form.Field>
          <label>Title</label>
          <input placeholder="Title of your Haiku" name="name" type="text" />
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

export default Login;
