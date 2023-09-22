import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Footer.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="footer-inner-container d-flex flex-column align-items-center">
                        <ul className="footer-inner-container-social justify-content-center list-unstyled d-flex flex-row mt-3">
                            <li>
                                <a href="https://www.facebook.com/DeliciousShawarma" className="footer-nav-item">
                                    <i className="bi bi-facebook"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/DeliciousShawarma" className="footer-nav-item">
                                    <i className="bi bi-instagram"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com/DeliciousShawarma" className="footer-nav-item">
                                    <i className="bi bi-twitter"></i>
                                </a>
                            </li>
                        </ul>
                        <p className='footer-inner-container-copyright justify-content-center text-center'>
                            Copyright &copy; {new Date().getFullYear()}
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;