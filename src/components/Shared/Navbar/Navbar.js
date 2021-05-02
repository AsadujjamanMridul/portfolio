import React from 'react';
import './Navbar.css'

import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-1 shadow sticky-top py-3">
            <div className="container">
                <Link className="navbar-brand brand-name color-4" to="/">Mridul.</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link active color-5 px-2" aria-current="page" href="#about">About Me</a>
                        <a className="nav-link color-5 px-2" href="#featured">Featured</a>
                        <a className="nav-link color-5 px-2" href="#chat">Contact</a>
\                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;