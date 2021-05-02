import React from 'react';
import './FeaturedProjects.scss'

import { Carousel } from '3d-react-carousal';
import slides from './data'

const FeaturedProjects = () => {
    return (
        <div id='featured' className='container min-h-92 mt-5 mt-md-0'>
            <div className='pb-5'>
                <h2 className="color-5 section-title px-3 my-3">Featured Projects</h2>
            </div>

            <div className="container-fluid">
                <Carousel slides={slides} autoplay={true} interval={5000} />
            </div>
        </div>

    );
};

export default FeaturedProjects;