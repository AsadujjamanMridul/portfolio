import React from 'react';
import './AboutMe.scss'
import profile from '../../../images/profile.jpg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn, faCodepen, faInstagram } from '@fortawesome/free-brands-svg-icons'

const AboutMe = () => {
    return (
        <div id='about' className='container d-flex min-h-92'>
            <div className='pt-12'>
                <h2 className="color-5 section-title px-3 my-3">About Me</h2>

                <div className="row">
                    <div className="col-md-6 d-flex juastify-content-center align-items-center">
                        <img src={profile} alt="" className='mx-auto p-md-5 p-3 rounded' style={{ maxWidth: '100%', maxHeight: '500px' }} />
                    </div>
                    <div className="col-md-6 d-flex align-items-center">
                        <h3 className='color-5 px-md-5 py-md-5 p-3 profile-details'> I am Asadujjaman Mridul. <br /><br />
                        Studying in Rajshahi University of Engineering and Technology. Completing my Bachelor's degree in Computer Science and Engineering. <br /><br />
                        Recently completed a training session on <span className='color-4'>Full Stack Web Development.</span> Did some real life MERN projects. <br /><br />
                        I've also developed some andorid apps using java. I Love to learn new technology and skills! <br /> <br /> <br />
                            <div>
                                <FontAwesomeIcon icon={faGithub} className='details-social me-3' />
                                <FontAwesomeIcon icon={faLinkedinIn} className='details-social me-3' />
                                <FontAwesomeIcon icon={faInstagram} className='details-social me-3' />
                            </div>
                            <button className="btn btn-dark btn-brand px-3 py-2 mt-5 color-5">Know More</button>
                        </h3>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AboutMe;