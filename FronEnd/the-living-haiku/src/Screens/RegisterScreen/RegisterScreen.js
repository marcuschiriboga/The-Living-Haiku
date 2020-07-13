import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import { Divider, Container,} from 'semantic-ui-react'
import Login from '../../Components/Login';
import SignInBar from '../../Components/navigation/SignInBar';


class RegisterScreen extends React.Component {
    constructor(props){
        super(props)

        this.state = {

        }
    }

    render(){
        return(
            <Container>
                <SignInBar/>
                <Divider />
                <h2>Register New User</h2>
                <Container>
                    <Login/>
                </Container>
            </Container>
        )
    }
}

export default RegisterScreen;