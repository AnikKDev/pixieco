import React from 'react';
import './Checkout.css';
import { Button, Form } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


// get logged in user
const Checkout = () => {
    const [user, loading, error] = useAuthState(auth);

    // handle information submission
    const handleSubmit = e => {
        e.preventDefault();
        console.log(user);
        if (user) {
            toast('Checking Out', { toastId: "success9" })
        }
    };
    return (
        <div style={{ minHeight: "80vh" }} className='mx-auto form-container d-flex justify-content-center align-items-center'>


            <div className="w-50">
                {/* name */}
                <Form onSubmit={handleSubmit} className='input-container my-5 py-4'>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Name</Form.Label>
                        <Form.Control required type="text" placeholder="Name" />
                        <Form.Control.Feedback type="invalid">
                            Field can't be empty
                        </Form.Control.Feedback>

                    </Form.Group>
                    {/* email */}
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control className="text-muted" required type="email" disabled placeholder={user.email} />
                    </Form.Group>
                    {/* address */}
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Address</Form.Label>
                        <Form.Control required type="text" placeholder="Address" />
                        <Form.Control.Feedback type="invalid">
                            Field can't be empty
                        </Form.Control.Feedback>
                    </Form.Group>
                    {/* telephone number */}
                    <Form.Group className="mb-3" controlId="ConfirmformBasicPassword">
                        <Form.Label>Contact Number</Form.Label>
                        <Form.Control required type="number" placeholder="Contact Number" />
                        <Form.Control.Feedback type="invalid">
                            Field can't be empty
                        </Form.Control.Feedback>

                    </Form.Group>


                    <button className="d-block mx-auto login-btn w-75" type="submit">
                        Submit
                    </button>
                </Form>
            </div>


            <ToastContainer></ToastContainer>
        </div >
    );
};

export default Checkout;