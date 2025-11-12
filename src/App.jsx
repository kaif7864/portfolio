// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Work from "./components/Project";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Qualification from "./components/Qualification";
import Certification from "./components/Certification";
import Experience from "./components/Experience";

function App() {
  return (



    <>
      <Header />
      <Hero />
      <About />
      <Qualification />
      <section id="certification">
        <Certification />
      </section>
      {/* <Certification /> */}
      {/* <Work /> */}
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </>



  );
}

export default App;
