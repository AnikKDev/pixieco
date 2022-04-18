import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword, useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import './Login.css';
import auth from '../../firebase.init';
import Loading from '../../RequireAuth/Loading/Loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    // form validation
    const [userInfo, setUserInfo] = useState({
        email: "",
        password: ""
    });

    const [errors, setErrors] = useState({
        email: "",
        password: "",
        others: ""
    });



    const [validated, setValidated] = useState(false);
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const [error, setError] = useState('');
    // const [confirmPassword, setConfirmPassword] = useState('');

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        signInError,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(auth);

    // get email
    const handleEmailChange = e => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailRegex.test(e.target.value)) {
            setUserInfo({ ...userInfo, email: e.target.value });
            setErrors('');
        } else {
            setErrors({ ...errors, email: 'Please Provide a valid email' });
            setUserInfo({ ...userInfo, email: '' });
        }

    };
    // get password
    const handlePasswordChange = e => {
        setUserInfo({ ...userInfo, password: e.target.value })
    };

    const from = location.state?.from?.pathname || "/";

    if (user) {
        navigate(from, { replace: true });
    }
    if (loading) {
        <Loading></Loading>
    };

    useEffect(() => {
        if (signInError) {
            // toast(signInError?.message)
            switch (signInError?.code) {
                case "auth/user-not-found":
                    toast("User not found", { toastId: 'error2' });
                    break;
                case "auth/wrong-password":
                    toast("Wrong password", { toastId: 'error3' });
                    break;
                default:
                    toast("Something went wrong. Please try again later.", { toastId: 'error4' })
            }
        }
    }, [signInError])


    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);

        signInWithEmailAndPassword(userInfo.email, userInfo.password)
    };

    const handleResetPassword = async () => {
        if (userInfo.email) {
            await sendPasswordResetEmail(userInfo?.email);
            toast('Reset email has been sent', { toastId: 'success1' })
        } else {
            setErrors({ ...errors, email: 'Please Provide a valid email' });
        }
    };
    useEffect(() => {
        if (resetError) {
            switch (resetError?.code) {
                case "auth/missing-email":
                    setErrors({ ...errors, email: "Missing email" });
                    break;

                default:
                    break;
            }
        }
    }, [resetError]);

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
                        {errors?.email && <p className="text-danger">{errors.email}</p>}

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onChange={handlePasswordChange} required type="password" placeholder="Password" />
                    </Form.Group>
                    <Button onClick={handleResetPassword} variant="link text-white fs-5">Forgot password?</Button>

                    <button className="d-block mx-auto login-btn" type="submit">
                        Login
                    </button>
                    <div className="d-flex align-items-center"><p className="text-white mb-0">Don't have an account?</p>
                        <Button onClick={() => navigate('/signup')} variant="link text-white">Signup</Button></div>
                    <ToastContainer></ToastContainer>

                </Form>
            </div>

        </div>
    );
};

export default Login;