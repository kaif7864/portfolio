// src/components/CertificationSection.jsx

import React, { useState, useEffect, useRef } from 'react'; 
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Award, Code, Zap, CheckCircle, Trophy } from 'lucide-react';

// ✅ तुमने जो ही imports रखे हैं वही रहने दिए हैं
import javaBasicCert from '../assets/images/java.jpg';
import webDevIitRCert from '../assets/images/iitr.jpg';
import hackathon40Cert from '../assets/images/40.jpg';
import internalHackCert from '../assets/images/int1.jpg';
import hackathon2025Cert from '../assets/images/2025.jpg';
// 🔥 New Import for AI Skills Passport Certificate Image (Assuming you will replace 'aiSkillsCert' with the actual path)
import aiSkillsCert from '../assets/images/aiPass.jpg'; 

const certificationData = [
    { title: 'Java (Basic)', issuer: 'Course/Platform Name', date: 'July 2024', details: 'Achieved a basic understanding of core Java concepts.', icon: CheckCircle, link: '#', certificateImage: javaBasicCert },
    { title: 'Web Development', issuer: 'IIT Roorkee', date: 'August 2024', details: 'Completed workshop on essential Web Development technologies.', icon: Code, link: '#', certificateImage: webDevIitRCert },
    { title: 'Hackathon 4.0', issuer: 'COER University', date: 'October 2024', details: 'Participated showcasing rapid development skills.', icon: Zap, link: '#', certificateImage: hackathon40Cert },
    { title: 'Internal Hackathon 2025', issuer: 'COER University', date: 'Nov 2024', details: 'Worked with a team to solve real problems.', icon: Trophy, link: '#', certificateImage: internalHackCert },
    { title: 'Hackathon 2025', issuer: 'COER University', date: 'October 2025', details: 'Contributed to innovative project development.', icon: Zap, link: '#', certificateImage: hackathon2025Cert },
    // 🔥 New Certification Card Added
    { 
        title: 'AI Skills Passport', 
        issuer: 'EY and Microsoft', 
        date: 'Nov 2025', 
        details: 'Successfully completed General, Employability, and Technology sections.', 
        icon: Award, 
        link: '#', // Add actual link here
        certificateImage: aiSkillsCert // Use the imported image variable
    }, 
];

const FlippingCertificationCard = ({ data }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const cardRef = useRef(null);
    const x = useMotionValue(0.5);
    const y = useMotionValue(0.5);

    const rotateX = useTransform(y, [0, 1], [3, -3]);
    const rotateY = useTransform(x, [0, 1], [-3, 3]);

    const handleMouseMove = (e) => {
        if (isFlipped || !cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        x.set((e.clientX - rect.left) / rect.width);
        y.set((e.clientY - rect.top) / rect.height);
    };

    const handleMouseLeave = () => {
        if (isFlipped) return;
        x.set(0.5);
        y.set(0.5);
    };

    // Combined leave handler: reset motion values and un-flip the card
    const handleMouseLeaveCombined = () => {
        handleMouseLeave();
        setIsFlipped(false);
    };

    const flipVariants = { front: { rotateY: 0 }, back: { rotateY: 180 } };
    const currentRotateX = isFlipped ? 0 : rotateX;
    const currentRotateY = isFlipped ? 0 : rotateY;

    return (
        <motion.div
            ref={cardRef}
            className="perspective-1000 w-full h-80 relative select-none"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeaveCombined}
            onMouseEnter={() => setIsFlipped(true)}
            onClick={() => setIsFlipped(prev => !prev)}
            style={{ rotateX: currentRotateX, rotateY: currentRotateY, transformStyle: "preserve-3d" }}
        >
            <motion.div
                className="relative w-full h-full preserve-3d"
                animate={isFlipped ? "back" : "front"}
                variants={flipVariants}
                transition={{ duration: 0.6, ease: "easeInOut" }}
            >
                <div className="absolute w-full h-full backface-hidden p-6 rounded-xl bg-gray-800/80 backdrop-blur-sm shadow-2xl border border-teal-500/20 flex flex-col justify-between">
                    <div>
                        <div className="flex items-start mb-4">
                            <data.icon className="w-8 h-8 text-teal-400 mr-4" />
                            <div>
                                <h3 className="text-xl font-bold text-white">{data.title}</h3>
                                <p className="text-sm text-gray-400 italic mt-1">Issued by: {data.issuer}</p>
                            </div>
                        </div>
                        <p className="text-gray-300 mb-4 text-sm">{data.details}</p>
                    </div>
                    <div className="flex justify-between items-center pt-3 border-t border-gray-700/50">
                        <span className="text-sm text-purple-400">{data.date}</span>
                        <a href={data.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-semibold text-gray-900 bg-teal-400 px-3 py-1 rounded-full hover:bg-teal-300" onClick={(e) => e.stopPropagation()}>
                            View Link <Award className="w-4 h-4 ml-1" />
                        </a>
                    </div>
                </div>

                <div className="absolute w-full h-full backface-hidden rotate-y-180 p-2 rounded-xl bg-gray-800/80 backdrop-blur-sm shadow-2xl border border-teal-500/20 flex items-center justify-center overflow-hidden">
                    <img src={data.certificateImage} className="w-full h-full object-contain rounded-lg rotate-y-180" style={{ transform: 'rotateY(0deg)' }} />

                </div>
            </motion.div>
        </motion.div>
    );
};

const CertificationSection = () => {
    
    // ✅ Cursor Follow Background Effect Added
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    useEffect(() => {
        const handle = (e) => setMousePosition({ x: e.clientX, y: e.clientY });
        window.addEventListener("mousemove", handle);
        return () => window.removeEventListener("mousemove", handle);
    }, []);

    return (
        <section id="certifications" className="relative py-24 md:py-32 bg-gray-900 text-white overflow-hidden">

            {/* 🔥 Background Orbs (Same as Contact Section) */}
            <motion.div
                className="absolute w-80 h-80 bg-teal-500 rounded-full mix-blend-screen filter blur-3xl opacity-10"
                animate={{ x: mousePosition.x - 200, y: mousePosition.y - 200 }}
                transition={{ type: "spring", stiffness: 50, damping: 10 }}
            ></motion.div>

            <motion.div
                className="absolute w-96 h-96 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl opacity-10"
                animate={{ x: mousePosition.x - 260, y: mousePosition.y - 260 }}
                transition={{ type: "spring", stiffness: 40, damping: 10 }}
            ></motion.div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-5xl md:text-6xl font-extrabold mb-4">My <span className="text-teal-400">Certifications</span></h2>
                <p className="text-xl text-gray-400 mb-16">Verified proof of my technical skills. Hover or tap to view certificate!</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certificationData.map((item, index) => <FlippingCertificationCard key={index} data={item} />)}
                </div>
            </div>
        </section>
    );
};

export default CertificationSection;