import React from 'react';
import { motion } from 'framer-motion';
import TimelineItem from './TimelineItem';
import '../styles/components/Experience.css';

// Add this new style block at the top of your file
const styles = {
    headerContainer: {
        textAlign: 'center',
        marginBottom: '3rem',
        width: '100%'
    },
    sectionTitle: {
        fontSize: '2.5rem',
        marginBottom: '0.5rem',
        fontWeight: 'bold'
    },
    underline: {
        width: '60px',
        height: '4px',
        backgroundColor: '#4ECCA3', // Your accent color (teal)
        margin: '0.5rem auto 1rem'
    },
    subtitle: {
        color: '#a0a0a0',
        fontSize: '1rem',
        marginTop: '0.5rem'
    }
};

const experienceData = [
    {
        period: "May 2024 - August 2024",
        position: "Application Developer",
        company: "Wealth Management, CIBC",
        responsibilities: [
            "Java Development and Spring Framework: Gained hands-on experience in Java development, focusing on the Spring Framework.",
            "Project Management and Solution Development: Developed a comprehensive Java-based solution to streamline error code management across multiple applications, enhancing operational efficiency.",
            "Web Application Development: Created a Spring Boot-based web application with advanced search and file management capabilities.",
            "Cross-Functional Communication: Facilitated communication between the WISE team and the Standard Policy team, ensuring smooth integration of new policy changes."
        ]
    },
    {
        period: "January 2022 - September 2022",
        position: "Business Operations",
        company: "Version Originale",
        responsibilities: [
            "Supported business operations for a start-up clothing brand during its initial founding.",
            "Assisted in creating early clothing designs and made critical decisions for the company.",
            "Built and implemented the company's marketing and operational strategy."
        ]
    }
];

const Experience = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    };

    return (
        <section id="experience" className="section experience-section">
            {/* New header container with centered styling */}
            <motion.div
                style={styles.headerContainer}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6 }}
            >
                <h2 style={styles.sectionTitle}>Experience</h2>
                <div style={styles.underline}></div>
                <div style={styles.subtitle}>My professional journey</div>
            </motion.div>

            <motion.div
                className="timeline"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
            >
                {experienceData.map((experience, index) => (
                    <TimelineItem
                        key={index}
                        experience={experience}
                        isLast={index === experienceData.length - 1}
                    />
                ))}
            </motion.div>
        </section>
    );
};

export default Experience;