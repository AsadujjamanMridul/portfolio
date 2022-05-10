import React from 'react';
import './FeaturedProjects.scss'

import { Carousel } from '3d-react-carousal';
import slides from './data'
import SmallScreen from './SmallScreen';
import { Link } from 'react-router-dom';

const FeaturedProjects = () => {
    return (
        <div id='featured' className='container min-h-92'>
            <div className='pt-12'>
                <div className='pb-5'>
                    <h2 className="color-5 section-title px-3 my-3">Featured Projects</h2>
                </div>

                <div className="container-fluid d-block d-md-none">
                    <SmallScreen />
                </div>

                <div className="container-fluid d-none d-md-block">
                    <Carousel slides={slides} autoplay={true} interval={10000} />
                </div>

                <div className='d-flex justify-content-center my-5 pt-5'>
                    <Link className='color-5 text-decoration-none' href="https://github.com/asadujjamanmridul" target="_blank" rel='noreferrer'>
                        <button className="btn btn-brand color-5 px-3 py-2">
                            See More
                        </button>
                    </Link>
                </div>
            </div>
        </div>

    );
};

export default FeaturedProjects;