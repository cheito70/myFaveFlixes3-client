import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Col, Row } from 'react-bootstrap';

//import './registration-view.scss';
import axios from 'axios';

export function RegistrationView(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [birthday, setBirthday] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://myfaveflixes.herokuapp.com/movies/users', {
            Username: username,
            Password: password,
            Email: email
        })
            .then(response => {
                const data = response.data;
                console.log(data);
                window.open('/', '_self');
                //The second argument '_self' is necessary so
                //that the page will open in current tab
            })
            .catch(e => {
                console.log('error registering the user');
                alert('Something was not entered correctly!');
            });
    };

    return (
        <Form>
            <Form.Group>
            <h2>Welcome to the User Registration</h2>
            <Form.Label>Username:</Form.Label>
                <Form.Control 
                type="text" 
                value={username} 
                onChange={ e => setUsername(e.target.value)} 
                required 
                placeholder="Enter a Username"
                />
            </Form.Group>
            
            <Form.Group>
                <Form.Label>Password:</Form.Label>
                <Form.Control
                 type="password" 
                 value={password} 
                 onChange={ e => setPassword(e.target.value)} 
                 required 
                 minLength="8" 
                 />
            </Form.Group>
            
            <Form.Group>
            <Form.Label>Email:</Form.Label>
                <Form.Control 
                type="email" 
                value={email} 
                onChange={ e => setEmail(e.target.value)} 
                required 
                />
            
            <Form.Label>Birthday:</Form.Label>
                <Form.Control 
                type="birthday" 
                value={birthday} 
                onChange={ e => setBirthday(e.target.value)} 
                required />
            </Form.Group>
            
            <Button variant="primary" type="submit" onClick={handleSubmit}>Register</Button>
            <Button type="button" onClick={() => {props.onBackClick(null);}}>Return to Login Page</Button>
       </Form>
    );
}

RegistrationView.propTypes = {
    onRegistration: PropTypes.func.isRequired
};