import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import { Divider, Container} from 'semantic-ui-react'
import RandomHaikuGen from '../../Components/RandomHaikuGen'
import LeftSideBar from '../../Components/LeftSideBar'
import SignInBar from '../../Components/navigation/SignInBar'

class HomeScreen extends React.Component {
    constructor(props){
        super(props)

        this.state = {

        }
    }

    render(){
        return (
            <Container>
                <SignInBar />
                <Divider />
                <Container>
                    <LeftSideBar />
                    <RandomHaikuGen />
                </Container>
            </Container>
            
        )
    }
}

export default HomeScreen;