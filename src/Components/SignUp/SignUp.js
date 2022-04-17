import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { sendEmailVerification } from 'firebase/auth';
import Loading from '../../RequireAuth/Loading/Loading';
import { toast } from 'react-toastify';
const SignUp = () => {
    const navigate = useNavigate();
    // form validation
    const [validated, setValidated] = useState(false);



    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
        confirmPassword: ""
    });
    const [errors, setErrors] = useState({
        email: "",
        password: "",
        others: ""
    });

    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const [confirmPassword, setConfirmPassword] = useState('');


    // get email
    const handleEmailChange = e => {
        setUserInfo({ ...userInfo, email: e.target.value })
    };
    // get password
    const handlePasswordChange = e => {
        setUserInfo({ ...userInfo, password: e.target.value })
    };
    // get confirm password
    const handleConfirmPasswordChange = e => {
        setUserInfo({ ...userInfo, confirmPassword: e.target.value })
    };
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        signUpError,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    if (loading) {
        <Loading></Loading>
    };

    // useEffect(() => {
    //     if (signUpError) {
    //         // toast(signInError?.message)
    //         switch (signUpError?.code) {
    //             case "auth/user-not-found":
    //                 toast("User not found");
    //                 break;
    //             case "auth/wrong-password":
    //                 toast("Wrong password");
    //                 break;
    //             default:
    //                 toast("Something went wrong. Please try again later.")
    //         }
    //     }
    // }, [signUpError])
    if (user) {
        navigate('/');
    };
    const handleSignup = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);

        createUserWithEmailAndPassword(userInfo.email, userInfo.password)


    };
    return (
        <div className='mx-auto form-container d-flex justify-content-center align-items-center'>

            <div className="w-50">
                <Form noValidate validated={validated} onSubmit={handleSignup} className='input-container'>
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
                    <Form.Group className="mb-3" controlId="ConfirmformBasicPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control onChange={handleConfirmPasswordChange} required type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="link text-white fs-5">Forgot password?</Button>

                    <button className="d-block mx-auto login-btn" type="submit">
                        Signup
                    </button>
                    <div className="d-flex align-items-center"><p className="text-white mb-0">Don't have an account?</p>
                        <Button onClick={() => navigate('/login')} variant="link text-white">Login</Button></div>
                    <div className="or-line-container d-flex justify-content-center align-items-center mx-4">
                        <div className="or-line"></div>
                        <h5 className="mx-2">Or</h5>
                        <div className="or-line"></div>
                    </div>
                    <div className="d-flex justify-content-center">
                        <button className="google-btn me2" >
                            Google
                        </button>
                        <button className="github-btn ms-2" >
                            Github
                        </button>
                    </div>

                </Form>
            </div>

        </div>
    );
};

export default SignUp;