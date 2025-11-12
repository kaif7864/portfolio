// src/components/SkillsSection.jsx

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
// Icons for specific skills
import { Code, Server, Wrench, LayoutGrid, Zap, Database, GitBranch, Sparkles, Box, Settings } from 'lucide-react'; 

// --- Data Definition: Combine all skills into a single flat array ---
// NOTE: Use Wrench instead of Tool to avoid import error
const allSkills = [
    // Frontend Skills
    { name: 'React.js', level: 95, icon: LayoutGrid, description: 'Building fast, component-based user interfaces for scalable applications.' },
    { name: 'Next.js', level: 85, icon: Zap, description: 'Experience with server-side rendering (SSR), static generation, and routing.' },
    { name: 'Tailwind CSS', level: 95, icon: Sparkles, description: 'Highly proficient in rapid UI development and custom utility classes.' },
    
    // Backend & Database Skills
    { name: 'Node.js/Express', level: 85, icon: Server, description: 'Developing robust, scalable backend APIs and middleware for web services.' },
    { name: 'MongoDB', level: 80, icon: Database, description: 'Designing and optimizing schema-less databases for performance and scalability.' },
    { name: 'REST APIs', level: 90, icon: Code, description: 'Designing and consuming efficient, industry-standard RESTful API services.' },
    
    // Tools & Workflow
    { name: 'Git/GitHub', level: 90, icon: GitBranch, description: 'Expert in version control, branching strategies, and collaborative development.' },
    { name: 'TypeScript', level: 75, icon: Box, description: 'Utilizing strong typing for better code quality and fewer runtime errors.' },
    { name: 'Vite & Build Tools', level: 80, icon: Wrench, description: 'Optimizing build process and project scaffolding for modern development.' },
];

// --- 1. SkillCard Component ---
const SkillCard = ({ skillName, proficiencyLevel, icon: Icon, description }) => {
    
    // Determine color based on proficiency level
    const colorClass = proficiencyLevel > 85 ? 'bg-teal-500' : proficiencyLevel > 70 ? 'bg-indigo-500' : 'bg-yellow-500';

    const cardVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1 },
    };

    return (
        <motion.div
            variants={cardVariants}
            className="p-6 rounded-xl bg-gray-800/80 backdrop-blur-sm shadow-2xl transition-all duration-300 hover:shadow-teal-500/30 border border-teal-500/20 hover:border-teal-400/50"
        >
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                    <Icon className="w-8 h-8 text-teal-400 mr-3 flex-shrink-0" />
                    <h3 className="text-xl font-bold text-white">{skillName}</h3>
                </div>
                <span className="px-3 py-1 text-sm font-extrabold text-gray-900 bg-teal-300 rounded-full shadow-md">
                    {proficiencyLevel}%
                </span>
            </div>

            <p className="text-sm text-gray-400 mb-4 h-10 overflow-hidden">{description}</p>

            {/* Progress Bar */}
            <div className="mt-4">
                <div className="w-full bg-gray-700 rounded-full h-2">
                    <motion.div 
                        className={`h-2 rounded-full ${colorClass}`} 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${proficiencyLevel}%` }}
                        transition={{ duration: 1.2, type: "spring", stiffness: 100 }}
                        viewport={{ once: true }}
                    />
                </div>
            </div>
        </motion.div>
    );
};

// --- 2. SkillsSection Main Component ---
const SkillsSection = () => {
    
    // --- CURSOR FOLLOWING LOGIC ---
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event) => {
            setMousePosition({ x: event.clientX, y: event.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    // Framer Motion Variants for Header
    const headerVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <section 
            id="skills" 
            className="relative py-24 md:py-32 bg-gray-900 text-white overflow-hidden" 
        >
            {/* --- DYNAMIC BACKGROUND ORBS --- */}
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

            {/* --- ALL CONTENT --- */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Header */}
                <motion.h2 
                    initial="hidden" animate="visible" variants={headerVariants}
                    className="text-center text-5xl md:text-6xl font-extrabold mb-4"
                >
                    Technical <span className="text-teal-400">Skills</span>
                </motion.h2>
                <p className="text-center text-xl text-gray-400 max-w-2xl mx-auto mb-16">
                    My core competencies and proficiency levels across the modern full-stack development ecosystem.
                </p>

                {/* SKILLS GRID WITH CARDS */}
                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {allSkills.map((skill, index) => (
                        <SkillCard 
                            key={index}
                            skillName={skill.name}
                            proficiencyLevel={skill.level}
                            icon={skill.icon}
                            description={skill.description}
                        />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default SkillsSection;