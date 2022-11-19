import React, {useState} from 'react';
import PropTypes from 'prop-types';

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
        <form>
            <h1>Welcome to the User Registration</h1>
            <label>Username:</label>
                <input type="text" value={username} onChange={ e => setUsername(e.target.value)} required />
            
            <label>Password:</label>
                <input type="password" value={password} onChange={ e => setPassword(e.target.value)} required minLength="8" />
            
            <label>Email:</label>
                <input type="email" value={email} onChange={ e => setEmail(e.target.value)} required />
            
            <label>Birthday:</label>
                <input type="birthday" value={birthday} onChange={ e => setBirthday(e.target.value)} required />
            
            <button variant="primary" type="submit" onClick={handleSubmit}>Register</button>
            <button type="button" onClick={() => {props.onBackClick(null);}}>Return to Login Page</button>
       </form>
    );
}

RegistrationView.propTypes = {
    onRegistration: PropTypes.func.isRequired
};