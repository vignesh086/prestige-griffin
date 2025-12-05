import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

function GetInTouch() {
  const [statusMessage, setStatusMessage] = useState('');
  const [statusColor, setStatusColor] = useState('');
  const [phoneValue, setPhoneValue] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  // Get inquiry type from location state
  const inquiryType = location.state?.inquiryType || 'General Inquiry';

  useEffect(() => {
    document.title = 'Get in Touch - Prestige Griffin';
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
    // Strict validation: only letters, spaces, hyphens, and apostrophes
    // No numbers or special characters allowed
    if (!/^[a-zA-Z\s'-]+$/.test(name)) {
      return 'Name can only contain letters, spaces, hyphens, and apostrophes. Numbers and special characters are not allowed.';
    }
    // Check for numbers explicitly
    if (/\d/.test(name)) {
      return 'Name cannot contain numbers';
    }
    // Check for special characters (excluding allowed ones)
    if (/[^a-zA-Z\s'-]/.test(name)) {
      return 'Name cannot contain special characters (except hyphens and apostrophes)';
    }
    return null;
  };

  const validateEmail = (email) => {
    if (!email || email.trim().length === 0) {
      return 'Email is required';
    }
    // Enhanced email validation with stricter rules
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      return 'Please enter a valid email address (e.g., example@domain.com)';
    }
    // Check for consecutive dots
    if (/\.\./.test(email)) {
      return 'Email cannot contain consecutive dots';
    }
    // Check if email starts or ends with special characters
    if (/^[._-]|[._-]@/.test(email)) {
      return 'Email cannot start with a special character';
    }
    return null;
  };

  const validatePhone = (phone) => {
    if (!phone || phone.length === 0) {
      return 'Phone number is required';
    }
    // Phone value comes from PhoneInput in E.164 format (e.g., +1234567890)
    // Basic validation - the PhoneInput component handles format validation
    if (!phone.startsWith('+')) {
      return 'Please select a country and enter a valid phone number';
    }
    const digitsOnly = phone.replace(/\D/g, '');
    if (digitsOnly.length < 10) {
      return 'Phone number must contain at least 10 digits';
    }
    if (digitsOnly.length > 15) {
      return 'Phone number is too long';
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
    const message = formData.get('message');

    // Validate all fields
    const nameError = validateName(name);
    const emailError = validateEmail(email);
    const phoneError = validatePhone(phoneValue);
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

    // Create temporary inputs for phone and inquiry type
    const form = e.target;
    const phoneInput = document.createElement('input');
    phoneInput.type = 'hidden';
    phoneInput.name = 'phone';
    phoneInput.value = phoneValue;
    form.appendChild(phoneInput);

    const inquiryInput = document.createElement('input');
    inquiryInput.type = 'hidden';
    inquiryInput.name = 'inquiry_type';
    inquiryInput.value = inquiryType;
    form.appendChild(inquiryInput);

    emailjs.sendForm("service_lhua6ns", "template_z53lnqk", form)
      .then(() => {
        setStatusMessage("✅ Message sent successfully!");
        setStatusColor("lightgreen");
        form.reset();
        setPhoneValue('');
        form.removeChild(phoneInput);
        form.removeChild(inquiryInput);

        // Redirect back to contact page after 2 seconds
        setTimeout(() => {
          navigate('/contact');
        }, 2000);
      })
      .catch((error) => {
        setStatusMessage("❌ Failed to send message. Please try again.");
        setStatusColor("red");
        console.error("EmailJS Error:", error);
        if (form.contains(phoneInput)) {
          form.removeChild(phoneInput);
        }
        if (form.contains(inquiryInput)) {
          form.removeChild(inquiryInput);
        }
      });
  };

  const handleBackToContact = () => {
    navigate('/contact');
  };

  return (
    <section className="intro contact-page get-in-touch-page">
      {/* Hero Section */}
      <div className="contact-hero" data-aos="fade-up">
        <button className="back-button" onClick={handleBackToContact}>
          <i className="fas fa-arrow-left"></i> Back
        </button>
        <h2 className="contact-title">Get in Touch</h2>
        <p className="contact-subtitle">{inquiryType}</p>
      </div>

      {/* Contact Form Section */}
      <div className="form-section" data-aos="fade-up" data-aos-delay="100">
        <form
          id="contact-form"
          className="contact-form"
          onSubmit={handleSubmit}
        >
          <input type="text" name="name" placeholder="Full Name" required />
          <input type="email" name="email" placeholder="Email Address" required />
          <div className="phone-input-wrapper">
            <PhoneInput
              international
              defaultCountry="MY"
              value={phoneValue}
              onChange={setPhoneValue}
              placeholder="Phone Number"
              className="phone-input-custom"
              required
            />
          </div>
          <textarea rows="5" name="message" placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
          {statusMessage && (
            <p id="status-message" style={{ color: statusColor }}>
              {statusMessage}
            </p>
          )}
        </form>
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/60126880357"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
        title="Chat with us on WhatsApp"
        data-aos="zoom-in"
        data-aos-delay="200"
      >
        <i className="fab fa-whatsapp"></i>
      </a>
    </section>
  );
}

export default GetInTouch;
