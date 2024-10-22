import React from 'react';
import '../Styles/Footer.css'; 

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p className="footer-title" style={{fontSize:"2rem",fontWeight:"100"}}>To Know More</p>
                <h2 style={{fontSize:"5.5rem",fontWeight:"100"}}>Grow Your Finance with Our Trading Institute</h2>
                <p className="footer-description" style={{fontSize:"2rem",fontWeight:"100"}}>
                    We offer a range of services and resources designed to help you succeed in the financial markets.
                    Explore our offerings and see how we can help you reach your goals.
                </p>
                <div className="footer-links">
                    <a href="/about" className="footer-link">About Us</a>
                    <a href="/contact" className="footer-link">Contact Us</a>
                    <a href="/services" className="footer-link">Our Services</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
