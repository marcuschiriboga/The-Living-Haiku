import React from "react"
import 'semantic-ui-css/semantic.min.css'
import { Button, Checkbox, Form } from 'semantic-ui-react'

class Login extends React.Component{
    

    render(){
        return (
            <Form action="/" method="POST" >
                <Form.Field>
                    <label>Name</label>
                    <input placeholder='Name' name="name" type="text"/>
                </Form.Field>
                <Form.Field>
                    <label>Email</label>
                    <input placeholder='Email' name="email" type="text"/>
                </Form.Field>
                <Form.Field>
                    <label>Password</label>
                    <input placeholder='Password' name="password" type="text"/>
                </Form.Field>
                <Form.Field>
                    <Checkbox label='I agree to the Terms and Conditions' />
                </Form.Field>
                <Button type='submit'>Submit</Button>
            </Form>
        )
    }
}

export default Login;