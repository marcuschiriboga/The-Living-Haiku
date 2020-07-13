import React from "react"
import 'semantic-ui-css/semantic.min.css'
import { Button, Checkbox, Form, Container } from 'semantic-ui-react'
import './login.css';
class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <Container>
               <div id="f">
                 <Form action="/" method="GET" encType="multipart/form-data">
                    <Form.Field>
                        <label>Name</label>
                        <input placeholder='Name' name="name" type="text" />
                    </Form.Field>
                    <Form.Field>
                        <label>Email</label>
                        <input placeholder='Email' name="email" type="text" />
                    </Form.Field>
                    <Form.Field>
                        <label>Password</label>
                        <input placeholder='Password' name="password" type="text" />
                    </Form.Field>
                    <Form.Field>
                        <Checkbox label='I agree to the Terms and Conditions' />
                    </Form.Field>
                    <Button type='submit' circular inverted color='grey'>Submit</Button>
                </Form>   
               </div>
                
                <div id="bg">
                    <div class="scene">
                    <div class="background">
                        <div class="sun" />
                        <div class="moon" />
                        </div>
                    </div>
                </div>
                
            </Container>
        )
    }
}


export default Login;