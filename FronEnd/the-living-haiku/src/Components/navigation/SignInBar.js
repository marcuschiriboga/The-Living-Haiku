import React from "react";
import 'semantic-ui-css/semantic.min.css'
import { Container, Image, Header } from 'semantic-ui-react'
import './SignInBar.css'

import ProfileScreen from "../../Screens/ProfileScreen/ProfileScreen";


class SignInBar extends React.Component {

    render(){
        return(
            
            <Container id="container">
                <div> 
                    <Image id="image" src='https://react.semantic-ui.com/images/wireframe/image.png' size='tiny' />
                </div>
                
                    <Header id="signIn" as='h2'>
                        <Image circular src='https://react.semantic-ui.com/images/avatar/large/patrick.png' /> SIGN-IN
                    </Header> 
                
               
                
            </Container>

            
        )
    }

}

export default SignInBar;