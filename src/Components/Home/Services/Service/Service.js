import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const navigate = useNavigate();
    const { img, name, price, description } = service;
    return (
        // service card
        <div className='col-md-6 mb-5 d-flex justify-content-center '>
            <Card className="service-card" style={{ width: '22rem', position: "relative", height: "28rem" }}>
                <Card.Img className=" service-img" variant="top" src={img} />
                <Card.Body >
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <h3 className='text-muted'>${price}</h3>
                    <button style={{ position: "absolute", bottom: "0px" }} onClick={() => navigate('/checkout')} className="checkout-btn d-block  mx-auto my-4">Checkout</button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Service;