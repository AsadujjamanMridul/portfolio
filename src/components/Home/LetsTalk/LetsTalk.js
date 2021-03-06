import React from 'react';
import './LetsTalk.scss'
import { useForm } from "react-hook-form";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBehanceSquare, faFacebookSquare, faInstagramSquare, faDiscord } from '@fortawesome/free-brands-svg-icons'
import { faMapMarker, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'

import emailjs from 'emailjs-com';

const LetsChat = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        let form = document.getElementById('form');
        emailjs.sendForm('service_94h0rls', 'template_4oq8e8c', form, 'user_OrCygEL9cm9s6YpEXcIDN')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        form.reset();
    };

    return (
        <div id='chat' className='container d-flex min-h-92'>
            <div className='container-fluid  pt-12'>
                <h2 className="color-5 section-title px-3 my-3">Lets talk!</h2>

                <div className="row">
                    <div className=" col-md-6">
                        <div className='w-100 d-flex justify-content-center align-items-center pt-5'>
                            <form id='form' onSubmit={handleSubmit(onSubmit)} className='w-100'>

                                <div className="mb-3 container-fluid">
                                    <label htlmFor="exampleFormControlInput1" className="color-5 form-label">Name</label>
                                    <input type="text" className="form-control input w-100 px-md-2" id="exampleFormControlInput1" placeholder="John Doe" {...register("name")} />
                                </div>

                                <div className="mb-3 container-fluid">
                                    <label htlmFor="exampleFormControlInput1" className="color-5 form-label">Email</label>
                                    <input type="email" className="form-control input w-100 px-md-2" id="exampleFormControlInput1" placeholder="name@example.com" {...register("email", { required: true })} />
                                </div>
                                {errors.email && <span>This field is required</span>}

                                <div className="mb-3 container-fluid">
                                    <label htlmFor="exampleFormControlTextarea1" className="color-5 form-label">Measage</label>
                                    <textarea className="form-control input w-100 px-md-2" id="exampleFormControlTextarea1" {...register("message", { required: true })}></textarea>
                                </div>
                                {errors.message && <span>This field is required</span>}

                                <div className='d-flex justify-content-end pe-4'>
                                    <input type="submit" className='btn btn-dark btn-brand text-end px-3 py-2' value='Submit' />
                                </div>
                            </form>
                        </div>
                    </div>


                    <div className="col-md-6 p-md-5 p-3">
                        <h2 className='color-5 text-center m-0 p-0 pt-5 text-3'> <span className='color-4'>Connect</span> with me</h2>
                        <address className='color-5 m-0 ms-2 mt-4 py-2 text-center address'>
                            <FontAwesomeIcon icon={faMapMarker} className='me-3' />
                            S.T Bhaban, Konapara, Jatrabari, Dhaka-1362
                        </address>
                        <p className='color-5 m-0 ms-2 mb-5 text-center phone'>
                            <FontAwesomeIcon icon={faPhoneAlt} className='me-3' />
                            +880 19100 70303 , +880 18693 37724
                        </p>

                        <div className="d-flex justify-content-center align-items-center">
                            <a href="https://facebook.com/asadujjaman.mridul" target="_blank" rel='noreferrer' data-bs-toggle="tooltip" data-bs-placement="bottom" title="Facebook">
                                <FontAwesomeIcon icon={faFacebookSquare} className='social my-3 me-3' />
                            </a>
                            <a href="https://instagram.com/asadujjaman.mridul" target="_blank" rel='noreferrer' data-bs-toggle="tooltip" data-bs-placement="bottom" title="Instagram">
                                <FontAwesomeIcon icon={faInstagramSquare} className='social my-3 me-3' />
                            </a>
                            <a href="https://www.behance.net/asadujjmridul" target="_blank" rel='noreferrer' data-bs-toggle="tooltip" data-bs-placement="bottom" title="Twitter">
                                <FontAwesomeIcon icon={faBehanceSquare} className='social my-3 me-3' />
                            </a>
                            <a href="https://discordapp.com/users/551396889983975436" target="_blank" rel='noreferrer' data-bs-toggle="tooltip" data-bs-placement="bottom" title="Discord">
                                <FontAwesomeIcon icon={faDiscord} className='social my-3' />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LetsChat;