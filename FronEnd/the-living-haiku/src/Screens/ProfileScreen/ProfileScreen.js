import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import { Divider, Container,} from 'semantic-ui-react'

import LeftSideBar from '../../Components/LeftSideBar'
import NavBar from '../../Components/navigation/NavBar/NavBar';

class ProfileScreen extends React.Component {
    constructor(props){
        super(props)

        this.state = {

        }
    }

    render(){
        return (
            <Container>
                <NavBar/>
                <Divider />
                <Container>
                <LeftSideBar />
                    
                </Container>
            </Container>
            
        )
    }
}



export default ProfileScreen;