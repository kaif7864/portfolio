// src/components/ExperienceSection.jsx

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Code, BookOpen, Map, ShoppingCart, TrendingUp } from 'lucide-react';

const workExperience = [
    {
        title: 'Web Development Intern',
        company: 'Technook',
        dates: 'June 2024 - Aug 2024',
        icon: Briefcase,
        points: [
            'Contributed to live projects, gaining hands-on experience in real-world development.',
            'Developed the official website for RhynoEV.',
            'Collaborated with team members to integrate the admin module with the website structure.',
            'Enhanced development skills and gained practical experience working on production-level applications.',
        ],
    },
];

const projects = [
    {
        title: 'Kisan MitraAi',
        description: 'A farmer assistance platform providing real-time agricultural guidance.',
        techStack: 'React.js, Node.js, AI/ML (Concept)',
        icon: BookOpen,
        details: [
            'Responsive frontend using React.js.',
            'Real-time notifications and alerts.',
            'Data visualization dashboards.',
            'User-friendly UI for farmers.',
        ],
        liveLink: '#',
        githubLink: 'https://github.com/kaif7864/ai-farmer-assistant-app',
    },
    {
        title: 'Personal Portfolio (This Website)',
        description: 'A fully responsive portfolio showcasing projects and skills.',
        techStack: 'React.js, Tailwind CSS, Framer Motion',
        icon: Code,
        details: [
            'Interactive UI showcasing experience.',
            'Framer Motion animations.',
            'Responsive grid and flexbox layouts.',
            'Live projects and resume download.',
        ],
        liveLink: '#',
        githubLink: 'https://github.com/kaif7864/portfolio',
    },
    {
        title: 'E-Commerce Platform (Flipkart Clone)',
        description: 'A scalable full-stack e-commerce platform.',
        techStack: 'MERN Stack, Redux, Payment Gateway',
        icon: ShoppingCart,
        details: [
            'Full MERN structure.',
            'Responsive UI with Tailwind.',
            'Integrated Payment Gateway.',
            'Admin Dashboard for products & orders.',
        ],
        liveLink: '#',
        githubLink: '#',
    },
    {
        title: 'AI Trip Planner',
        description: 'AI-powered personalized travel planning app.',
        techStack: 'React.js, Node.js, AI API, Google Maps API',
        icon: Map,
        details: [
            'AI chatbot assistant.',
            'Generated multi-day itineraries.',
            'Route visualization with Google Maps.',
            'User authentication & saved trips.',
        ],
        liveLink: '#',
        githubLink: '#',
    },
];

const ExperienceCard = ({ data }) => (
    <div className="flex items-start mb-10 last:mb-0">
        <data.icon className="w-6 h-6 text-teal-400 mt-1 flex-shrink-0" />
        <div className="ml-4 hover:shadow-teal-500/50 transition-all duration-500 rounded-xl p-3">
            <h3 className="text-xl font-semibold text-white">{data.title} @ {data.company}</h3>
            <p className="text-sm italic text-gray-400 mb-3">{data.dates}</p>
            <ul className="list-disc list-inside space-y-2">
                {data.points.map((point, i) => (
                    <li key={i} className="text-gray-300 text-base">{point}</li>
                ))}
            </ul>
        </div>
    </div>
);

const ProjectCard = ({ data }) => (
    <div className="bg-gray-800/70 p-6 rounded-xl shadow-2xl border border-teal-500/20 hover:border-purple-400/50 hover:shadow-teal-500/50 transition-all duration-500 transform hover:-translate-y-1">
        <div className="flex items-center mb-4">
            <data.icon className="w-8 h-8 text-purple-400 flex-shrink-0 mr-4" />
            <div>
                <h3 className="text-2xl font-bold text-white">{data.title}</h3>
                <p className="text-sm text-teal-400 font-medium mt-1">Tech Stack: {data.techStack}</p>
            </div>
        </div>
        
        <p className="text-gray-300 mb-4">{data.description}</p>
        
        <h4 className="text-lg font-semibold text-white mb-2 flex items-center">
            <TrendingUp className="w-5 h-5 mr-2 text-teal-400" /> Key Contributions:
        </h4>
        <ul className="list-disc list-inside space-y-2 text-sm">
            {data.details.map((detail, i) => (
                <li key={i} className="text-gray-400">{detail}</li>
            ))}
        </ul>

        <div className="mt-6 flex space-x-4">
            <a href={data.liveLink} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold px-4 py-2 rounded-full bg-teal-500 text-gray-900 hover:bg-teal-400 transition-colors">
                Live Demo
            </a>
            <a href={data.githubLink} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold px-4 py-2 rounded-full border border-purple-500 text-white hover:bg-purple-500 transition-colors">
                GitHub Repo
            </a>
        </div>
    </div>
);

const ExperienceSection = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event) => {
            setMousePosition({ x: event.clientX, y: event.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <section id="experience" className="relative py-24 md:py-32 bg-gray-900 text-white overflow-hidden">

            <motion.div
                className="absolute w-[22rem] h-[22rem] bg-teal-500 rounded-full mix-blend-screen filter blur-2xl opacity-10"
                animate={{ x: mousePosition.x - 170, y: mousePosition.y - 170 }}
                transition={{ type: 'spring', stiffness: 50, damping: 10, mass: 0.1 }}
            />
            <motion.div
                className="absolute w-[28rem] h-[28rem] bg-purple-500 rounded-full mix-blend-screen filter blur-2xl opacity-5"
                animate={{ x: mousePosition.x - 230, y: mousePosition.y - 230 }}
                transition={{ type: 'spring', stiffness: 40, damping: 10, mass: 0.1 }}
            />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <h2 className="text-5xl md:text-6xl font-extrabold text-center mb-16">
                    Professional <span className="text-teal-400">Journey</span>
                </h2>

                <div className="mb-20">
                    <h3 className="text-4xl font-bold text-left mb-10 border-l-4 border-teal-400 pl-4">
                        <Briefcase className="inline-block w-8 h-8 mr-2" /> Work Experience
                    </h3>
                    <div className="relative border-l border-gray-700 ml-4 md:ml-12">
                        {workExperience.map((exp, index) => (
                            <ExperienceCard key={index} data={exp} />
                        ))}
                    </div>
                </div>

                <hr className="border-gray-700 my-16" />

                <div>
                    <h3 className="text-4xl font-bold text-left mb-10 border-l-4 border-purple-400 pl-4">
                        <Code className="inline-block w-8 h-8 mr-2" /> Key Projects
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {projects.map((project, index) => (
                            <ProjectCard key={index} data={project} />
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ExperienceSection;
