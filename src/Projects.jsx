import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "University Student Dashboard Application - Frontend",
      description: "A responsive, user-friendly interface for university students to access academic information, including courses, schedules, assignments, and notifications. Built with React.js and styled using CSS, the dashboard features dynamic components and real-time updates via API integration.",
      technologies: ["React", "CSS3", "Node.js", "chart.js"],
      image: "/assets/images/Birmingham.jpeg",
      liveLink: "https://universitystudentdashboard.vercel.app/",
      githubLink: "https://github.com/Sukkky/UNIVERSITY-STUDENT-DASHBOARD-APPLICATION---FRONTEND",
    },
    {
      id: 2,
      title: "Selim.io Portfolio",
      description: "A modern, personal portfolio website built with React.js and deployed via Vercel. It showcases projects, technical skills, and professional experience with a clean, responsive design and smooth navigation. Optimized for performance and accessibility across all devices.",
      technologies: ["React", "CSS3", "JavaScript", "Framer Motion", "Form Spree"],
      image: "/assets/images/selim.png",
      liveLink: "https://selimio.vercel.app/",
      githubLink: "https://github.com/Sukkky/SELIM.IO---PORTFOLIO",
    },
    {
      id: 3,
      title: "University Student Dashboard Application - Backend",
      description: "A RESTful API server that handles user authentication, data management, and communication between the frontend and the database. Developed with Node.js and Express, it connects to a PostgreSQL database to securely manage student records, course data, and assignment submissions.",
      technologies: ["React", "Express js", "PostgreSql", "Nodemailer", "JavaScript"],
      image: "/assets/images/Backend.png",
      liveLink: "https://universitystudentdashboard.vercel.app/",
      githubLink: "https://github.com/Sukkky/UNIVERSITY-STUDENT-DASHBOARD-APPLICATION---BACKEND",
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website showcasing professional work with smooth animations, contact forms, and SEO optimization.",
      technologies: ["React", "Framer Motion", "EmailJS", "CSS3", "JavaScript"],
      image: "/assets/images/project4.jpg",
      liveLink: "#",
      githubLink: "#",
    },
    {
      id: 5,
      title: "Social Media Dashboard",
      description: "A comprehensive social media management dashboard with analytics, content scheduling, and multi-platform integration.",
      technologies: ["React", "Node.js", "PostgreSQL", "Chart.js", "REST API"],
      image: "/assets/images/project5.jpg",
      liveLink: "#",
      githubLink: "#",
    },
    {
      id: 6,
      title: "Fitness Tracking App",
      description: "A mobile-responsive fitness tracking application with workout planning, progress tracking, and social features for motivation.",
      technologies: ["React Native", "Firebase", "Redux", "Expo", "JavaScript"],
      image: "/assets/images/project6.jpg",
      liveLink: "#",
      githubLink: "#",
    }
  ];

  const [activeIndex, setActiveIndex] = useState(2);
  const [previewProject, setPreviewProject] = useState(null);

  const goLeft = () => setActiveIndex((prev) => (prev > 0 ? prev - 1 : prev));
  const goRight = () => setActiveIndex((prev) => (prev < projects.length - 1 ? prev + 1 : prev));

  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <div className="projects-header">
          <div className="projects-header-content">
            <span className="projects-subtitle">MY WORK</span>
            <h2 className="projects-title">Projects</h2>
            <div className="projects-line"></div>
          </div>
        </div>
        <div className="coverflow-carousel-wrapper">
          <button className="coverflow-arrow left" onClick={goLeft} disabled={activeIndex === 0}>&#8592;</button>
          <div className="coverflow-carousel">
            {projects.map((project, idx) => {
              const offset = idx - activeIndex;
              let className = 'coverflow-card';
              if (offset === 0) className += ' active';
              else if (offset === -1) className += ' left';
              else if (offset === 1) className += ' right';
              else if (offset < -1) className += ' far-left';
              else if (offset > 1) className += ' far-right';
              return (
                <div
                  key={project.id}
                  className={className}
                  style={{
                    '--offset': offset,
                  }}
                  // Remove onClick from the card itself
                >
                  <div className="project-image-container">
                    <img src={project.image} alt={project.title} className="project-image" />
                    <div className="project-overlay">
                      <div className="project-links">
                        <a href={project.liveLink} className="project-link live">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                            <polyline points="15,3 21,3 21,9"/>
                            <line x1="10" y1="14" x2="21" y2="3"/>
                          </svg>
                        </a>
                        <a href={project.githubLink} className="project-link github">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                          </svg>
                        </a>
                        <button className="view-preview-btn" onClick={e => { e.stopPropagation(); setPreviewProject(project); }}>
                          View
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="project-content">
                    <h3 className="project-title">{project.title}</h3>
                    <div className="project-technologies">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <button className="coverflow-arrow right" onClick={goRight} disabled={activeIndex === projects.length - 1}>&#8594;</button>
        </div>

        {/* Project Preview Modal */}
        {previewProject && (
          <div className="project-preview-modal">
            <div className="project-preview-content accent-preview-text">
              <button className="project-preview-exit" onClick={() => setPreviewProject(null)}>&#10005;</button>
              <div className="project-preview-hero">
                <img src={previewProject.image} alt={previewProject.title} className="project-preview-image" />
                <div className="project-preview-overlay">
                  <div className="project-preview-meta">
                    <h2 className="project-preview-title">{previewProject.title}</h2>
                    <p className="project-preview-description">{previewProject.description}</p>
                    <div className="project-preview-actions">
                      <a href={previewProject.liveLink} className="project-link live" target="_blank" rel="noopener noreferrer">
                        Live Demo
                      </a>
                      <a href={previewProject.githubLink} className="project-link github" target="_blank" rel="noopener noreferrer">
                        Code
                      </a>
                    </div>
                  </div>
                  {/* <div className="project-preview-play">
                    <span>&#9654;</span>
                  </div> */}
                </div>
              </div>
            </div>
            <div className="project-preview-backdrop" onClick={() => setPreviewProject(null)}></div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects; 