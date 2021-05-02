import React from 'react';
import './LetsChat.scss'
import { useForm } from "react-hook-form";

const LetsChat = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div id='chat' className='container d-flex min-h-92 mt-5 pt-5'>
            <div className='container-fluid'>
                <h2 className="color-5 section-title px-3 my-3">Lets talk!</h2>

                <div className='w-100 d-flex justify-content-center align-items-center pt-5'>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="color-5 form-label">Name</label>
                            <input type="text" className="form-control input" id="exampleFormControlInput1" placeholder="John Doe" {...register("name")}/>
                        </div>

                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="color-5 form-label">Email</label>
                            <input type="email" className="form-control input" id="exampleFormControlInput1" placeholder="name@example.com" {...register("email", { required: true })} />
                        </div>
                        {errors.email && <span>This field is required</span>}

                        <div className="mb-3">
                            <label for="exampleFormControlTextarea1" className="color-5 form-label">Measage</label>
                            <textarea className="form-control input" id="exampleFormControlTextarea1" {...register("message", { required: true })}></textarea>
                        </div>
                        {errors.message && <span>This field is required</span>}

                        <div className='d-flex justify-content-end'>
                        <input type="submit" className='btn btn-dark btn-brand text-end px-3 py-2' value='Submit'/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LetsChat;