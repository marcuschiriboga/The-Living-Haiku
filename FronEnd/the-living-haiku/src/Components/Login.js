import React from "react";
import "semantic-ui-css/semantic.min.css";
import { Button, Checkbox, Form } from "semantic-ui-react";
var firebase = require("../firebase");
class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  initApp = () => {
    firebase.auth().onAuthStateChanged(
      function (user) {
        if (user) {
          // User is signed in.
          var displayName = user.displayName;
          var email = user.email;
          var emailVerified = user.emailVerified;
          var photoURL = user.photoURL;
          var uid = user.uid;
          var phoneNumber = user.phoneNumber;
          var providerData = user.providerData;
          user.getIdToken().then(function (accessToken) {
            document.getElementById("sign-in-status").textContent = "Signed in";
            document.getElementById("sign-in").textContent = "Sign out";
            document.getElementById("account-details").textContent = JSON.stringify(
              {
                displayName: displayName,
                email: email,
                emailVerified: emailVerified,
                phoneNumber: phoneNumber,
                photoURL: photoURL,
                uid: uid,
                accessToken: accessToken,
                providerData: providerData,
              },
              null,
              "  ",
            );
          });
        } else {
          // User is signed out.
          document.getElementById("sign-in-status").textContent = "Signed out";
          document.getElementById("sign-in").textContent = "Sign in";
          document.getElementById("account-details").textContent = "null";
        }
      },
      function (error) {
        console.log(error);
      },
    );
  };

  render() {
    return (
      <>
        <div id="firebaseui-auth-container">ooo</div>
        <div id="sign-in-status"></div>
        <div id="sign-in"></div>
        <pre id="account-details"></pre>
        <br />
        <Form action="/api/auth" method="POST">
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
