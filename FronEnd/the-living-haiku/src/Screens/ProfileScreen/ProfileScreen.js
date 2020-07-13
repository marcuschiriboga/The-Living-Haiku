import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import { Divider, Container,} from 'semantic-ui-react'

import LeftSideBar from '../../Components/LeftSideBar'
import MenuBar from '../../Components/navigation/MenuBar';

class ProfileScreen extends React.Component {
    constructor(props){
        super(props)

        this.state = {

        }
    }

    render(){
        return (
            <Container>
                {/* <MenuBar/> */}
                <Divider />
                <Container>
                <LeftSideBar />
                    
                </Container>
            </Container>
            
        )
    }
}



export default ProfileScreen;