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
    const [isValidName, setIsValidName] = useState(false)
    const [isValidEmail, setIsValidEmail] = useState(false)
    const [isValidPassword, setIsValidPassword] = useState(false)

    const handleUserName = (event) => {
        setIsValidName(event.target.value.length >= 2);
        setUserInfo({...userInfo, formName: event.target.value})
    }

    const handleUserEmail = (event) => {
        const isValidEmail = /(.+)@(.+){2,}\.(.+){2,}/.test(event.target.value);
        setIsValidEmail(isValidEmail)
        setUserInfo({...userInfo, formEmail: event.target.value})
    }

    const handleUserPassword = (event) => {
        setIsValidPassword(event.target.value.length >= 5);
        setUserInfo({...userInfo, formPassword: event.target.value})
    }

    const isButtonDisabled = isValidName && isValidEmail && isValidPassword



    const registerUserInfo = (event) => {
        event.preventDefault();
        dispatch(registerUser(userInfo));
        alert('Account Created!');
        navigate('/guapnarc');
    }

    return (
        <div className='RegisterFormBg'>
            <div className='Form'>
                <h1>Sign-Up:</h1>
                <Form className='RegisterForm'>
                    <Form.Group className="mb-3" controlId="formBasicNamel">
                            <Form.Label>Full Name:</Form.Label>
                            <Form.Control type="text" placeholder="Enter Full Name" onChange={handleUserName} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email Address:</Form.Label>
                        <Form.Control type="email" placeholder="Email" onChange={handleUserEmail} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password:</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={handleUserPassword} />
                    </Form.Group>
                    <Button onClick={registerUserInfo} disabled={!isButtonDisabled} variant="primary" type="submit">
                        Create Account
                    </Button>
                </Form>
                <Link to='/'>Already have an account?</Link>
            </div>
        </div>
    );
}

export default RegisterForm;