import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Col, Row } from 'react-bootstrap';

import './registration-view.scss';
//import axios from 'axios';

export function RegistrationView(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [birthday, setBirthday] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username, password, email, birthday);
        props.Registration(username);
    };

    return (
        <Form>
            <Form.Group>
            <h2>Welcome to the User Registration</h2>
            <Form.Label>Username:</Form.Label>
                <Form.Control 
                type="text" 
                value={username} 
                onChange={ (e) => setUsername(e.target.value)} 
                //required
                minLength="8"
                placeholder="Enter a Username"
                />
            </Form.Group>
            
            <Form.Group>
                <Form.Label>Password:</Form.Label>
                <Form.Control
                 type="password" 
                 value={password} 
                 onChange={ (e) => setPassword(e.target.value)} 
                 //required 
                 minLength="Must be 8 or more characters" 
                 />
            </Form.Group>
            
            <Form.Group>
            <Form.Label>Email:</Form.Label>
                <Form.Control 
                type="email" 
                value={email} 
                onChange={ (e) => setEmail(e.target.value)} 
                required 
                />
            
            <Form.Label>Birthday:</Form.Label>
                <Form.Control 
                type="birthday" 
                value={birthday} 
                onChange={ (e) => setBirthday(e.target.value)} 
                placeholder="Enter your birthday"
                 />
            </Form.Group>
            
            <Button 
            className="sign-up-button mt-2 mr-2"
            variant="primary" 
            type="submit" 
            onClick={handleSubmit}>Register</Button>

            <Button 
            className="back-button mt-2"
            variant="secondary"
            type="button" 
            onClick={() => {props.onBackClick(null);}}>Return to Login Page</Button>
       </Form>
    );
}

RegistrationView.propTypes = {
    onRegistration: PropTypes.func.isRequired
};