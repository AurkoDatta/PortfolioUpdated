import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../styles/components/Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [activeSection, setActiveSection] = useState('about');

    // Toggle mobile menu
    const toggleMenu = () => setIsOpen(!isOpen);

    // Close menu when a link is clicked
    const closeMenu = () => {
        if (isOpen) setIsOpen(false);
    };

    // Track scroll position and active section
    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);

            // Find the active section based on scroll position
            const sections = ['about', 'projects', 'experience'];
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${scrollPosition > 50 ? 'scrolled' : ''}`}>
            <div className="container navbar-container">
                <motion.div
                    className="logo"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Link to="about" smooth={true} duration={500}>AD</Link>
                </motion.div>

                {/* Desktop Menu */}
                <motion.ul
                    className="nav-links"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    {['about', 'projects', 'experience'].map((section) => (
                        <motion.li key={section} whileHover={{ scale: 1.05 }}>
                            <Link
                                to={section}
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                className={activeSection === section ? 'active' : ''}
                            >
                                {section.charAt(0).toUpperCase() + section.slice(1)}
                            </Link>
                        </motion.li>
                    ))}
                </motion.ul>

                {/* Mobile Menu Toggle */}
                <div className="menu-toggle" onClick={toggleMenu}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </div>

                {/* Mobile Menu */}
                <motion.div
                    className={`mobile-menu ${isOpen ? 'active' : ''}`}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{
                        opacity: isOpen ? 1 : 0,
                        height: isOpen ? '100vh' : 0
                    }}
                    transition={{ duration: 0.3 }}
                >
                    <ul>
                        {['about', 'projects', 'experience'].map((section) => (
                            <li key={section}>
                                <Link
                                    to={section}
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    onClick={closeMenu}
                                    className={activeSection === section ? 'active' : ''}
                                >
                                    {section.charAt(0).toUpperCase() + section.slice(1)}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </motion.div>
            </div>
        </nav>
    );
};

export default Navbar;