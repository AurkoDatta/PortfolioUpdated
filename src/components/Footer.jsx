import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';
import '../styles/components/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-info">
                        <h3>Aurko Datta</h3>
                        <p>Full Stack Developer</p>
                        <p className="footer-contact">
                            <a href="mailto:aurkodatta08@outlook.com" target="_blank" rel="noopener noreferrer">
                                <FaEnvelope /> aurkodatta08@outlook.com
                            </a>
                        </p>
                    </div>

                    <div className="footer-social">
                        <a href="https://github.com/AurkoDatta" target="_blank" rel="noopener noreferrer">
                            <FaGithub />
                        </a>
                        <a href="https://www.linkedin.com/in/aurko-datta-624623284/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin />
                        </a>
                    </div>
                </div>

                <div className="footer-copyright">
                    <p>© {new Date().getFullYear()} Aurko Datta. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;