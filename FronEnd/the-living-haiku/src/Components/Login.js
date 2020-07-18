import React from "react";
import "semantic-ui-css/semantic.min.css";
import { Button, Checkbox, Form } from "semantic-ui-react";
import firebase from "../firebase";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

    //TODO: login functionality through firebase.
    //TODO: save user-data to state.
  }

  render() {
    return (
      <>
        <div id="firebaseui-auth-container">ooo</div>
        <div id="sign-in-status"></div>
        <div id="sign-in"></div>
        <pre id="account-details"></pre>
        <Form action={this.loginFunction} method="POST">
          <Form.Field>
            <label>Email</label>
            <input placeholder="Email" name="email" type="text" />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input placeholder="Password" name="password" type="text" />
          </Form.Field>
          <Form.Field>
            <Checkbox label="I agree to the Terms and Conditions" />
          </Form.Field>
          <Button type="submit">Submit</Button>
        </Form>
      </>
    );
  }
}

export default Login;
