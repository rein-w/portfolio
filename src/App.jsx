import { useState, useEffect, useRef, useCallback } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FiArrowUpRight } from 'react-icons/fi';
import { CiUser, CiAlarmOn, CiRuler, CiBowlNoodles } from "react-icons/ci";
import './App.css';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeLink, setActiveLink] = useState('about');

  // Best Practice 1: Group refs into a single object for cleaner access
  const sectionRefs = {
    about: useRef(null),
    projects: useRef(null),
    kitchen: useRef(null),
  };

  // Best Practice 2: Memoize the mouse move handler with useCallback for performance
  const handleMouseMove = useCallback((event) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  }, []); // Empty dependency array means this function is created only once

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [handleMouseMove]); // Add handleMouseMove as a dependency

  // Best Practice 3: Simplify the click handler using the new refs object
  const handleLinkClick = (e, section) => {
    e.preventDefault();
    setActiveLink(section);
    sectionRefs[section].current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <>
      <div
        className="radial-gradient"
        style={{
          background: `radial-gradient(circle 1200px at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.05), transparent 60%)`,
        }}
      />
      <div className="main-container">
        <div className="left-container">
          <h1 className="header">Reinhardt W.</h1>
          <h2 className="subtitle">Technical Business Analyst</h2>
          {/* Best Practice 4: Use CSS for line breaks instead of <br /> */}
          <p className="subtext">
            I enjoy learning, designing, and building—
            <span className="subtext-line-break">both in the realm of technology and in creating tangible products.</span>
          </p>
          <nav className="navigation-menu">
            <a
              href="#about"
              className={activeLink === 'about' ? 'active' : ''}
              onClick={(e) => handleLinkClick(e, 'about')}
            >
              About
            </a>
            <a
              href="#projects"
              className={activeLink === 'projects' ? 'active' : ''}
              onClick={(e) => handleLinkClick(e, 'projects')}
            >
              Projects
            </a>
            <a
              href="#kitchen"
              className={activeLink === 'kitchen' ? 'active' : ''}
              onClick={(e) => handleLinkClick(e, 'kitchen')}
            >
              Kitchen
            </a>
          </nav>
          <div className="social-media-links">
            <a href="https://github.com/rein-w/" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/reinhardtw/" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
          </div>
        </div>
        <div className="right-container">
          <section id="about" className="content-section" ref={sectionRefs.about}>
            <p>
              I'm an analyst who prioritises human behaviour and experience when developing effective solutions. I believe creative, thoughtful design is just as important as well-defined process definitions- an almost obligate mutualism. Personally, I find great fulfilment in creating solutions that not only tackle the root issue and enhance processes, but are also a genuine joy to use.
            </p>
            <p>
              At the moment, I'm a Technical Business Analyst at <a href="https://www.appsure.com.au" target="_blank" rel="noreferrer"><b>Appsure</b></a>, working in a close-knit team of seven. As a result, I've become a jack of all trades: leading business analysis, managing clients, digitising complex insurance pricing and product configuration, designing UX/UI for custom screens, driving marketing efforts, and constantly finding new ways to improve our core offering.
            </p>
            <p>
              Before I joined the technology industry, I worked in marketing, where I created campaigns and marketing artefacts, as well as in real estate, assisting with sales and property management. Through these experiences, I learned the importance of exposure and design, but also the necessity of having a solid product to back up any claims. This principle applies across all types of offerings, from SaaS to physical goods.
            </p>
              <p>
              Beyond work, I'm either cooking, leather crafting, gem hunting, or building some more. Maybe one day I'll re-ignite my early tween <a href="https://youtu.be/AgY_ffcXlOQ" target="_blank" rel="noreferrer"><b>VFX</b></a> and <a href="https://youtu.be/CvfrsX2jdbs" target="_blank" rel="noreferrer"><b>stop-motion</b></a> dreams.
            </p>
          </section>

          <section id="projects" className="content-section" ref={sectionRefs.projects}>
             <a href="#portfolio" className="project-link">
            <div className="project-card">
                  <CiUser className="project-icon" />
              <h3>This Portfolio</h3>
              <p>I wanted to create a casual online portfolio that I can share and refer to, and continuously upgrade over time as I develop new skills.</p>
              <div className="project-tags">
                <span>React + Vite</span>
              </div>
            </div>
            </a>

            <a href="https://github.com/rein-w/" target="_blank" rel="noreferrer" className="project-link">
            <div className="project-card">
                  <CiAlarmOn className="project-icon" />
              <h3>Habit Tracker + Pomodoro Timer
                <FiArrowUpRight className="external-link-icon" />
              </h3>
              <p>As someone who tends to zero in on one thing and lose track of other tasks, I'm creating an web app to help users build and track their daily and weekly habits.</p>
              <div className="project-tags">
                <span>React + Vite</span>
                <span>MongoDB</span>
                <span>Modular API Framework</span>
              </div>
            </div>
            </a>

            <a href="https://github.com/rein-w/" target="_blank" rel="noreferrer" className="project-link">
            <div className="project-card">
                  <CiRuler className="project-icon" />
              <h3>Single-Pass Flush NATO Strap
                <FiArrowUpRight className="external-link-icon" />
              </h3>
              <p>As a watch nerd, I really enjoy NATO straps but dislike the excess material. I am designing a clasp system that will create a more flush experience.</p>
              <div className="project-tags">
                <span>Wordpress</span>
                <span>CSS</span>
                <span>Fusion360</span>
              </div>
            </div>
            </a>
          </section>

          <section id="kitchen" className="content-section" ref={sectionRefs.kitchen}>
            <p>
              This is the kitchen section. You can write about your hobbies, passions, or anything else you'd like to share. It's a place to show a different side of your personality.
            </p>
            <p>
              Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue.
            </p>
            <a href="https://github.com/rein-w/" target="_blank" rel="noreferrer" className="project-link">
                        <div className="project-card">
              <CiBowlNoodles className="project-icon" />
              <h3>A Featured Recipe
                 <FiArrowUpRight className="external-link-icon" />
              </h3>
              <p>This is a great place to highlight a specific recipe, a cooking technique you've mastered, or a favorite dish you've made recently.</p>
            </div>
            </a>
            <p>
              Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}

export default App;