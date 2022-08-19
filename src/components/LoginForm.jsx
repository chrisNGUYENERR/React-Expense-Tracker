import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../actions/loginAction';

function LoginForm(props) {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [loginInfo, setLoginInfo] = useState({
        formEmail: '',
        formPassword: ''
    })


    const loginUserInfo = (event) => {
        event.preventDefault();
        dispatch(loginUser(loginInfo));
        navigate('/guapnarc');
    }


    return (
        <div className='Form'>
            <h1>Please Login:</h1>
            <Form className='LoginForm'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email Address:</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={(event) => setLoginInfo({...loginInfo, formEmail: event.target.value})} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password:</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={(event) => setLoginInfo({...loginInfo, formPassword: event.target.value})} />
                </Form.Group>
                <Button onClick={loginUserInfo} variant="primary" type="submit">
                    Login
                </Button>
            </Form>
            <Link to='/register'>Need an account?</Link>
        </div>
    );
}

export default LoginForm;