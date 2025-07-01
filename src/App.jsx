import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { FaGithub, FaLinkedin } from 'react-icons/fa' // Import the icons
import './App.css'

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

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
          <h1 className="header">Reinhardt W</h1>
          <h2 className="subtitle">Technical Business Analyst</h2>
          <p className="subtext">A brief description about you and what you do.</p>
          <nav className="navigation-menu">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#kitchen">Kitchen</a>
          </nav>
          <div className="social-media-links">
            <a href="https://github.com" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
          </div>
        </div>
        <div className="right-container">
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