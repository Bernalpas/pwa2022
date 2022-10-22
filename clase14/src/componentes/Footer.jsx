import React from "react";
import Direccion from "./Direccion";

const Footer = () => {
    return (
        <>

        <Direccion />

        <div className="container">
            <footer className="d-flex fixed-bottom container flex-wrap justify-content-between align-items-center py-3 my-4 border-top bg-light">
            <p className="col-md-4 mb-0 text-muted">&copy; 2022 RodDev, Inc</p>

            <a
                href="/"
                className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
            >
                <svg className="bi me-2" width="40" height="32">
                <use href="bootstrap" />
                </svg>
            </a>

            <ul className="nav col-md-4 justify-content-end">
                <li className="nav-item">
                <a href="main" className="nav-link px-2 text-muted">
                    Home
                </a>
                </li>
                <li className="nav-item">
                <a href="contact" className="nav-link px-2 text-muted">
                    Contacto
                </a>
                </li>
            </ul>
            </footer>
        </div>
        </>
    );
};


export default Footer;
