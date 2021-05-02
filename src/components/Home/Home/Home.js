import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import AboutMe from '../AboutMe/AboutMe';
import FeaturedProjects from '../FeaturedProjects/FeaturedProjects';
import Header from '../Header/Header';
import LetsChat from '../LetsChat/LetsChat';

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Header/>
            <AboutMe/>
            <FeaturedProjects/>
            <LetsChat/>
        </div>
    );
};

export default Home;