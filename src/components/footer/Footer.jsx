import React from 'react'
import './footer.css'

// react-icons
import { FaArrowUp, FaFacebookSquare, FaFrog, FaInstagramSquare, FaTwitterSquare } from 'react-icons/fa';

export const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };
    return (
        <div className="mt-auto footer-style">
            <div className="d-flex justify-content-center align-items-center p-3 bg-secondary">
                <FaFacebookSquare className="social-icon"/>
                <FaInstagramSquare className="social-icon"/>
                <FaTwitterSquare className="social-icon"/>
            </div>
            <div className="d-flex align-items-center justify-content-around py-2">
                <div>
                    <span >© 2021 Derechos Rodrigo Mendoza <FaFrog className="mb-1 mx-1" /></span>
                </div>
                <div>
                    <button onClick={scrollToTop} className="to-top-btn"><FaArrowUp className="mb-1"/></button>
                </div>
            </div>
        </div>
    )
}
