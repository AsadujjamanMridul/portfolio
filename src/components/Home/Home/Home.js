import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import AboutMe from '../AboutMe/AboutMe';
import FeaturedProjects from '../FeaturedProjects/FeaturedProjects';
import Header from '../Header/Header';
import LetsTalk from '../LetsTalk/LetsTalk';
import Ongoing from '../Ongoing/Ongoing';

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Header/>
            <AboutMe/>
            <FeaturedProjects/>
            <Ongoing/>
            <LetsTalk/>
            <Footer/>
        </div>
    );
};

export default Home;