import React from 'react';
import './Ongoing.scss'

import ongoingProjectImage from '../../../images/screenshots/ongoing-project.png'

const Ongoing = () => {
    return (
        <div id='ongoing' className='container min-h-92'>
            <div className='pt-12'>
                <div className='pb-5'>
                    <h2 className="color-5 section-title px-3 my-3">Ongoing Project</h2>
                </div>
            </div>


            <div className="row">
                <div className="col-lg-8 d-flex justify-content-center align-items-center">
                    <img src={ongoingProjectImage} alt="" className='mx-auto p-md-5 p-3 rounded ongoing-image' style={{ maxWidth: '100%', maxHeight: '500px' }} />
                </div>
                <div className="col-lg-4 d-flex align-items-center">
                    <h3 className='color-5 pe-md-5 py-md-5 pt-3 px-3 profile-details'> <span className='color-4 ongoing-title'> Portfolio - v3.0 </span> <br /><br />
                    Currently working on redesigning the old website and present it in a new form. The complete design is done on <span className='color-4'> Adobe XD </span>. Almost all the work of UX process including wireframing, prototyping is nearing completion. <br /><br />

                    Now basically the implementation work is going on. The whole website is being created using technologies like <span className='color-4'> React js, Tailwind css, Ant design </span>. <br /><br />

                    I hope to be able to complete the rest of the work and deploy the website soon!
                    </h3>
                </div>
            </div>
        </div>
    );
};

export default Ongoing;