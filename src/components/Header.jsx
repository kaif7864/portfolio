// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import ResumeFile from '../assets/images/kaif-cv.pdf'; // Importing the resume PDF

const navLinks = [
  { title: "Home", path: "/" },
  { title: "About", path: "#about" },
  { title: "Skills", path: "#skills" },
  { title: "Project", path: "#experience" },
  { title: "Experience", path: "#experience" },
  {title: "Certification", path: "#certification" },
  { title: "Contact", path: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-gray-900/90 backdrop-blur-sm shadow-lg text-2xl">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* 1. Logo/Name */}
          <a href="#" className="text-3xl  font-bold text-teal-400 hover:text-teal-200 transition duration-300 ">
            Mohd Kaif
          </a>

          {/* 2. Desktop Navigation Links */}
          <nav className="hidden md:flex  space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.title}
                href={link.path}
                className="text-white hover:text-teal-400 transition duration-300  relative group"
              >
                {link.title}
                {/* Subtle Hover Underline Effect */}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-teal-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
              </a>
            ))}
          </nav>

        

        {/* 3. Call-to-Action (CTA) Button */}
          <div className="hidden md:block">
            <a 
               href={ResumeFile} // 👈 यहां इंपोर्ट किए गए वेरिएबल का उपयोग करें
               download="Mohd_Kaif_Resume.pdf" // 👈 यह वह नाम है जिससे फाइल डाउनलोड होगी
               className="px-4 py-2 text-xl font-semibold text-gray-900 bg-teal-400 rounded-full hover:bg-teal-300 transition duration-300 shadow-md"
            >
              Download CV
            </a>
          </div>

          {/* 4. Mobile Menu Button */}
          <button
            className="md:hidden text-white hover:text-teal-400 transition duration-300"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* 5. Mobile Menu Overlay (Conditional Rendering) */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-gray-900/95 shadow-xl transition-all duration-300 ease-in-out">
          <nav className="px-4 pt-2 pb-4 space-y-2 flex flex-col items-center">
            {navLinks.map((link) => (
              <a
                key={link.title}
                href={link.path}
                onClick={() => setIsOpen(false)}
                className="block w-full text-center py-2 text-lg text-white hover:bg-gray-800 hover:text-teal-400 rounded-lg transition duration-200"
              >
                {link.title}
              </a>
            ))}
            <button className="mt-4 px-6 py-2 w-3/4 text-lg font-semibold text-gray-900 bg-teal-400 rounded-full hover:bg-teal-300 transition duration-300 shadow-lg">
              Download CV
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;