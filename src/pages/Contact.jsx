import { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const [statusMessage, setStatusMessage] = useState('');
  const [statusColor, setStatusColor] = useState('');

  useEffect(() => {
    document.title = 'Contact Us - Prestige Griffin';
    // Initialize EmailJS
    emailjs.init("SMObHLtyNQbqvGQEU");
  }, []);

  const validateName = (name) => {
    if (!name || name.trim().length === 0) {
      return 'Name is required';
    }
    if (name.trim().length < 2) {
      return 'Name must be at least 2 characters long';
    }
    if (!/^[a-zA-Z\s'-]+$/.test(name)) {
      return 'Name can only contain letters, spaces, hyphens, and apostrophes';
    }
    return null;
  };

  const validateEmail = (email) => {
    if (!email || email.trim().length === 0) {
      return 'Email is required';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return 'Please enter a valid email address';
    }
    return null;
  };

  const validatePhone = (phone) => {
    if (!phone || phone.trim().length === 0) {
      return 'Phone number is required';
    }
    const phoneRegex = /^[\d\s\-\+\(\)]+$/;
    if (!phoneRegex.test(phone)) {
      return 'Please enter a valid phone number (digits, spaces, hyphens, parentheses, and + allowed)';
    }
    const digitsOnly = phone.replace(/\D/g, '');
    if (digitsOnly.length < 10) {
      return 'Phone number must contain at least 10 digits';
    }
    return null;
  };

  const validateMessage = (message) => {
    if (!message || message.trim().length === 0) {
      return 'Message is required';
    }
    if (message.trim().length < 10) {
      return 'Message must be at least 10 characters long';
    }
    return null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const message = formData.get('message');

    // Validate all fields
    const nameError = validateName(name);
    const emailError = validateEmail(email);
    const phoneError = validatePhone(phone);
    const messageError = validateMessage(message);

    // Display first error found
    if (nameError) {
      setStatusMessage(`❌ ${nameError}`);
      setStatusColor("red");
      return;
    }
    if (emailError) {
      setStatusMessage(`❌ ${emailError}`);
      setStatusColor("red");
      return;
    }
    if (phoneError) {
      setStatusMessage(`❌ ${phoneError}`);
      setStatusColor("red");
      return;
    }
    if (messageError) {
      setStatusMessage(`❌ ${messageError}`);
      setStatusColor("red");
      return;
    }

    // All validations passed, send the form
    setStatusMessage("Sending message...");
    setStatusColor("yellow");

    emailjs.sendForm("service_lhua6ns", "template_z53lnqk", e.target)
      .then(() => {
        setStatusMessage("✅ Message sent successfully!");
        setStatusColor("lightgreen");
        e.target.reset();
      })
      .catch((error) => {
        setStatusMessage("❌ Failed to send message. Please try again.");
        setStatusColor("red");
        console.error("EmailJS Error:", error);
      });
  };

  return (
    <section className="intro">
      <h2 className="page-title" data-aos="fade-up">Contact Us</h2>
      <form
        id="contact-form"
        className="contact-form"
        onSubmit={handleSubmit}
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <input type="text" name="name" placeholder="Full Name" required />
        <input type="email" name="email" placeholder="Email Address" required />
        <input type="text" name="phone" placeholder="Phone Number" required />
        <textarea rows="5" name="message" placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
        {statusMessage && (
          <p id="status-message" style={{ color: statusColor }}>
            {statusMessage}
          </p>
        )}
      </form>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/60126880357"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
        title="Chat with us on WhatsApp"
        data-aos="zoom-in"
        data-aos-delay="400"
      >
        <i className="fab fa-whatsapp"></i>
      </a>

      {/* Telegram Floating Button */}
      <a
        href="https://t.me/+60126880357"
        className="telegram-float"
        target="_blank"
        rel="noopener noreferrer"
        title="Chat with us on Telegram"
        data-aos="zoom-in"
        data-aos-delay="500"
      >
        <i className="fab fa-telegram-plane"></i>
      </a>
    </section>
  );
}

export default Contact;
