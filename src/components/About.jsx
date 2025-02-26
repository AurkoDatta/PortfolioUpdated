import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa';
import { fadeInUp, staggerContainer } from '../utils/animations';
import '../styles/components/About.css';

// Tech stack data
const technologies = {
    Frontend: ['JavaScript', 'HTML/CSS', 'React'],
    Backend: ['Java (Spring Framework)', 'Python (Flask)', 'MongoDB'],
    Additional: ['Git/GitHub', 'Docker', 'Data Structures and Algorithms', 'REST APIs']
};

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="container">
                <motion.div
                    className="about-content"
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div className="about-text" variants={fadeInUp}>
                        <h1 className="name">Aurko Datta</h1>
                        <h2 className="title">Full Stack Developer</h2>
                        <p className="location">Ontario, Canada</p>
                        <p className="description">
                            I am a Full Stack developer and current computer science student at McMaster University.
                            I have professional experience with Java and the Spring Framework while also building projects
                            in Python and JavaScript using React, Flask, and MongoDB. I enjoy learning new techniques and
                            working directly with others to create practical software solutions that address everyday challenges.
                        </p>

                        <div className="social-links">
                            <motion.a
                                href="https://github.com/AurkoDatta"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <FaGithub /> GitHub
                            </motion.a>
                            <motion.a
                                href="https://www.linkedin.com/in/aurko-datta-624623284/"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <FaLinkedin /> LinkedIn
                            </motion.a>
                            <motion.a
                                href="/resume.pdf"
                                className="resume-btn"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <FaDownload /> Download Resume
                            </motion.a>
                        </div>
                    </motion.div>

                    <motion.div className="profile-image-container" variants={fadeInUp}>
                        <div className="profile-image">
                            {/* Placeholder for profile image */}
                            <img src="/assets/profile.jpg" alt="Aurko Datta" />
                        </div>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="tech-stack"
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.h3 variants={fadeInUp}>Technologies & Skills</motion.h3>

                    <div className="tech-categories">
                        {Object.entries(technologies).map(([category, techs]) => (
                            <motion.div
                                key={category}
                                className="tech-category"
                                variants={fadeInUp}
                            >
                                <h4>{category}</h4>
                                <ul className="tech-list">
                                    {techs.map(tech => (
                                        <motion.li
                                            key={tech}
                                            whileHover={{ x: 5 }}
                                        >
                                            {tech}
                                        </motion.li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;