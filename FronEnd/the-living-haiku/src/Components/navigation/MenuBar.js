import React from "react"
import 'semantic-ui-css/semantic.min.css'
import { Image, List } from 'semantic-ui-react'
// import { Login } from "../../Components"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import PageNotFound from "../PageNotFound.js";
import Login from "../Login";
import HomeScreen from "../../Screens/HomeScreen/HomeScreen"

class MenuBar extends React.Component {
    constructor(props){
        super(props)

        this.state = {

        }
    }
    render(){
        return (
            <Router>
                <div id="menuBarContainer">

                <List animated verticalAlign='middle'>
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
                </List>

                <Switch>
                    <Route path="/Logout">
                        <Login />
                    </Route>
                    <Route path="/Profile">
                        <Users />
                    </Route>
                    <Route path="/">
                        <HomeScreen />
                    </Route>
                </Switch>
                </div>
            </Router>
        )
    }
}

function Home() {
    return <h2>Home</h2>;
  }
  
  function About() {
    return <h2>About</h2>;
  }
  
  function Users() {
    return <h2>Users</h2>;
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