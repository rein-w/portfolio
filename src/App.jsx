import { useState, useEffect, useRef, useCallback } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FiArrowUpRight } from 'react-icons/fi';
import { CiUser, CiAlarmOn, CiRuler, CiBowlNoodles } from "react-icons/ci";
import './App.css';
import footerIcon from './assets/fries-small.png';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeLink, setActiveLink] = useState('about');

  // --- All refs should be defined together at the top ---
  const sectionRefs = {
    about: useRef(null),
    projects: useRef(null),
    kitchen: useRef(null),
  };
  const rightContainerRef = useRef(null); // Define the ref here

  // --- All functions should be defined next ---
  const handleMouseMove = useCallback((event) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  }, []);

  const handleLinkClick = (e, section) => {
    e.preventDefault();
    sectionRefs[section].current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  // --- All useEffect hooks should be defined last, before the return statement ---

  // Mouse move effect
  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [handleMouseMove]);

  // IntersectionObserver effect for scroll spying
  useEffect(() => {
    const observerOptions = {
      // **The Fix 1:** Tell the observer that the ".right-container" is the scrollable area.
      root: rightContainerRef.current,
      // **The Fix 2:** Create a -1px tall "tripwire" in the vertical center of the container.
      // An element is "intersecting" the moment it crosses this line.
      rootMargin: "-50% 0px -50% 0px",
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        // When a section crosses the tripwire, set it as the active link.
        if (entry.isIntersecting) {
          setActiveLink(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const sections = Object.values(sectionRefs);
    sections.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      sections.forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []); // The empty dependency array ensures this runs only once


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
        <div className="right-container" ref={rightContainerRef}>
          <section id="about" className="content-section" ref={sectionRefs.about}>
            <h2 className="mobile-header">About</h2>
            <p>
              I'm an analyst who prioritises human behaviour and experience when developing effective solutions. I believe creative, thoughtful design is just as important as well-defined process definitions- an almost obligate mutualism. Personally, I find great fulfilment in creating solutions that not only tackle the root issue and enhance processes, but are also a genuine joy to use.
            </p>
            <p>
              At the moment, I'm a Technical Business Analyst at <a href="https://www.appsure.com.au" target="_blank" rel="noreferrer"><b>Appsure</b></a>, working in a close-knit team of seven. As a result, I've become a jack of all trades: leading business analysis, managing clients, digitising complex insurance pricing and product configuration, designing UX/UI for custom screens, driving marketing efforts, and constantly finding new ways to improve our software.
            </p>
            <p>
              Before I joined the technology industry, I worked in marketing, where I created campaigns and marketing artefacts, as well as in real estate, assisting with sales and property management. Through these experiences, I learned the importance of exposure and design, but also the necessity of having a solid product to back up any claims. This principle applies to SaaS and physical goods.
            </p>
              <p>
              Beyond work, I'm either cooking, leather crafting, gem hunting, or building some more. Maybe one day I'll re-ignite my early tween <a href="https://youtu.be/AgY_ffcXlOQ" target="_blank" rel="noreferrer"><b>VFX</b></a> and <a href="https://youtu.be/CvfrsX2jdbs" target="_blank" rel="noreferrer"><b>stop-motion</b></a> dreams.
            </p>
          </section>

          <section id="projects" className="content-section" ref={sectionRefs.projects}>
            <h2 className="mobile-header">Projects</h2>
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
              <h3>Habit Tracker
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
              <h3>NATO Strap Clasp
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

          <hr className="section-divider" />

          <section id="kitchen" className="content-section" ref={sectionRefs.kitchen}>
            <h2 className="mobile-header">Kitchen</h2>
            <p>
              My main hobby outside of work is cooking. I love curating dishes and menus to challenge myself, often running set menus and banquets for friends and family. These experiences demand a lot of theorising, practical planning, preparation, mise en place, and execution under pressure. Cooking keeps me on my toes and tests both my mind and body. But the end result is always rewarding: serving good food and seeing everyone's smiles.
            </p>
            <br></br>

            <a href="https://github.com/rein-w/" target="_blank" rel="noreferrer" className="project-link">
              <div className="project-card kitchen-card">
                <CiBowlNoodles className="project-icon" />
                <h3>Reinhardt's Kitchen
                    <FiArrowUpRight className="external-link-icon" />
                </h3>
                <p>This is where I can experiment more with the front-end design and behaviour. I use this site to share upcoming menus with friends and family before events, and it also serves as an archive of the lunches and dinners I've hosted in the past.</p>
              </div>
            </a>
          </section>

          <div className="footer-icon-container">
            <img src={footerIcon} alt="Maccas Fries" className="footer-icon" />
          </div>

        </div>
      </div>
    </>
  );
}

export default App;