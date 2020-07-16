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
      <Form action="/" method="POST">
        <Form.Field>
          <label>title</label>
          <input placeholder="Name" name="name" type="text" />
        </Form.Field>
        <Form.Field>
          <label>stanza 1</label>
          <input placeholder="Name" name="stanza1" type="text" />
        </Form.Field>
        <Form.Field>
          <label>stanza 2</label>
          <input placeholder="Name" name="stanza2" type="text" />
        </Form.Field>
        <Form.Field>
          <label>stanza 3</label>
          <input placeholder="Name" name="stanza3" type="text" />
        </Form.Field>
        <Button type="submit">Submit</Button>
      </Form>
    );
  }
}

export default Login;
