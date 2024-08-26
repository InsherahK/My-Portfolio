import React, { useState } from 'react';
import './Contact.css';
import { FaLinkedin, FaEnvelope, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const subject = `Contact from ${name}`;
    const body = `Message: ${message}\n\nFrom: ${name}\nEmail: ${email}`;
    const mailtoLink = `mailto:211957@students.au.edu.pk?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="contact">
      <h2>Contact</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Submit</button>
      </form>
      <div className="social-media">
        <a href="https://www.linkedin.com/in/insherah-khan-732ba3267/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="icon" />
          LinkedIn
        </a>
        <a href="mailto:211957@students.au.edu.pk">
          <FaEnvelope className="icon" />
          Email
        </a>
        <a href="https://github.com/InsherahK" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="icon" />
          GitHub
        </a>
      </div>
     
    </section>
  );
};

export default Contact;
