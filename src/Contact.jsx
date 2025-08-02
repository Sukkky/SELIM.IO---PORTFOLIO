import React, { useState } from 'react';
import './Contact.css';

// Add Font Awesome CDN link to index.html or import here
const SOCIALS = [
  { name: 'LinkedIn', url: 'https://linkedin.com/', icon: 'fab fa-linkedin-in' },
  { name: 'GitHub', url: 'https://github.com/', icon: 'fab fa-github' },
  { name: 'Twitter', url: 'https://twitter.com/', icon: 'fab fa-twitter' },
  { name: 'Email', url: 'mailto:youremail@example.com', icon: 'fas fa-envelope' },
];

const ICONS = {
  mail: 'fas fa-envelope',
  location: 'fas fa-map-marker-alt',
  phone: 'fas fa-phone',
};

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-background">
        <div className="contact-bg-pattern"></div>
        <div className="contact-bg-glow"></div>
      </div>
      
      <div className="contact-container">
        <div className="contact-header">
          <span className="contact-subtitle">GET IN TOUCH</span>
          <h2 className="contact-title">Let's Work Together</h2>
          <p className="contact-intro">Ready to bring your ideas to life? I'm here to help with your next project.</p>
        </div>

        <div className="contact-content">
          <div className="contact-cards">
            <div className="contact-card contact-card--email">
              <div className="contact-card-icon">
                <i className={ICONS.mail}></i>
              </div>
              <h4>Email</h4>
              <a href="mailto:youremail@example.com">youremail@example.com</a>
              <span className="contact-card-desc">Send me a message anytime</span>
            </div>

            <div className="contact-card contact-card--location">
              <div className="contact-card-icon">
                <i className={ICONS.location}></i>
              </div>
              <h4>Location</h4>
              <span>Birmingham, UK</span>
              <span className="contact-card-desc">Available for remote work</span>
            </div>

            <div className="contact-card contact-card--response">
              <div className="contact-card-icon">
                <span className="response-icon">⚡</span>
              </div>
              <h4>Response Time</h4>
              <span>Within 24 hours</span>
              <span className="contact-card-desc">Usually much faster!</span>
            </div>

            <div className="contact-card contact-card--socials">
              <div className="contact-card-icon">
                <span className="socials-icon">🔗</span>
              </div>
              <h4>Social Links</h4>
              <div className="contact-socials-grid">
                {SOCIALS.map(s => (
                  <a key={s.name} href={s.url} className="contact-social-link" target="_blank" rel="noopener noreferrer" title={s.name}>
                    <i className={s.icon}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <div className="contact-form-card">
              <div className="contact-form-header">
                <h3>Send a Message</h3>
                <p>Tell me about your project and I'll get back to you soon.</p>
              </div>
              
              <form className="contact-form" onSubmit={handleSubmit} autoComplete="off">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className="contact-input"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="contact-input"
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    className="contact-textarea"
                    rows={6}
                    placeholder="Tell me about your project..."
                  />
                </div>
                
                <button type="submit" className="contact-submit-btn">
                  {submitted ? (
                    <>
                      <span className="submit-icon">✓</span>
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <span className="submit-icon">→</span>
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 