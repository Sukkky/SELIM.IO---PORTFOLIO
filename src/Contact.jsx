import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './Contact.css';

// Add Font Awesome CDN link to index.html or import here
const SOCIALS = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/selim-majekodunmi-700028264?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app', icon: 'fab fa-linkedin-in' },
  { name: 'GitHub', url: 'https://github.com/Sukkky', icon: 'fab fa-github' },
  { name: 'Email', url: 'mailto:majekodunselim@gmail.com', icon: 'fas fa-envelope' },
];

const ICONS = {
  mail: 'fas fa-envelope',
  location: 'fas fa-map-marker-alt',
  phone: 'fas fa-phone',
};

const Contact = () => {
  const [state, handleSubmit] = useForm("xdkdpzgj");
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Reset form after successful submission
  React.useEffect(() => {
    if (state.succeeded) {
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => {
        // Reset the form state after showing success message
      }, 3000);
    }
  }, [state.succeeded]);

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
              
              {state.succeeded ? (
                <div className="contact-success">
                  <div className="success-icon">✓</div>
                  <h4>Message Sent Successfully!</h4>
                  <p>Thank you for reaching out. I'll get back to you soon!</p>
                </div>
              ) : (
                <form 
                  className="contact-form" 
                  onSubmit={handleSubmit} 
                  autoComplete="off"
                >
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
                        disabled={state.submitting}
                      />
                      <ValidationError 
                        prefix="Name" 
                        field="name"
                        errors={state.errors}
                        className="validation-error"
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
                        disabled={state.submitting}
                      />
                      <ValidationError 
                        prefix="Email" 
                        field="email"
                        errors={state.errors}
                        className="validation-error"
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
                      disabled={state.submitting}
                    />
                    <ValidationError 
                      prefix="Message" 
                      field="message"
                      errors={state.errors}
                      className="validation-error"
                    />
                  </div>
                  
                  <button 
                    type="submit" 
                    className="contact-submit-btn"
                    disabled={state.submitting}
                  >
                    {state.submitting ? (
                      <>
                        <span className="submit-icon">⏳</span>
                        Sending...
                      </>
                    ) : (
                      <>
                        <span className="submit-icon">→</span>
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 