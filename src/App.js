import React from 'react';
import './styles/Global.css';
import './styles/Components.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import ContactForm from './components/ContactForm';
import NagarroLogo from './components/NagarroLogo';
import CapgeminiLogo from './components/CapgeminiLogo';
import SearchUnifyLogo from './components/SearchUnifyLogo';

function App() {
  return (
    <div className="app">
      <nav className="nav">
        <div className="nav-content main-page-layout">
          <div className="nav-logo">RG</div>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      <section id="about" className="hero">
        <div className="hero-content main-page-layout">
          <h1>Raghav Gupta</h1>
          <p>Full Stack Developer & AI Enthusiast</p>
          <p>Building innovative solutions with modern technologies</p>
          <div className="hero-buttons">
            <a href="/RaghavResume.pdf" className="primary-btn" target="_blank" rel="noopener noreferrer" download>Download Resume</a>
            <a href="https://github.com/guptaraghav22" className="secondary-btn" target="_blank" rel="noopener noreferrer">View GitHub</a>
          </div>
        </div>
      </section>

      <section id="skills" className="skills">
        <div className="main-page-layout">
          <h2>Skills</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Frontend</h3>
              <div className="skill-list">
                <span className="skill-item">React</span>
                <span className="skill-item">JavaScript</span>
                {/* <span className="skill-item">TypeScript</span> */}
                <span className="skill-item">HTML5</span>
                <span className="skill-item">CSS3</span>
                {/* <span className="skill-item">Tailwind CSS</span> */}
              </div>
            </div>
            <div className="skill-category">
              <h3>Backend</h3>
              <div className="skill-list">
                <span className="skill-item">Node.js</span>
                <span className="skill-item">Python</span>
                <span className="skill-item">Express</span>
                <span className="skill-item">MongoDB</span>
                <span className="skill-item">PostgreSQL</span>
                <span className="skill-item">REST APIs</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>AI & Tools</h3>
              <div className="skill-list">
                
                
                <span className="skill-item">Git</span>
                <span className="skill-item">Docker</span>
                <span className="skill-item">Open Ai</span>
                <span className="skill-item">Microservices</span>
                <span className="skill-item">Kafka</span>
                
                <span className="skill-item">Jenkins</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="experience">
        <div className="main-page-layout">
          <h2>Experience</h2>
          <div className="timeline">
            <div className="timeline-item left">
              <div className="timeline-date">2023 - Present</div>
              <div className="timeline-logo-container">
                <SearchUnifyLogo className="company-logo" />
              </div>
              <div className="timeline-content">
                <h3>SearchUnify</h3>
                <p>Senior Software Engineer</p>
                <ul>
                  <li>Led the development of a new analytics dashboard using React and TypeScript</li>
                  <li>Improved application performance by 40% through code optimization</li>
                  <li>Mentored junior developers and conducted code reviews</li>
                </ul>
              </div>
            </div>

            <div className="timeline-item right">
              <div className="timeline-date">Aug 2022 - Oct 2023</div>
              <div className="timeline-logo-container">
                <NagarroLogo className="company-logo" />
              </div>
              <div className="timeline-content">
                <h3>Nagarro</h3>
                <p>Associate Software Engineer</p>
                <ul>
                  <li>Developed responsive UI components using React, implementing a reusable component library with CSS-in-JS for a single project, improving UI consistency.</li>
                  <li>Built and integrated RESTful APIs with Node.js and Express.js, connecting React front-end to MongoDB, reducing data fetch latency by 15%.</li>
                  <li>Secured APIs with JWT-based authentication, mitigating 100% of unauthorized access attempts.</li>
                </ul>
              </div>
            </div>

            <div className="timeline-item left">
              <div className="timeline-date">Feb 2022 - July 2022</div>
              <div className="timeline-logo-container">
                <CapgeminiLogo className="company-logo" />
              </div>
              <div className="timeline-content">
                <h3>Capgemini</h3>
                <p>Software Trainee</p>
                <ul>
                  <li>Trained in Java and SQL, developing applications with Spring Boot and MySQL for enterprise solutions.</li>
                  <li>Built a CRUD-based employee management system with Spring Boot, deployed on AWS, handling 500+ records.</li>
                </ul>
              </div>
            </div>

             <div className="timeline-item right">
              <div className="timeline-date">2019 - 2021</div>
              <div className="timeline-logo-container">
                <SearchUnifyLogo className="company-logo" />
              </div>
              <div className="timeline-content">
                <h3>SearchUnify</h3>
                <p>Junior Software Engineer</p>
                <ul>
                  <li>Assisted in developing and testing web applications</li>
                  <li>Worked on frontend development using React and JavaScript</li>
                  <li>Participated in code reviews and team meetings</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section id="projects" className="projects">
        <div className="main-page-layout">
          <h2>Featured Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              {/* <img src="/project1.jpg" alt="Crypto Tracker" className="project-image" /> */}
              <div className="project-content">
                <h3>Crypto Tracker</h3>
                <p>Built a React app with WebSocket for real-time updates and OpenSearch for asset search</p>
                <div className="project-tech">
                  <span className="tech-tag">React</span>
                  <span className="tech-tag">WebSocket</span>
                  <span className="tech-tag">OpenSearch</span>
                </div>
                <div className="project-links">
                  <a href="http://cryptobucket-raghav.s3-website.ap-south-1.amazonaws.com/" className="primary-btn" target="_blank" rel="noopener noreferrer">Live Demo</a>
                  <a href="https://github.com/guptaraghav22/cryto/tree/main/src" className="secondary-btn" target="_blank" rel="noopener noreferrer">Source Code</a>
                </div>
              </div>
            </div>
            <div className="project-card">
              {/* <img src="/project2.jpg" alt="Swiggy Clone" className="project-image" /> */}
              <div className="project-content">
                <h3>Swiggy Clone</h3>
                <p>Full-stack e-commerce solution with real-time inventory</p>
                <div className="project-tech">
                  <span className="tech-tag">Node.js</span>
                  <span className="tech-tag">MongoDB</span>
                  <span className="tech-tag">React</span>
                </div>
                <div className="project-links">
                  <a href="https://github.com/guptaraghav22/swiggy-clone" className="secondary-btn" target="_blank" rel="noopener noreferrer">Source Code</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="main-page-layout">
          <div className="contact-content">
            <h2>Get in Touch</h2>
            <p>I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.</p>
            <p>Email: er.raghavgupta22@gmail.com</p>
            <p>Phone: +91 8557025600</p>
            <ContactForm />
            <div className="social-links">
              <a href="https://github.com/guptaraghav22" className="social-link" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/raghavgupta" className="social-link" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="main-page-layout">
          <div className="footer-content">
            <p>&copy; 2024 Raghav Gupta. All rights reserved.</p>
            <div className="footer-links">
              <a href="#about">About</a>
              <a href="#experience">Experience</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
