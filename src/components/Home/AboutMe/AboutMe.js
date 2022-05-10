import React from 'react';
import './AboutMe.scss'
import profile from '../../../images/profile-3.jpg'

import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn, faMedium } from '@fortawesome/free-brands-svg-icons'

const AboutMe = () => {
    return (
        <div id='about' className='container d-flex min-h-92'>
            <div className='pt-12'>
                <h2 className="color-5 section-title px-3 my-3">About Me</h2>

                <div className="row">
                    <div className="col-md-6 d-flex justify-content-center align-items-center">
                        <img src={profile} alt="" className='mx-auto p-md-5 p-3 rounded profile-image' style={{ maxWidth: '100%', maxHeight: '500px' }} />
                    </div>
                    <div className="col-md-6 d-flex align-items-center">
                        <h3 className='color-5 px-md-5 py-md-5 p-3 profile-details'> I am Asadujjaman Mridul. <br /><br />
                            Studying in Rajshahi University of Engineering and Technology. Completing my Bachelor's degree in Computer Science and Engineering. <br /><br />
                            Recently completed a training session on <span className='color-4'>Full Stack Web Development.</span> Did some real life MERN projects. <br /><br />
                            I've also developed some advanced andorid apps using Java and React Native. Love to learn new technology and skills! <br /> <br /> <br />
                            <div>
                                <a href='https://www.github.com/AsadujjamanMridul' target='_blank' rel='noreferrer' >
                                    <FontAwesomeIcon icon={faGithub} className='details-social me-3' />
                                </a>
                                <a href='https://www.linkedin.com/in/asadujjaman-mridul' target='_blank' rel='noreferrer' >
                                    <FontAwesomeIcon icon={faLinkedinIn} className='details-social me-3' />
                                </a>
                                <a href='https://asad-mridul.medium.com/' target="_blank" rel='noreferrer'>
                                    <FontAwesomeIcon icon={faMedium} className='details-social me-3' />
                                </a> 
                            </div>
                            <Link className='color-5 text-decoration-none' href="https://www.linkedin.com/in/asadujjaman-mridul/" target="_blank" rel='noreferrer'>
                                <button className="btn btn-brand color-5 px-3 py-2 mt-5 color-5">Know More</button></Link>
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;