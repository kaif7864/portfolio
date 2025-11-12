import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github, CheckCircle2, XCircle } from 'lucide-react';

const ContactSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [popup, setPopup] = useState({ show: false, message: '', type: '' });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Auto hide popup after 3s
  useEffect(() => {
    if (popup.show) {
      const timer = setTimeout(() => setPopup({ ...popup, show: false }), 3000);
      return () => clearTimeout(timer);
    }
  }, [popup]);

  // Form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        setPopup({ show: true, message: 'Message Sent Successfully!', type: 'success' });
        form.reset();
      } else {
        setPopup({ show: true, message: 'Something went wrong. Try again.', type: 'error' });
      }
    } catch {
      setPopup({ show: true, message: 'Network error. Please try again.', type: 'error' });
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-gray-900 text-white min-h-[80vh] overflow-hidden">
      {/* Animated background orbs */}
      <motion.div
        className="absolute w-80 h-80 bg-teal-500 rounded-full mix-blend-screen filter blur-2xl opacity-10"
        animate={{ x: mousePosition.x - 160, y: mousePosition.y - 160 }}
        transition={{ type: 'spring', stiffness: 50, damping: 10, mass: 0.1 }}
      />
      <motion.div
        className="absolute w-96 h-96 bg-purple-500 rounded-full mix-blend-screen filter blur-2xl opacity-10"
        animate={{ x: mousePosition.x - 200, y: mousePosition.y - 200 }}
        transition={{ type: 'spring', stiffness: 40, damping: 10, mass: 0.1 }}
      />

      {/* Popup Modal */}
      <AnimatePresence>
        {popup.show && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center z-50 bg-black/60 backdrop-blur-sm"
          >
            <motion.div
              initial={{ y: -50, scale: 0.8, opacity: 0 }}
              animate={{ y: 0, scale: 1, opacity: 1 }}
              exit={{ y: -50, scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
              className={`relative p-8 rounded-2xl shadow-2xl text-center w-[90%] max-w-md border 
                ${popup.type === 'success'
                  ? 'bg-green-600/90 border-green-400/50'
                  : 'bg-red-600/90 border-red-400/50'}`}
            >
              {/* Close button */}
              <button
                onClick={() => setPopup({ ...popup, show: false })}
                className="absolute top-3 right-3 text-white/80 hover:text-white transition"
              >
                ✕
              </button>

              {/* Icon */}
              {popup.type === 'success' ? (
                <CheckCircle2 className="mx-auto text-white w-14 h-14 mb-4" />
              ) : (
                <XCircle className="mx-auto text-white w-14 h-14 mb-4" />
              )}

              <h3 className="text-2xl font-bold text-white">{popup.message}</h3>
              <p className="text-gray-100 mt-2">Thank you for reaching out!</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariants}
          className="text-center text-5xl md:text-6xl font-extrabold mb-4"
        >
          Let's <span className="text-teal-400">Connect</span>
        </motion.h2>
        <p className="text-center text-xl text-gray-400 max-w-2xl mx-auto mb-16">
          Whether you have a project idea or just want to say hello, I welcome your message and look forward to hearing from you.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={itemVariants}
            className="space-y-8 p-8 rounded-xl bg-gray-800/70 backdrop-blur-sm shadow-2xl h-fit"
          >
            <h3 className="text-2xl font-bold text-teal-400 border-b border-teal-500/30 pb-3">
              Get in Touch
            </h3>

            <div className="space-y-5 text-lg">
              <ContactItem icon={Mail} title="Email Me" value="kaifb9105@gmail.com" link="mailto:kaifb9105@gmail.com" />
              <ContactItem icon={Phone} title="Call Me" value="(+91) 9837025284" link="tel:+919837025284" />
              <ContactItem icon={MapPin} title="Location" value="Haridwar, Uttarakhand, India" />
            </div>

            <div className="flex gap-4 pt-4 border-t border-gray-700/50">
              <SocialButton icon={Linkedin} link="https://www.linkedin.com/in/mohd-kaif-84079b2b5" title="LinkedIn" />
              <SocialButton icon={Github} link="https://github.com/kaif7864" title="GitHub" />
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={itemVariants}
            className="lg:col-span-2 p-8 rounded-xl bg-gray-800/70 backdrop-blur-sm shadow-2xl"
          >
            <form
              className="space-y-6"
              action="https://formspree.io/f/xqawkvdj"
              method="POST"
              onSubmit={handleSubmit}
            >
              <InputField label="Your Name" type="text" id="name" name="name" />
              <InputField label="Your Email" type="email" id="email" name="email" />
              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="I'm interested in..."
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-teal-500 focus:border-teal-500 transition duration-200 resize-none"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-teal-500 text-gray-900 font-bold rounded-lg text-lg hover:bg-teal-400 transition duration-300 shadow-lg"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Helper Components
const ContactItem = ({ icon: Icon, title, value, link }) => (
  <div className="flex items-start gap-4">
    <Icon className="w-6 h-6 text-teal-400 flex-shrink-0 mt-1" />
    <div>
      <p className="text-sm font-medium text-gray-400">{title}</p>
      {link ? (
        <a href={link} className="text-white hover:text-teal-400 transition duration-200">
          {value}
        </a>
      ) : (
        <p className="text-white">{value}</p>
      )}
    </div>
  </div>
);

const InputField = ({ label, type, id, name }) => (
  <div className="space-y-2">
    <label htmlFor={id} className="block text-sm font-medium text-gray-300">{label}</label>
    <input
      type={type}
      id={id}
      name={name}
      placeholder={label}
      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-teal-500 focus:border-teal-500 transition duration-200"
      required
    />
  </div>
);

const SocialButton = ({ icon: Icon, link, title }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    title={title}
    className="p-3 border border-teal-500/50 rounded-full text-teal-400 hover:bg-teal-500/20 transition duration-300"
  >
    <Icon className="w-6 h-6" />
  </a>
);

export default ContactSection;
