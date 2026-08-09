import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <div className="contact-page">
      <h2>Get in Touch</h2>
      <div className="contact-con">
        <div>
          <h3>Let's Connect</h3>
          <p>If you have any questions, want to collaborate, or just want to say hi, feel free to drop a message!</p>
          <div className="contact-links">
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="btn btn-black">GitHub</a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="btn btn-black">LinkedIn</a>
          </div>
        </div>
        
        <form className="contact-form card" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input 
              type="text" 
              id="name" 
              required
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              placeholder="Your Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              required
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              placeholder="your.email@example.com"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea 
              id="message" 
              required
              rows="5"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              placeholder="How can I help you?"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-blue w-full" disabled={!formData.name || !formData.email || !formData.message} style={ (!formData.name || !formData.email || !formData.message) ? { opacity: 0.5, cursor: 'not-allowed' } : {} }>
            {submitted ? 'Message Sent!' : 'Send Message'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact; 