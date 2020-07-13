import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import { Divider, Container } from 'semantic-ui-react'
import RandomHaikuGen from "../../Components/RandomHaikuGen.js"

class HomeScreen extends React.Component {
    constructor(props){
        super(props)

        this.state = {

        }
    }

    render(){
        return (
            <Container>
                <Divider />
                <RandomHaikuGen />
            </Container>
            
        )
    }
}



export default HomeScreen;