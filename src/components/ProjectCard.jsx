import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '../utils/animations';
import '../styles/components/ProjectCard.css';

const ProjectCard = ({ project }) => {
    return (
        <motion.div
            className="project-card"
            variants={fadeInUp}
            whileHover={{
                y: -10,
                transition: { duration: 0.3 }
            }}
            onClick={() => window.open(project.github, '_blank')}
        >
            <div className="project-image-container">
                <motion.img
                    src={project.image}
                    alt={project.title}
                    whileHover={{ scale: 1.05 }}
                    className="project-image"
                />
            </div>
            <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                    {project.technologies.map((tech, index) => (
                        <span key={index} className="tech-tag">{tech}</span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;