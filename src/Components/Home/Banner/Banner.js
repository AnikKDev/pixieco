import React from 'react';
import './Banner.css';
import background from '../../../images/bg/bg.jpg'
import { useNavigate } from 'react-router-dom';
const Banner = () => {
    const navigate = useNavigate();
    return (
        <div className='banner-container d-flex justify-content-center align-items-center'>
            <div className='title-container row gx-0 container mt-5'>
                {/* banner left */}
                <div className='text-white col-md-6 d-flex align-items-center'>

                    <div>
                        <h1 className='title-heading'>Make Every Frame Count</h1>
                        <h5 className='mt-3'>What can be great than capturing and storing the memories of life events? Right? Here...Providing the better you can get. Pixieco.</h5>
                        <button onClick={() => navigate('/about')} className="about-me-btn">About Me</button>
                        <a href="#my-works" className="my-works-btn text-decoration-none ms-3">My Works</a>
                    </div>
                </div>
                {/* banner right */}
                <div className='col-md-6 mt-5 mb-sm-5'>
                    <img className='img-fluid bg-image' src={background} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;