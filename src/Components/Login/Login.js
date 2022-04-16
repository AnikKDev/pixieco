import React from 'react';
import { Button, Form } from 'react-bootstrap';
import './Login.css';
const Login = () => {
    return (
        <div className='mx-auto form-container d-flex justify-content-center align-items-center'>

            <div className="w-50">
                <Form className='input-container'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <button className="d-block mx-auto login-btn" type="submit">
                        Login
                    </button>
                </Form>
            </div>

        </div>
    );
};

export default Login;