# 🌌 Mohd Kaif — Premium 3D Interactive Portfolio

A state-of-the-art, high-fidelity personal portfolio web application showcasing full-stack capabilities, modern design systems, and advanced web animations. Built with **React 19**, **Vite 7**, **Tailwind CSS v4**, and **Framer Motion**.

---

## ✨ Features & Highlights

This portfolio is packed with interactive micro-animations, glassmorphic UI cards, and dynamic responsive behaviors:

- **🌌 Cursor-Following Background Orbs:** Interactive glowing background radial gradients in the footer and main views that track the user's mouse with smooth physics.
- **🛡️ 3D Flip Card Certifications:** Immersive 3D depth certification cards that react to mouse hover states and toggle between details/front views.
- **✨ Typographic Typewriter Intro:** Fluid typed introductions using `react-type-animation` to capture user attention instantly.
- **📱 Fully Responsive Navigation:** A glassmorphism navigation header with a smooth-transition mobile overlay, custom burger toggles, and fully functional resume downloads.
- **🚀 Active Smooth-Scroll Modules:** A responsive Back-to-Top float trigger that smoothly moves the viewport back to the top section.
- **🗂️ Professional Experience Timeline:** Clean, interactive timelines illustrating qualifications, educational achievements, work experiences, and core technologies.

---

## 🛠️ Tech Stack & Architecture

- **Core Framework:** [React 19](https://react.dev/) (Modern UI rendering, functional components, hooks)
- **Build System:** [Vite 7](https://vite.dev/) (Instant HMR, highly optimized production builds)
- **Styling Engine:** [Tailwind CSS v4](https://tailwindcss.com/) (Using `@tailwindcss/vite` integration for blazing-fast JIT compile speeds)
- **Animations:** [Framer Motion](https://www.framer.com/motion/) (High-performance 3D transforms, orchestrations, and interactive springs)
- **Iconography:** [Lucide React](https://lucide.dev/) (Sleek, lightweight, and modern SVG vector icons)
- **Dynamic Text:** [React Type Animation](https://github.com/maxakareg/react-type-animation)

---

## 📂 Project Structure

```bash
portfolio/
├── src/
│   ├── assets/
│   │   ├── images/           # Images & downloadable PDF resume assets
│   │   └── react.svg         # SVG graphics
│   ├── components/           # Modular React Components
│   │   ├── About.jsx         # Summary of background and focus
│   │   ├── Certification.jsx # Interactive 3D flip credential cards
│   │   ├── Contact.jsx       # Contact information and messaging form
│   │   ├── Experience.jsx    # Professional background timeline
│   │   ├── Footer.jsx        # Branding, links, and Back-to-Top toggle
│   │   ├── Header.jsx        # Desktop navbar & mobile overlay navigation
│   │   ├── Hero.jsx          # Splash screen with typed text introductions
│   │   ├── Project.jsx       # Work samples and source links
│   │   ├── Qualification.jsx # Interactive timeline for education
│   │   └── Skills.jsx        # Developer expertise & skill percentages
│   ├── App.css               # Project-wide layout overrides
│   ├── App.jsx               # Orchestrates section ordering & rendering
│   ├── index.css             # Tailwind v4 import & custom 3D utilities
│   └── main.jsx              # DOM entry point
├── package.json              # Script configs & dependencies
├── vite.config.js            # Vite build environment configuration
└── tailwind.config.js        # Core Tailwind CSS adjustments
```

---

## 🚀 Getting Started

Follow these steps to run the portfolio locally on your machine:

### 1. Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed (v18.x or above is highly recommended).

### 2. Installation
Clone your repository or download the source files, navigate to the folder, and run:
```bash
npm install
```

### 3. Running in Development Mode
To boot up the local Vite development server with instant Hot Module Replacement (HMR):
```bash
npm run dev
```
By default, the application will run at: **`http://localhost:5173`**

### 4. Building for Production
To bundle the application into highly compressed static assets ready for deployment:
```bash
npm run build
```
This output will be located in the `dist/` directory, optimized and ready to host on Vercel, Netlify, Github Pages, or Surge.

---

## 🔒 Recent Bug Fixes
- **Back to Top Handler:** Integrated high-performance `window.scrollTo` with smooth scroll behavior inside the footer floating trigger, converting standard class attributes to React's `className`.
- **Mobile Menu CV Download:** Converted the static mobile `<button>` tag inside the responsive drawer into a valid download anchor (`<a>`), pointing correctly to the physical resume path (`ResumeFile`) with automatic drawer-close behavior.

---

## 📄 License
This project is private and proprietary. All rights reserved by **Mohd Kaif**.
