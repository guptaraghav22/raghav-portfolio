import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './ContactForm.css';

const ContactForm = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    from_email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    // Embed sender's email into the message content as a workaround
    const messageWithEmail = `From: ${form.from_email}\n\n${form.message}`;

    try {
      await emailjs.send(
        'service_usel67t', // Replace with your EmailJS service ID
        'template_15fok59', // Replace with your EmailJS template ID
        {
          to_name: 'Raghav Gupta', // Replace with the recipient's name
          from_name: 'Portfolio Contact Form', // You might want to add an input for the user's name
          // Do not send from_email as a separate variable if using this workaround
          message: messageWithEmail, // Send the combined message
        },
        'iZktPrsj4NyUz242l' // Replace with your EmailJS public key
      );

      setSuccess(true);
      setForm({
        from_email: '',
        message: '',
      });
    } catch (error) {
      setError('Failed to send message. Please try again.');
      console.error('Error:', error);
    }

    setLoading(false);
  };

  return (
    <div className="contact-form-container">
      <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          {/* <label htmlFor="email">Your Email</label> */}
          <input
            type="email"
            id="from_email"
            name="from_email"
            value={form.from_email}
            onChange={handleChange}
            required
            placeholder="Enter your email address"
            className="form-input"
          />
        </div>

        <div className="form-group">
          {/* <label htmlFor="message">Message</label> */}
          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            placeholder="Write your message here..."
            rows="6"
            className="form-textarea"
          />
        </div>

        <button type="submit" className="submit-btn" disabled={loading}>
          {loading ? (
            <span className="loading-spinner">
              <span className="spinner"></span>
              Sending...
            </span>
          ) : (
            'Send Message'
          )}
        </button>

        {success && (
          <div className="success-message">
            <span className="success-icon">✓</span>
            <p>Message sent successfully! I'll get back to you soon.</p>
          </div>
        )}

        {error && (
          <div className="error-message">
            <span className="error-icon">!</span>
            <p>{error}</p>
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactForm; 