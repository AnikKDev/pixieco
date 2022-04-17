import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './Login.css';
import auth from '../../firebase.init';
const Login = () => {
    const navigate = useNavigate();
    // form validation
    const [validated, setValidated] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    // get email
    const handleEmailChange = e => {
        setEmail(e.target.value)
    };
    // get password
    const handlePasswordChange = e => {
        setPassword(e.target.value)
    };

    if (user) {
        navigate('/');
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);

        signInWithEmailAndPassword(email, password)
    };
    return (
        <div className='mx-auto form-container d-flex justify-content-center align-items-center'>

            <div className="w-50">
                <Form noValidate validated={validated} onSubmit={handleSubmit} className='input-container'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onChange={handleEmailChange} required type="email" placeholder="Enter email" />
                        <Form.Control.Feedback type="invalid">
                            Email can't be empty
                        </Form.Control.Feedback>

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onChange={handlePasswordChange} required type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="link text-white fs-5">Forgot password?</Button>

                    <button className="d-block mx-auto login-btn" type="submit">
                        Login
                    </button>
                    <div className="d-flex align-items-center"><p className="text-white mb-0">Don't have an account?</p>
                        <Button onClick={() => navigate('/signup')} variant="link text-white">Signup</Button></div>
                    {/* <div className="or-line-container d-flex justify-content-center align-items-center mx-4">
                        <div className="or-line"></div>
                        <h5 className="mx-2">Or</h5>
                        <div className="or-line"></div>
                    </div>
                    <button className="d-block mx-auto login-btn" type="submit">
                        Login
                    </button> */}

                </Form>
            </div>

        </div>
    );
};

export default Login;