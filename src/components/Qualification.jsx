// src/components/EducationSection.jsx

import React, { useState, useEffect } from 'react'; // Added useState & useEffect for cursor
import { motion } from 'framer-motion';
import { BookOpen, GraduationCap, School } from 'lucide-react'; // Icons for different levels

// --- Data Definition: Your Educational Journey (ASCENDING ORDER) ---
const educationData = [
    {
        level: 'Matriculation (10th Grade)',
        degree: 'Secondary School Education',
        institute: 'SVM Inter College, Haridwar',
        year: '2021',
        details: 'Completed 10th grade with excellent performance in Mathematics and Science. Secured 63% marks.',
        icon: BookOpen,
        color: 'text-indigo-400'
    },
    {
        level: 'Intermediate (12th Grade)',
        degree: 'Senior Secondary Education (PCM)',
        institute: 'SVM Inter College, Haridwar',
        year: '2023',
        details: 'Completed 12th grade with a specialization in Physics, Chemistry, and Mathematics (PCM). Secured 70% marks.',
        icon: School,
        color: 'text-purple-400'
    },
    {
        level: 'Undergraduate (B.Tech/BCA)',
        degree: 'Bachelor of Technology in Computer Science',
        institute: 'COER University, Roorkee',
        year: '2023 - 2027',
        details: 'Focused on Data Structures, Algorithms, Web Development (MERN Stack), and Software Engineering principles. Achieved 7.5 CGPA.',
        icon: GraduationCap,
        color: 'text-teal-400'
    },
];

// Reusable Timeline Item Component
const TimelineItem = ({ data, index }) => (
    <motion.div 
        className="flex mb-8 md:mb-12 relative"
        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: index * 0.2 }}
        viewport={{ once: true, amount: 0.5 }}
    >
        <div className="flex flex-col items-center mr-4 md:mr-6">
            <div className={`w-4 h-4 rounded-full ${data.color.replace('text', 'bg')} flex-shrink-0 z-10 border-2 border-gray-900`}></div>
            {index < educationData.length - 1 && (
                <div className="h-full w-0.5 bg-gray-700/50"></div>
            )}
        </div>

        <div className="flex-1 p-5 bg-gray-800/80 backdrop-blur-sm rounded-lg shadow-xl border border-gray-700/50">
            <div className="flex items-center mb-2">
                <data.icon className={`w-5 h-5 mr-3 ${data.color}`} />
                <h4 className={`text-xl font-bold ${data.color}`}>{data.level}</h4>
            </div>
            <h5 className="text-2xl font-semibold text-white mb-1">{data.degree}</h5>
            <p className="text-base text-gray-300 font-medium italic">{data.institute}</p>
            <p className="text-sm text-teal-400 mb-3">{data.year}</p>
            <p className="text-gray-400">{data.details}</p>
        </div>
    </motion.div>
);

const EducationSection = () => {
    // --- CURSOR FOLLOWING LOGIC ---
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event) => {
            setMousePosition({ x: event.clientX, y: event.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    // Header animation
    const headerVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <section 
            id="education" 
            className="relative py-24 md:py-32 bg-gray-900 text-white overflow-hidden" 
        >
            {/* --- Cursor-Following Background Orbs --- */}
            <motion.div
                className="absolute w-80 h-80 bg-teal-500 rounded-full mix-blend-screen filter blur-2xl opacity-8"
                animate={{ x: mousePosition.x - 160, y: mousePosition.y - 160 }}
                transition={{ type: "spring", stiffness: 50, damping: 10, mass: 0.1 }}
            ></motion.div>
            <motion.div
                className="absolute w-96 h-96 bg-purple-500 rounded-full mix-blend-screen filter blur-2xl opacity-5"
                animate={{ x: mousePosition.x - 200, y: mousePosition.y - 200 }}
                transition={{ type: "spring", stiffness: 40, damping: 10, mass: 0.1 }}
            ></motion.div>

            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h2 
                    initial="hidden" whileInView="visible" variants={headerVariants}
                    viewport={{ once: true }}
                    className="text-center text-5xl md:text-6xl font-extrabold mb-4"
                >
                    My <span className="text-teal-400">Education</span>
                </motion.h2>
                <p className="text-center text-xl text-gray-400 max-w-2xl mx-auto mb-16">
                    A snapshot of my academic journey and qualifications.
                </p>

                <div className="relative">
                    {educationData.map((item, index) => (
                        <TimelineItem key={index} data={item} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EducationSection;
