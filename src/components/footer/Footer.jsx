import React from 'react'
import './footer.css'

// react-icons
import { FaArrowUp, FaFacebookSquare, FaFrog, FaGithub, FaInstagramSquare, FaLinkedinIn, FaTwitterSquare } from 'react-icons/fa';
import { NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };
    return (
        <div className="mt-auto footer-style">
            <div className="d-flex justify-content-center align-items-center p-3 footer-top">
                <NavLink href='https://github.com/RodrigoM10' target='_blank' className="p-0 mx-1">
                    <FaGithub className="social-icon-top" />
                </NavLink>
                <NavLink href='https://www.linkedin.com/in/rodrigo-mendoza-b8b6931a4/' target='_blank' className="p-0 mx-1">
                    <FaLinkedinIn className="social-icon-top" />
                </NavLink>
            </div>
            <div className="d-flex align-items-center justify-content-around py-2 footer-top-buttom">
                <div>
                    <span >© 2021 Derechos Rodrigo Mendoza <FaFrog className="mb-1 mx-1" /></span>
                </div>
                <div className="d-flex">
                    <div className="d-flex justify-content-center align-items-center">
                        <NavLink href='https://www.facebook.com/RMendoza95' target='_blank' className="p-0 mx-1">
                            <FaFacebookSquare className="social-icon" />
                        </NavLink>
                        <NavLink href='https://twitter.com/Rodri_Mendoza' target='_blank' className="p-0 mx-1">
                            <FaInstagramSquare className="social-icon" />
                        </NavLink>
                        <NavLink href='https://www.instagram.com/rodrigomendoza10/' target='_blank' className="p-0 mx-1">
                            <FaTwitterSquare className="social-icon" />
                        </NavLink>
                    </div>
                    <button onClick={scrollToTop} className="to-top-btn mx-3"><FaArrowUp className="mb-1" /></button>
                </div>
            </div>
        </div>
    )
}
