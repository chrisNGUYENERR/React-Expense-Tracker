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
    const [isValidEmail, setIsValidEmail] = useState(false)
    const [isValidPassword, setIsValidPassword] = useState(false)

    const handleUserEmail = (event) => {
        const isValidEmail = /(.+)@(.+){2,}\.(.+){2,}/.test(event.target.value);
        setIsValidEmail(isValidEmail)
        setLoginInfo({...loginInfo, formEmail: event.target.value})
    }

    const handleUserPassword = (event) => {
        setIsValidPassword(event.target.value.length >= 2);
        setLoginInfo({...loginInfo, formPassword: event.target.value})
    }

    const isButtonDisabled = isValidEmail && isValidPassword


    const loginUserInfo = (event) => {
        event.preventDefault();
        dispatch(loginUser(loginInfo));
        navigate('/guapnarc');
    }


    return (
        <div className='LoginFormBg'>
            <div className='Form'>
                <h1>Please Login:</h1>
                <Form className='LoginForm'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email Address:</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" onChange={handleUserEmail} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password:</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={handleUserPassword} />
                    </Form.Group>
                    <Button onClick={loginUserInfo} disabled={!isButtonDisabled} variant="primary" type="submit">
                        Login
                    </Button>
                </Form>
                <Link to='/register'>Need an account?</Link>
            </div>
        </div>
    );
}

export default LoginForm;