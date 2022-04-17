import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { sendEmailVerification } from 'firebase/auth';
import Loading from '../../RequireAuth/Loading/Loading';
import { toast, ToastContainer } from 'react-toastify';
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
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailRegex.test(e.target.value)) {
            setUserInfo({ ...userInfo, email: e.target.value });
            setErrors('');
        } else {
            setErrors({ ...errors, email: 'Please Provide a valid email' })
        }
    };
    // get password
    const handlePasswordChange = e => {
        setUserInfo({ ...userInfo, password: e.target.value })
    };
    // get confirm password
    const handleConfirmPasswordChange = e => {
        if (e.target.value === userInfo.password) {
            setUserInfo({ ...userInfo, confirmPassword: e.target.value });
            setErrors({ ...errors, password: "" });
        } else {
            setErrors({ ...errors, password: "Password didn't match" })
        }
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
    if (signUpError) {
        toast(signUpError.message, { toastId: 'error1' })
    };
    useEffect(() => {
        if (user) {
            navigate('/');
        };
    }, [user]);
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
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

    const handleGoogleSignIn = () => {
        signInWithGoogle();

    };
    useEffect(() => {
        if (googleUser) {
            navigate('/');
        };
    }, [googleUser]);


    const [signInWithGithub, githubUser, githubLoading, githubError] = useSignInWithGithub(auth);

    const handleGithubSignIn = () => {
        signInWithGithub();
    };
    useEffect(() => {
        if (githubUser) {
            navigate('/');
        }
    }, [githubUser]);
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
                        <Form.Control onChange={handleConfirmPasswordChange} required type="password" placeholder="Confirm password" />
                        {errors?.password && <p className="text-danger">{errors.password}</p>}
                    </Form.Group>


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


                </Form>
                <div className="d-flex justify-content-center">
                    <button onClick={handleGoogleSignIn} className="google-btn me2" >
                        Google
                    </button>
                    <button onClick={handleGithubSignIn} className="github-btn ms-2" >
                        Github
                    </button>
                </div>
            </div>

            <ToastContainer></ToastContainer>
        </div>

    );
};

export default SignUp;