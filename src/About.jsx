import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-header">
          <div className="about-header-content">
            <span className="about-subtitle">WHO I AM</span>
            <h2 className="about-title">About Me</h2>
            <div className="about-line"></div>
          </div>
        </div>
        
        <div className="about-content">
          <div className="about-main">
            <div className="about-intro-section">
              <div className="about-intro-text">
                <h3>Passionate Developer & Creative Problem Solver</h3>
                <p className="about-description">
                  I'm a dedicated web developer based in Birmingham, UK, with a passion for 
                  creating exceptional digital experiences. My journey in technology has been 
                  driven by curiosity and a desire to build solutions that make a difference.
                </p>
                <p className="about-description">
                  With expertise in modern web technologies, I specialize in crafting 
                  responsive, performant applications that deliver outstanding user experiences. 
                  Every project is an opportunity to innovate and push the boundaries of what's possible.
                </p>
              </div>
              
              <div className="about-stats">
                <div className="stat-item">
                  <span className="stat-number">3+</span>
                  <span className="stat-label">Years Experience</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">50+</span>
                  <span className="stat-label">Projects Completed</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">100%</span>
                  <span className="stat-label">Client Satisfaction</span>
                </div>
              </div>
            </div>
            
            <div className="about-skills-expertise">
              <h4>Expertise & Skills</h4>
              <div className="skills-expertise-grid">
                <div className="expertise-section">
                  <h5>Areas of Expertise</h5>
                  <div className="expertise-list">
                    <div className="expertise-item">
                      <div className="expertise-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                        </svg>
                      </div>
                      <div className="expertise-content">
                        <h6>Frontend Development</h6>
                        <p>Building responsive, interactive user interfaces with modern frameworks and best practices.</p>
                      </div>
                    </div>
                    
                    <div className="expertise-item">
                      <div className="expertise-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                        </svg>
                      </div>
                      <div className="expertise-content">
                        <h6>Backend Development</h6>
                        <p>Creating robust server-side solutions and APIs that power modern web applications.</p>
                      </div>
                    </div>
                    
                    <div className="expertise-item">
                      <div className="expertise-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                        </svg>
                      </div>
                      <div className="expertise-content">
                        <h6>UI/UX Design</h6>
                        <p>Designing intuitive user experiences with focus on accessibility and user-centered design.</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="skills-section">
                  <h5>Technical Skills</h5>
                  <div className="skills-categories">
                    <div className="skill-category">
                      <span className="category-label">Frontend</span>
                      <div className="skill-tags">
                        <span className="skill-tag">React</span>
                        <span className="skill-tag">Vue.js</span>
                        <span className="skill-tag">JavaScript</span>
                        <span className="skill-tag">TypeScript</span>
                        <span className="skill-tag">HTML5</span>
                        <span className="skill-tag">CSS3</span>
                        <span className="skill-tag">Sass</span>
                      </div>
                    </div>
                    
                    <div className="skill-category">
                      <span className="category-label">Backend</span>
                      <div className="skill-tags">
                        <span className="skill-tag">Node.js</span>
                        <span className="skill-tag">Python</span>
                        <span className="skill-tag">Express.js</span>
                        <span className="skill-tag">MongoDB</span>
                        <span className="skill-tag">PostgreSQL</span>
                        <span className="skill-tag">REST APIs</span>
                      </div>
                    </div>
                    
                    <div className="skill-category">
                      <span className="category-label">Tools & Others</span>
                      <div className="skill-tags">
                        <span className="skill-tag">Git</span>
                        <span className="skill-tag">Docker</span>
                        <span className="skill-tag">AWS</span>
                        <span className="skill-tag">Figma</span>
                        <span className="skill-tag">Jest</span>
                        <span className="skill-tag">Webpack</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="about-visual-section">
            <div className="about-image-container">
              <div className="about-image-stack">
                <div className="about-img about-img--deep"></div>
                <img 
                  src="/assets/images/selim3.jpeg" 
                  alt="Selim Majekodunmi" 
                  className="about-img about-img--back" 
                />
                <img 
                  src="/assets/images/selim4.jpeg" 
                  alt="Selim Majekodunmi" 
                  className="about-img about-img--front" 
                />
              </div>
              <div className="about-image-overlay">
                <div className="overlay-content">
                  <span className="overlay-text">Always Learning</span>
                  <span className="overlay-subtext">Never Stop Growing</span>
                </div>
              </div>
            </div>
            
            <div className="about-quote">
              <blockquote>
                "The best code is not just functional, but also beautiful and maintainable."
              </blockquote>
              <cite>- My Development Philosophy</cite>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 