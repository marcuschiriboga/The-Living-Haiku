import React from "react";
import "semantic-ui-css/semantic.min.css";
import "./MenuBar.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ProfileScreen from "../../Screens/ProfileScreen/ProfileScreen";
import HomeScreen from "../../Screens/HomeScreen/HomeScreen";
import SignUpScreen from "../../Screens/SignUpScreen/SignUpScreen";
import AllPoemsScreen from "../../Screens/AllPoemsScreen/AllPoemsScreen";
import { Container, Card, Feed, Search, Grid, Dropdown, Image, Button } from 'semantic-ui-react';

//TODO: TO SCREENS
import RegisterScreen from "../../Screens/RegisterScreen/RegisterScreen";
import NavBar from "./NavBar/NavBar";
import PostPoemsScreen from "../../Screens/PostPoemsScreen/PostPoemsScreen";
import UserHaikus from "../../Screens/UserHaikus/UserHaikus";
import GetPoemsByTags from "../../Screens/GetPoemsByTags/GetPoemsByTags";
import dojo from "../../Picture/dojo.png";
import bamboo from "../../Picture/Bamboo.png";

class MenuBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      
      <Router>
        <div id="total_page_container">
          <div className="dojo_container">
            <img src= {dojo} alt="nothing loaded" />
           </div>
          <div className="title_bar">
            <h1 className="animate__fadeIn">The Living Haiku</h1>
            <h3>生きている俳句</h3>
          </div>

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
            <Route exact path="/login">
              <SignUpScreen />
            </Route>
            <Route exact path="/register" component={RegisterScreen} />
            <Route exact path="/PostPoems" component={PostPoemsScreen} />
            <Route exact path="/UserHaikus" component={UserHaikus} />
            <Route exact path="/GetPoemsByTags" component={GetPoemsByTags} />
            <Route exact path="/allHaikus" component={AllPoemsScreen} />
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
