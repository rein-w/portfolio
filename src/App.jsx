import { useState, useEffect } from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import './App.css'

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeLink, setActiveLink] = useState('about');

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

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
          <p className="subtext">I enjoy learning, designing, and building— <br />
            both in the realm of technology and in creating tangible products.</p>
          <nav className="navigation-menu">
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
          <section id="about" className="content-section">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.
            </p>
            <p>
              Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue.
            </p>
          </section>

          <section id="projects" className="content-section">
            {/* Project Card 1 */}
            <div className="project-card">
              <h3>Project Title 1</h3>
              <p>A brief description of the project, what it does, and the technologies used. Keep it concise but informative.</p>
              <div className="project-tags">
                <span>React</span>
                <span>CSS</span>
                <span>JavaScript</span>
              </div>
            </div>
            {/* Project Card 2 (you can add more like this) */}
            <div className="project-card">
              <h3>Project Title 2</h3>
              <p>Another project description goes here. Talk about the challenges and what you learned.</p>
              <div className="project-tags">
                <span>Node.js</span>
                <span>Express</span>
                <span>API</span>
              </div>
            </div>
            {/* Project Card 3 */}
            <div className="project-card">
              <h3>Project Title 3</h3>
              <p>A brief description of the project, what it does, and the technologies used. Keep it concise but informative.</p>
              <div className="project-tags">
                <span>React</span>
                <span>CSS</span>
                <span>JavaScript</span>
              </div>
            </div>




          </section>

          <section id="kitchen" className="content-section">
            <p>
              This is the kitchen section. You can write about your hobbies, passions, or anything else you'd like to share. It's a place to show a different side of your personality.
            </p>
          </section>
        </div>
      </div>
    </>
  )
}

export default App