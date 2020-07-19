// import React from "react";
// import "semantic-ui-css/semantic.min.css";
// import { Button, Checkbox, Form } from "semantic-ui-react";
// import firebase from "../firebase";

// import "./Login.css"

// //redux
// import {useSelector, useDispatch} from 'react-redux'
// import { loginSuccess } from '../actions/auth'
// class Login extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {};

//     //TODO: login functionality through firebase.
//     //TODO: save user-data to state.
//   }

//   render() {
//     return (
//       <>
//         <div id="firebaseui-auth-container">
//           <h1>Login</h1>
//         </div>
//         <div id="sign-in-status"></div>
//         <div id="sign-in"></div>
//         <pre id="account-details"></pre>
//         <Form action={this.loginFunction} method="POST">
//           <Form.Field>
//             <label>Email</label>
//             <input placeholder="Email" name="email" type="text" />
//           </Form.Field>
//           <Form.Field>
//             <label>Password</label>
//             <input placeholder="Password" name="password" type="text" />
//           </Form.Field>
//           {/* <Form.Field>
//             <Checkbox label="I agree to the Terms and Conditions" />
//           </Form.Field> */}
//           <Button type="submit">Submit</Button>
//           {/* onSubmit = {() => dispatch(loginSuccess(userData))} */}
//         </Form>
//       </>
//     );
//   }
// }


//   render() {
//     return (
//       <div>
//         <div id="firebaseui-auth-container">
//           <h1>Login</h1>
//         </div>
//         <div id="sign-in-status"></div>
//         <div id="sign-in"></div>
//         <pre id="account-details"></pre>
//         <div id="loginForm">
//           <Form action={this.loginFunction} method="POST" id='LoginForm'>
//           <Form.Field>
//             <label>Email</label>
//             <input placeholder="Email" name="email" type="text" />
//           </Form.Field>
//           <Form.Field>
//             <label>Password</label>
//             <input placeholder="Password" name="password" type="text" />
//           </Form.Field>
//           {/* <Form.Field>
//             <Checkbox label="I agree to the Terms and Conditions" />
//           </Form.Field> */}
//           <Button type="submit">Submit</Button>
//           {/* onSubmit = {() => dispatch(loginSuccess(userData))} */}
//         </Form>
//         </div>
        
//       </div>
//     );
//   }
// }


// export default Login;
