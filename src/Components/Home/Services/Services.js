import React, { useEffect, useState } from 'react';
import Service from './Service/Service';
import './Services.css';
const Services = () => {
    // get service datas
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    return (
        <div className="services-container">
            <h1 className="text-white text-center mb-5">My Services</h1>
            <div className=" row gx-0 mt-5">
                {
                    services.map(service => <Service key={service.id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;