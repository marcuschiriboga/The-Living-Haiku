import React from "react";
import "semantic-ui-css/semantic.min.css";
import { Image, List } from "semantic-ui-react";
import "./MenuBar.css";
//import "./MenuBar.css"
// import { Login } from "../../Components"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PageNotFound from "../PageNotFound.js";

//import SignUpScreen from "../../Screens/SignUpScreen/SignUpScreen"
import ProfileScreen from "../../Screens/ProfileScreen/ProfileScreen";
import HomeScreen from "../../Screens/HomeScreen/HomeScreen";
import SignUpScreen from "../../Screens/SignUpScreen/SignUpScreen";

//TODO: TO SCREENS
import Register from "../auth/Register";

import RegisterScreen from "../../Screens/RegisterScreen/RegisterScreen";
import NavBar from "./NavBar/NavBar";

class MenuBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <Router>
        <div id="total_page_container">
          <div className="title_bar">
            <h1>The Living Haiku</h1>
            <h3>生きている俳句</h3>
          </div>
          {/* <div className="menu">
            Menu
          </div> */}
          {/* <Image id="image" src='https://react.semantic-ui.com/images/wireframe/image.png' size='tiny' /> */}

          {/* <List id="menu" animated verticalAlign='middle'>
                    <List.Item>
                        <Image avatar src='https://react.semantic-ui.com/images/avatar/small/helen.jpg' />
                        <List.Content>
                            <List.Header>
                                <Link to="/">Home</Link>
                            </List.Header>
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <Image avatar src='https://react.semantic-ui.com/images/avatar/small/christian.jpg' />
                        <List.Content>
                            <List.Header>
                                <Link to="/Profile">Profile</Link>
                            </List.Header>
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <Image avatar src='https://react.semantic-ui.com/images/avatar/small/daniel.jpg' />
                        <List.Content>
                            <List.Header>
                                <Link to="/Logout">Logout</Link>
                            </List.Header>
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <Image avatar src='https://react.semantic-ui.com/images/avatar/small/daniel.jpg' />
                        <List.Content>
                            <List.Header>
                                <Link to="/test">test</Link>
                            </List.Header>
                        </List.Content>
                    </List.Item>
                </List> */}

          <Switch> 
            <Route path="/Logout">
              <RegisterScreen />
            </Route>
            <Route path="/Profile">
              <ProfileScreen />
            </Route>
            <Route path="/test">
              <NavBar />
            </Route>
            <Route exact path="/">
              <HomeScreen />
            </Route>
            <Route exact path="/Login">
              <SignUpScreen />
            </Route>
            <Route exact path="/register" component={RegisterScreen} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default MenuBar;
// export const Navigation = () => (
//     <BrowserRouter>
//         <Switch>
//             <Route path="/login">
//                 <Login />
//             </Route>
//             <Route path="*">
//                 <PageNotFound />8
//             </Route>
//         </Switch>
//     </BrowserRouter>
// );
