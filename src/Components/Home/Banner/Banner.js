import React from 'react';
import './Banner.css';
import background from '../../../images/bg/bg.jpg'
const Banner = () => {
    return (
        <div className='banner-container d-flex justify-content-center align-items-center'>
            <div className='title-container row gx-0 container mt-5'>
                <div className='text-white col-md-6 d-flex align-items-center'>
                    <div>
                        <h1 className='title-heading'>Make Every Frame Count</h1>
                        <h5 className='mt-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum distinctio veritatis totam? Error, et quam!</h5>
                        <button className="about-me-btn">About Me</button>
                    </div>
                </div>
                <div className='col-md-6 mt-5 mb-sm-5'>
                    <img className='img-fluid bg-image' src={background} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;