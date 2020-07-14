import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import { Card, Icon, Button } from 'semantic-ui-react'

class RandomHaikuGen extends React.Component {
    constructor(props){
        super(props)

        this.state = {

        }
    }

    render(){
        return (
                <Card>
                    <Card.Content header={`Haiku's By You`} />
                    <Card.Content>
                        <Card.Group>
                            <Card fluid color='red' header='Option 1' />
                            <Card fluid color='orange' header='Option 2' />
                            <Card fluid color='yellow' header='Option 3' />
                        </Card.Group>
                    </Card.Content>
                    <Button positive>Positive Button</Button>
                    <Card.Content extra>
                        <Icon name='user' />4 Friends
                    </Card.Content>
                </Card>
            
            
        )
    }
}



export default RandomHaikuGen;