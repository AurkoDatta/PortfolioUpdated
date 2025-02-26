import React from 'react';
import { motion } from 'framer-motion';
import '../styles/components/TechStack.css';

const TechStack = () => {
    const technologies = [
        { name: 'React', logo: '/assets/logos/react.png' },
        { name: 'Vite', logo: '/assets/logos/vite.svg' },
        { name: 'JavaScript', logo: '/assets/logos/javascript.png' },
        { name: 'HTML5', logo: '/assets/logos/html5.png' },
        { name: 'CSS3', logo: '/assets/logos/css3.png' },
        { name: 'Java', logo: '/assets/logos/java.png' },
        { name: 'Spring', logo: '/assets/logos/spring.png' },
        { name: 'Git', logo: '/assets/logos/git.png' },
        // Add more technologies as needed
    ];

    return (
        <div className="tech-stack-container">
            <motion.h3
                className="tech-stack-title"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                Technologies I Work With
            </motion.h3>

            <motion.div
                className="tech-grid"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                {technologies.map((tech, index) => (
                    <motion.div
                        key={tech.name}
                        className="tech-item"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 * index }}
                        whileHover={{ scale: 1.1 }}
                    >
                        <img src={tech.logo} alt={`${tech.name} logo`} />
                        <p>{tech.name}</p>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default TechStack;