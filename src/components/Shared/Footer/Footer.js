import React from 'react';
import './Footer.scss'

const Footer = () => {
    return (
        <footer className='text-center py-3' style={{backgroundColor: '#051429'}}>
            <small className='color-5 footer'>Designed and built by <a className='color-4 text-decoration-none' href="https://asad-mridul.netlify.app">Asadujjaman Mridul</a></small>
        </footer>
    );
};

export default Footer;