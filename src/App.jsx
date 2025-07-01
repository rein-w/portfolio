import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import './App.css'

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeLink, setActiveLink] = useState('about'); // State for the active link

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Handler to update the active link
  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <>
      <div
        className="radial-gradient"
        style={{
          background: `radial-gradient(circle 1200px at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.05), transparent 60%)`
        }}
      />
      <div className="main-container">
        <div className="left-container">
          <h1 className="header">Reinhardt W.</h1>
          <h2 className="subtitle">Technical Business Analyst</h2>
          <p className="subtext">I enjoy learning, designing, and building— <br></br>
            both in the realm of technology and in creating tangible products.</p>
          <nav className="navigation-menu">
            {/* --- Add onClick and className to each link --- */}
            <a
              href="#about"
              className={activeLink === 'about' ? 'active' : ''}
              onClick={() => handleLinkClick('about')}
            >
              About
            </a>
            <a
              href="#projects"
              className={activeLink === 'projects' ? 'active' : ''}
              onClick={() => handleLinkClick('projects')}
            >
              Projects
            </a>
            <a
              href="#kitchen"
              className={activeLink === 'kitchen' ? 'active' : ''}
              onClick={() => handleLinkClick('kitchen')}
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
          <div id="about">
            {/* About section content will go here */}
            <h1>About Me</h1>
            <p>This is the about section...</p>
          </div>
          <div id="projects">
            {/* Projects section content will go here */}
            <h1>My Projects</h1>
            <p>This is the projects section...</p>
          </div>
          <div>
            <a href="https://vite.dev" target="_blank">
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </div>
          <h1>Vite + React</h1>
          <div className="card">
            <p>
              Move your mouse around to see the radial gradient effect!
            </p>
          </div>
          <p className="read-the-docs">
            Click on the Vite and React logos to learn more
          </p>
        </div>
      </div>
    </>
  )
}

export default App