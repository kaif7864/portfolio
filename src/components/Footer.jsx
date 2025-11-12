// src/components/Footer.jsx

import React, { useState, useEffect } from 'react'; // Added useState & useEffect for cursor
import { motion } from 'framer-motion'; // For animation
import { Mail, Linkedin, Github, FileText, Send } from 'lucide-react';
import ResumeFile from '../assets/images/kaif-cv.pdf'; // Importing the resume PDF

const Footer = () => {

    const currentYear = new Date().getFullYear();
    const developerName = "Mohd Kaif";

    // --- 1. CURSOR FOLLOWING LOGIC ---
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event) => {
            setMousePosition({ x: event.clientX, y: event.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    // Social & Important Links
    const socialLinks = [
        { icon: Github, href: "https://github.com/kaif7864", title: "GitHub" },
        { icon: Linkedin, href: "https://www.linkedin.com/in/mohd-kaif-84079b2b5", title: "LinkedIn" },
        { icon: Mail, href: "mailto:kaifb9105@gmail.com", title: "Email" },
    ];

    return (
        <footer className="relative py-24 md:py-32 bg-gray-900 text-white overflow-hidden">

            {/* --- Cursor-Following Background Orbs --- */}
            <motion.div
                className="absolute w-80 h-80 bg-teal-500 rounded-full mix-blend-screen filter blur-2xl opacity-8 pointer-events-none"
                animate={{ x: mousePosition.x - 160, y: mousePosition.y - 160 }}
                transition={{ type: "spring", stiffness: 50, damping: 10, mass: 0.1 }}
            ></motion.div>
            <motion.div
                className="absolute w-96 h-96 bg-purple-500 rounded-full mix-blend-screen filter blur-2xl opacity-5 pointer-events-none"
                animate={{ x: mousePosition.x - 200, y: mousePosition.y - 200 }}
                transition={{ type: "spring", stiffness: 40, damping: 10, mass: 0.1 }}
            ></motion.div>

            <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">

                {/* 1. Pre-Footer: Final CTA (The Orb) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="bg-gray-900/50 backdrop-blur-sm p-12 rounded-3xl shadow-2xl border-2 border-teal-500/30 text-center w-full max-w-4xl transform hover:shadow-teal-500/50 transition-all duration-500"
                >
                    <h3 className="text-4xl md:text-5xl font-extrabold text-white">
                        Let's Turn <span className="text-purple-400">Ideas</span> into <span className="text-teal-400">Reality</span>
                    </h3>
                    <p className="text-lg text-gray-400 mt-4 mb-8 max-w-2xl mx-auto">
                        Ready to start your next project or looking to hire a dedicated full-stack developer?
                    </p>

                    <a
                        href="#contact"
                        className="inline-flex items-center gap-3 px-10 py-4 bg-teal-500 text-gray-900 font-bold rounded-full text-xl shadow-xl transition duration-300 transform hover:scale-[1.02] hover:bg-teal-400"
                    >
                        <Send size={22} />
                        Get in Touch Now
                    </a>
                </motion.div>

                <div className="w-full h-px bg-gray-800 my-16"></div>

                {/* 2. Main Footer Section */}
                <div className="w-full flex flex-col ml-2 md:flex-row justify-between items-center space-y-6 md:space-y-0">

                    {/* Copyright & Credits (Left) */}
                    <div className="order-3 md:order-1 text-xl text-center md:text-left text-l text-gray-500">
                        <p>&copy; {currentYear} {developerName}. All rights reserved.</p>
                        <p className="mt-1 flex items-center justify-center md:justify-start space-x-1 text-xl text-gray-600">
                            <span>Built with </span>
                            <span role="img" aria-label="code">⚛️</span>
                            <span> & Tailwind CSS.</span>
                        </p>
                    </div>

                    {/* Social Icons (Center - Unique Circular Style) */}
                    <motion.div
                        className="order-1 md:order-2 flex gap-4 mr-15 "
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        {socialLinks.map((item) => (
                            <a
                                key={item.title}
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                title={item.title}
                                className="p-3 border border-gray-700 rounded-full text-teal-400 hover:bg-teal-500/20 transition duration-300 transform hover:scale-110"
                            >
                                <item.icon className="w-6 h-6" />
                            </a>
                        ))}
                        <a
                            href={ResumeFile}
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Download Resume"
                            className="p-3 border border-gray-700 rounded-full text-teal-400 hover:bg-teal-500/20 transition duration-300 transform hover:scale-110"
                        >
                            <FileText className="w-6 h-6" />
                        </a>
                    </motion.div>

                    {/* Branding/Navigation (Right) */}
                    <div className="order-2 md:order-3 mr-4 text-center md:text-right">
                        <h3 className="text-3xl font-bold  text-white">
                            Mohd <span className="text-teal-400">Kaif</span>
                        </h3>
                        <br />
                        <button
                            class="button-tailwind group relative justify-self-center w-[30px] h-[30px] rounded-full bg-[#141414] shadow-[0_0_0_4px_rgba(180,160,255,0.25)] flex items-center justify-center cursor-pointer overflow-hidden transition-all duration-300 hover:w-[140px] hover:rounded-[50px] hover:bg-teal-400"
                        >
                            <svg
                                class="w-[12px] transition-all duration-300 group-hover:-translate-y-[200%]"
                                viewBox="0 0 384 512"
                            >
                                <path
                                    fill="white"
                                    d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 
      32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
                                />
                            </svg>
                        </button>

                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
