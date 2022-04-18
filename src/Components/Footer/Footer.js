import React from 'react';
import './Footer.css';
import { HiLocationMarker } from 'react-icons/hi';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
const Footer = () => {
    // get date
    const date = new Date().toDateString();
    return (
        <div className='footer-container '>
            <div className="container">
                <div className="d-flex justify-content-between text-white  ">
                    <div className=''>
                        <h3>Pixieco</h3>
                        <p className=" w-50 footer-para"><small>Photography is a way to express the passion about someting or a medium to hold on something that might have been a very special to someone or anyone. And here, I...'Pixieco' providing you the chance to do that</small></p>
                    </div>
                    {/* contact infos */}
                    <div className="contact-info">
                        <h5>Contact</h5>
                        <p><BsFillTelephoneFill></BsFillTelephoneFill> +12345678910</p>
                        <p><AiOutlineMail></AiOutlineMail> abc@pixieco.com</p>
                        <p> <HiLocationMarker></HiLocationMarker> Chittagong, Bangladesh</p>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-center">
                <footer className="text-white "><small>&copy; All rights reserved by pixieco | {date}</small></footer>
            </div>
        </div>
    );
};

export default Footer;