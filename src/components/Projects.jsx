import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { useScrollAnimation, staggerContainer } from '../utils/animations';
import '../styles/components/Projects.css';

const Projects = () => {
    const [ref, controls] = useScrollAnimation(0.1);

    // Project data
    const projects = [
        {
            id: 1,
            title: 'E-Commerce Platform',
            description: 'A full-stack e-commerce platform with user authentication, product listings, and payment processing integration.',
            image: '/assets/projects/project1.jpg',
            technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
            github: 'https://github.com/yourusername/ecommerce-platform',
        },
        {
            id: 2,
            title: 'Task Management App',
            description: 'A task management application with drag-and-drop functionality, user roles, and real-time updates.',
            image: '/assets/projects/project2.jpg',
            technologies: ['React', 'Firebase', 'Material UI'],
            github: 'https://github.com/yourusername/task-manager',
        },
        {
            id: 3,
            title: 'Weather Forecast App',
            description: 'A weather forecast application that provides real-time weather data for any location using a third-party weather API.',
            image: '/assets/projects/project3.jpg',
            technologies: ['JavaScript', 'Weather API', 'HTML', 'CSS'],
            github: 'https://github.com/yourusername/weather-app',
        },
        {
            id: 4,
            title: 'Personal Finance Tracker',
            description: 'A personal finance tracking application that helps users manage their budget and expenses with data visualization.',
            image: '/assets/projects/project4.jpg',
            technologies: ['Python', 'Flask', 'SQLite', 'Chart.js'],
            github: 'https://github.com/yourusername/finance-tracker',
        },
    ];

    return (
        <section id="projects" className="projects-section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="section-header"
                >
                    <h2 className="section-title">Projects</h2>
                    <p className="section-description">
                        Here are some of the projects I've worked on. Click on a project to view its GitHub repository.
                    </p>
                </motion.div>

                <motion.div
                    className="projects-grid"
                    ref={ref}
                    variants={staggerContainer}
                    initial="hidden"
                    animate={controls}
                >
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;