// src/components/Hero.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import ProfilePic from '../assets/images/profile.jpg'; // Ensure you have a profile picture in this path


const Hero = () => {
  // --- Mouse-following background effect state ---
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      id="hero"
      className="relative py-24 md:py-32 bg-gray-900 text-white overflow-hidden flex items-center justify-center min-h-screen" // Added flex, items-center, justify-center, min-h-screen
    >
      {/* Dynamic Background Elements: Refined Glowing Orbs with less blur/opacity */}
      <motion.div
        className="absolute w-80 h-80 bg-teal-500 rounded-full mix-blend-screen text-3xl filter blur-2xl opacity-8"
        animate={{ x: mousePosition.x - 160, y: mousePosition.y - 160 }}
        transition={{ type: "spring", stiffness: 50, damping: 10, mass: 0.1 }}
      ></motion.div>
      <motion.div
        className="absolute w-96 h-96 bg-purple-500 rounded-full mix-blend-screen filter blur-2xl opacity-5"
        animate={{ x: mousePosition.x - 200, y: mousePosition.y - 200 }}
        transition={{ type: "spring", stiffness: 40, damping: 10, mass: 0.1 }}
      ></motion.div>
      {/* Add a subtle background pattern for texture */}
      <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: "url(/path-to-a-subtle-pattern.svg)", backgroundSize: "cover" }}></div>


      {/* --- MAIN CONTENT CONTAINER: FLEX FOR LAYOUT --- */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-12 md:gap-20 text-center md:text-left">
        
        {/* Left Side: Text Content */}
        <div className="flex-1 space-y-6">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
            Hello, I'm <span className="text-teal-400">Mohd Kaif</span>.
          </h1>
          {/* Dynamic Typewriter Role/Tagline */}
          <p className="text-2xl md:text-4xl font-semibold text-gray-200 mt-4 h-16 flex items-center justify-center md:justify-start">
            <TypeAnimation
              sequence={[
                'Crafting Seamless User Experiences.',
                3000, // Wait 3 seconds
                'Building Scalable Web Applications.',
                3000,
                'Innovating with Modern Front-end Tech.',
                3000,
                'Transforming Ideas into Interactive Realities.',
                3000
              ]}
              wrapper="span"
              speed={50} // Typing speed
              repeat={Infinity}
              className="inline-block" // To keep the span correctly aligned
            />
          </p>

          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto md:mx-0 leading-relaxed">
            I'm a passionate Full-Stack Developer creating intuitive and robust web applications. Let's build something amazing together.
          </p>
        </div>

        {/* Right Side: Profile Picture / Avatar (Larger) */}
        <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
            className="relative w-48 h-48 md:w-64 md:h-64 flex-shrink-0" // Increased size here
        >
            {/* Pulsing glow effect around avatar */}
            <span className="absolute inset-0 inline-flex h-full w-full rounded-full bg-teal-400 opacity-20 animate-pulse-slow"></span>
            
            {/* Replace with your actual profile image */}
            <img 
                src={ProfilePic}
                alt="Mohd Kaif" 
                className="relative w-full h-full object-cover rounded-full border-4 border-teal-500 shadow-xl"
            />
        </motion.div>
       
      </div>

      {/* Optional: Scroll indicator for a more guided experience */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: [0, 20, 0], opacity: 1 }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2" 
      >
        <svg className="w-8 h-8 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </motion.div>
    </section>
  );
};

export default Hero;