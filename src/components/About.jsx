// src/components/AboutSection.jsx

import React, { useState, useEffect } from 'react'; // Added useState and useEffect
import { motion } from 'framer-motion';
import { Code, Zap, Globe } from 'lucide-react'; // Icons

// Data Definitions (English)
const skills = [
    { category: 'Frontend', items: ['React', 'Next.js', 'Tailwind CSS', 'JavaScript (ES6+)', 'HTML5 & CSS3'] },
    { category: 'Backend', items: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'Authentication'] },
    { category: 'Tools & Others', items: ['Git/GitHub', 'VS Code', 'Vite', 'TypeScript (Basic)', 'Framer Motion'] },
];

const values = [
    { icon: Code, title: 'Clean Architecture', description: 'Focus on writing readable, maintainable, and scalable code that adheres to industry best practices and quality standards.' },
    { icon: Zap, title: 'Performance First', description: 'Optimizing application speed, responsiveness, and efficiency for a flawless user experience across all devices.' },
    { icon: Globe, title: 'Continuous Learning', description: 'Actively exploring new technologies, frameworks, and design patterns to stay ahead in the rapidly evolving tech landscape.' },
];

const AboutSection = () => {
    
    // --- 1. CURSOR FOLLOWING LOGIC ---
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event) => {
            // We use clientX/Y to get the position relative to the viewport
            setMousePosition({ x: event.clientX, y: event.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    // Framer Motion Variants for Staggered Reveal Animation
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <section 
            id="about" 
            className="relative py-24 md:py-32 bg-gray-900 text-white overflow-hidden" // Added relative and overflow-hidden
        >
            {/* --- 2. DYNAMIC BACKGROUND ORBS (Copied from Hero) --- */}
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

            {/* --- 3. ALL CONTENT (Wrapped in z-10 for layering) --- */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Page Header */}
                <motion.h2 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center text-5xl md:text-6xl font-extrabold mb-16"
                >
                    Know More <span className="text-teal-400">About Me</span>
                </motion.h2>

                {/* Main Bio and Skills Grid */}
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20"
                >
                    {/* Bio Column */}
                    <motion.div 
                        variants={itemVariants}
                        className="lg:col-span-2 space-y-6 bg-gray-900 p-8 rounded-xl shadow-[0_0_20px_rgba(20,255,200,0.2)] border border-teal-500/40 hover:shadow-[0_0_35px_rgba(20,255,200,0.6)] transition-all duration-500 hover:-translate-y-1"

                    >
                        <p className="text-xl font-semibold text-teal-400">👋 Hello! I'm Mohd Kaif, a Software Developer.</p>
                        <p className="text-xl text-gray-300 leading-relaxed">
                            I am a **passionate Full-Stack Developer** with over three years of experience, focused on creating highly responsive, intuitive, and visually appealing web applications. My core passion lies in architecting **scalable and optimized solutions** using the modern MERN stack (MongoDB, Express, React, Node.js).
                        </p>
                        <p className="text-xl text-gray-300 leading-relaxed">
                            My work goes beyond just writing code; it's about finding the perfect balance between exceptional **User Experience (UX)** and **Technical Excellence**. I thrive on analyzing complex problems and translating them into efficient, beautiful, and maintainable codebases.
                        </p>
                        <p className="text-xl text-gray-300 leading-relaxed font-medium">
                            I am currently **available for new opportunities** and exciting collaborations!
                        </p>
                    </motion.div>

                    {/* Tech Stack Column */}
                    <motion.div variants={itemVariants} className="space-y-8">
                        {skills.map((skillGroup, index) => (
                           <div key={index} className="p-6 bg-gray-800 rounded-xl shadow-lg border border-teal-500/10 hover:shadow-teal-500/50 transition-all duration-500 hover:-translate-y-1">

                                <h3 className="text-2xl font-bold mb-4 text-teal-400 border-b border-teal-500/30 pb-2">
                                    {skillGroup.category}
                                </h3>
                                <div className="flex flex-wrap gap-3">
                                    {skillGroup.items.map(skill => (
                                        <span key={skill} className="px-3 py-1 text-sm font-medium bg-teal-500/20 text-teal-300 rounded-lg hover:bg-teal-500/40 transition duration-300 shadow-md">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Development Philosophy/Values */}
                <div className="text-center mb-12">
                    <h3 className="text-4xl font-bold mb-4 text-white">My Development <span className="text-teal-400">Philosophy</span></h3>
                    <p className="text-xl text-gray-400">The core principles that guide my work every day.</p>
                </div>

                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    {values.map((value, index) => (
                        <motion.div 
                            key={index}
                            variants={itemVariants}
                            className="bg-gray-800 p-8 rounded-xl text-center shadow-2xl border border-teal-500/10 hover:shadow-teal-500/50 hover:bg-gray-700/40 transition-all duration-500 hover:-translate-y-1"

                        >
                            <value.icon className="w-10 h-10 text-teal-400 mx-auto mb-4" />
                            <h4 className="text-xl font-bold mb-3">{value.title}</h4>
                            <p className="text-gray-300 text-sm leading-relaxed">{value.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
                
            </div>
        </section>
    );
};

export default AboutSection;