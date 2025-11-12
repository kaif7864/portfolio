// src/components/WorkSection.jsx

import React, { useState, useEffect } from 'react'; // Added Hooks for mouse tracking
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react'; // Icons

// --- Project Data ---
const featuredProjects = [
    {
        id: 1,
        title: "E-Commerce Platform Redesign",
        description: "A full-stack e-commerce site built with Next.js, Stripe integration, and a headless CMS for inventory management.",
        tags: ['Next.js', 'React', 'Tailwind CSS', 'Stripe', 'Node.js'],
        imageUrl: "https://via.placeholder.com/600x400/1e293b/d1d5db?text=Project+1+Image", // Replace with your image path
        liveLink: "#",
        githubLink: "#",
    },
    {
        id: 2,
        title: "Real-time Chat Application",
        description: "A WebSocket-powered application providing real-time, secure messaging between users with MongoDB persistence.",
        tags: ['React', 'Express', 'Socket.io', 'MongoDB', 'JWT'],
        imageUrl: "https://via.placeholder.com/600x400/0f172a/d1d5db?text=Project+2+Image",
        liveLink: "#",
        githubLink: "#",
    },
    {
        id: 3,
        title: "Custom Portfolio Generator",
        description: "A tool enabling users to generate and host customized portfolios using drag-and-drop components and saving configurations to a database.",
        tags: ['Vite', 'TypeScript', 'Framer Motion', 'Firebase'],
        imageUrl: "https://via.placeholder.com/600x400/1e293b/d1d5db?text=Project+3+Image",
        liveLink: "#",
        githubLink: "#",
    },
];

const WorkSection = () => {
    
    // --- 1. CURSOR FOLLOWING LOGIC ---
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event) => {
            setMousePosition({ x: event.clientX, y: event.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);
    
    // Framer Motion Variants for Staggered Reveal
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <section 
            id="work" 
            className="relative py-24 md:py-32 bg-gray-900 text-white overflow-hidden" // Added relative and overflow-hidden
        >
            {/* --- 2. DYNAMIC BACKGROUND ORBS --- */}
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
                
                {/* Section Header */}
                <motion.h2 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center text-5xl md:text-6xl font-extrabold mb-4"
                >
                    My Featured <span className="text-teal-400">Project</span>
                </motion.h2>
                <p className="text-center text-xl text-gray-400 max-w-2xl mx-auto mb-16">
                    A selection of my recent projects showcasing my full-stack capabilities and design sensibilities.
                </p>

                {/* Projects Grid */}
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible" // Animate when section scrolls into view
                    viewport={{ once: true, amount: 0.2 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
                >
                    {featuredProjects.map((project) => (
                        <motion.div 
                            key={project.id}
                            variants={cardVariants}
                            className="group relative overflow-hidden rounded-xl shadow-2xl bg-gray-800/80 backdrop-blur-sm hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-1 border border-transparent hover:border-teal-500/50"
                        >
                            
                            {/* Project Image */}
                            <div className="overflow-hidden h-56">
                                <img 
                                    src={project.imageUrl} 
                                    alt={project.title} 
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>

                            {/* Card Content */}
                            <div className="p-6">
                                <h3 className="text-2xl font-semibold mb-2 text-teal-400">{project.title}</h3>
                                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>
                                
                                {/* Tags/Tech Stack */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, index) => (
                                        <span key={index} className="text-xs font-medium bg-teal-500/20 text-teal-300 px-3 py-1 rounded-full shadow-inner">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Links/Buttons */}
                                <div className="flex gap-4 mt-4 pt-3 border-t border-gray-700">
                                    <a 
                                        href={project.liveLink} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-sm font-semibold text-gray-900 bg-teal-500 px-4 py-2 rounded-lg hover:bg-teal-400 transition duration-300"
                                    >
                                        <ExternalLink size={18} /> Live Demo
                                    </a>
                                    <a 
                                        href={project.githubLink} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-sm font-semibold text-teal-400 border border-teal-500 px-4 py-2 rounded-lg hover:bg-teal-500 hover:text-gray-900 transition duration-300"
                                    >
                                        <Github size={18} /> Code
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
                
            </div>
        </section>
    );
};

export default WorkSection;