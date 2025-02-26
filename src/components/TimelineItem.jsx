import React from 'react';
import { motion } from 'framer-motion';
import '../styles/components/TimelineItem.css';

const TimelineItem = ({ experience, isLast }) => {
    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    return (
        <motion.div
            className={`timeline-item ${isLast ? 'last-item' : ''}`}
            variants={itemVariants}
        >
            <div className="timeline-dot"></div>
            <div className="timeline-date">
                <span>{experience.period}</span>
            </div>
            <div className="timeline-content">
                <h3 className="timeline-position">{experience.position}</h3>
                <h4 className="timeline-company">{experience.company}</h4>
                <ul className="timeline-description">
                    {experience.responsibilities.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </motion.div>
    );
};

export default TimelineItem;