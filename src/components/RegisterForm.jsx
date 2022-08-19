import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { registerUser } from '../actions/registerAction';
import { useNavigate, Link } from 'react-router-dom';

function RegisterForm(props) {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [userInfo, setUserInfo] = useState({
        formName: '',
        formEmail: '',
        formPassword: ''
    })


    
    const registerUserInfo = (event) => {
        event.preventDefault();
        dispatch(registerUser(userInfo))
        alert('Account Created!')
        navigate('/guapnarc')

    }



    return (
        <div className='Form'>
            <h1>Sign-Up:</h1>
            <Form className='RegisterForm'>
                <Form.Group className="mb-3" controlId="formBasicNamel">
                        <Form.Label>Full Name:</Form.Label>
                        <Form.Control type="text" placeholder="Enter Full Name" onChange={(event) => setUserInfo({...userInfo, formName: event.target.value})} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email Address:</Form.Label>
                    <Form.Control type="email" placeholder="Email" onChange={(event) => setUserInfo({...userInfo, formEmail: event.target.value})} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password:</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={(event) => setUserInfo({...userInfo, formPassword: event.target.value})} />
                </Form.Group>
                <Button onClick={registerUserInfo} variant="primary" type="submit">
                    Create Account
                </Button>
            </Form>
            <Link to='/'>Already have an account?</Link>
        </div>
    );
}

export default RegisterForm;