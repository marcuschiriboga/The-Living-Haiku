import React from "react";
import "semantic-ui-css/semantic.min.css";
import "./ProfileScreen.css";
import { Divider, Container } from "semantic-ui-react";
import PoemEntry from "../../Components/PoemEntry";
import LeftSideBar from "../../Components/LeftSideBar";
import NavBar from "../../Components/navigation/NavBar/NavBar";
import ProfileComponent from "../../Components/ProfileComponent";

class ProfileScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Container>
        <NavBar />
        <Divider />
        <div id="bg">
          <div class="scene">
            <div class="background">
              <div class="sun" />
            </div>
          </div>
        </div>
        <Container id="profileContainer">
          {/* <Container id="leftSideBar"> */}
            {/* <LeftSideBar /> */}
            {/* <PoemEntry /> */}
            <div class="moon" />
          {/* </Container> */}
          <Container id="profileComponent">
            <ProfileComponent />
          </Container>
        </Container>
      </Container>
    );
  }

  // constructor(props){
  //     super(props)

  //     this.state = {

  //     }
  // }

  // render(){
  //     return (
  //         <Container>
  //             <NavBar/>

  //             <Divider />

  //             <Container id="profileContainer">
  //             <Container id="leftSideBar">
  //                 <LeftSideBar />
  //                 <div class="moon" />
  //                 </Container>
  //             <Container id="profileComponent">
  //                 <ProfileComponent /></Container>

  //             </Container>

  //         </Container>

  //     )
  // }
}

export default ProfileScreen;
