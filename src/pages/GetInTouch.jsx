import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import SEO from '../components/SEO';
import HeroBackground from '../components/HeroBackground';
import { trackFormSubmission } from '../utils/analytics';

function GetInTouch() {
  const [statusMessage, setStatusMessage] = useState('');
  const [statusType, setStatusType] = useState('');
  const [phoneValue, setPhoneValue] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Get inquiry type from location state
  const inquiryType = location.state?.inquiryType || 'General Inquiry';

  useEffect(() => {
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
    if (/\d/.test(name)) {
      return 'Name cannot contain numbers';
    }
    return null;
  };

  const validateEmail = (email) => {
    if (!email || email.trim().length === 0) {
      return 'Email is required';
    }
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      return 'Please enter a valid email address';
    }
    if (/\.\./.test(email)) {
      return 'Email cannot contain consecutive dots';
    }
    return null;
  };

  const validatePhone = (phone) => {
    if (!phone || phone.length === 0) {
      return 'Phone number is required';
    }
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

    if (nameError) {
      setStatusMessage(nameError);
      setStatusType("error");
      return;
    }
    if (emailError) {
      setStatusMessage(emailError);
      setStatusType("error");
      return;
    }
    if (phoneError) {
      setStatusMessage(phoneError);
      setStatusType("error");
      return;
    }
    if (messageError) {
      setStatusMessage(messageError);
      setStatusType("error");
      return;
    }

    setIsSubmitting(true);
    setStatusMessage("Sending your message...");
    setStatusType("sending");

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
        setStatusMessage("Message sent successfully! We'll get back to you soon.");
        setStatusType("success");
        trackFormSubmission('contact_form');
        form.reset();
        setPhoneValue('');
        form.removeChild(phoneInput);
        form.removeChild(inquiryInput);
        setIsSubmitting(false);

        setTimeout(() => {
          navigate('/contact');
        }, 2500);
      })
      .catch((error) => {
        setStatusMessage("Failed to send message. Please try again.");
        setStatusType("error");
        console.error("EmailJS Error:", error);
        if (form.contains(phoneInput)) {
          form.removeChild(phoneInput);
        }
        if (form.contains(inquiryInput)) {
          form.removeChild(inquiryInput);
        }
        setIsSubmitting(false);
      });
  };

  const handleBackToContact = () => {
    navigate('/contact');
  };

  return (
    <div className="get-in-touch-modern">
      <SEO
        title="Get In Touch"
        description="Send us a message and let's start a conversation. Whether you have a project inquiry, partnership opportunity, or general question, we'd love to hear from you."
        canonical="/get-in-touch"
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
          { name: "Get In Touch", path: "/get-in-touch" }
        ]}
      />

      {/* Hero Section */}
      <section className="git-hero-section">
        <HeroBackground />
        <div className="git-hero-background">
          <div className="git-hero-gradient"></div>
          <div className="git-hero-pattern"></div>
        </div>
        <div className="git-hero-content" data-aos="fade-up">
          <button className="git-back-button" onClick={handleBackToContact}>
            <i className="fas fa-arrow-left"></i>
            <span>Back</span>
          </button>
          <span className="git-label">{inquiryType}</span>
          <h1 className="git-hero-title">Get In Touch</h1>
          <div className="git-title-accent"></div>
          <p className="git-hero-subtitle">
            Fill out the form below and we'll get back to you as soon as possible.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="git-form-section">
        <div className="git-form-container">
          <div className="git-form-wrapper" data-aos="fade-up">
            <div className="form-header">
              <div className="form-icon">
                <i className="fas fa-paper-plane"></i>
              </div>
              <h2>Send Us a Message</h2>
              <p>We'd love to hear from you</p>
            </div>

            <form
              id="contact-form"
              className="modern-contact-form"
              onSubmit={handleSubmit}
            >
              <div className="form-group">
                <label htmlFor="name">
                  <i className="fas fa-user"></i>
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">
                  <i className="fas fa-envelope"></i>
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email address"
                  required
                />
              </div>

              <div className="form-group">
                <label>
                  <i className="fas fa-phone"></i>
                  Phone Number
                </label>
                <div className="phone-input-modern">
                  <PhoneInput
                    international
                    defaultCountry="MY"
                    value={phoneValue}
                    onChange={setPhoneValue}
                    placeholder="Enter your phone number"
                    className="phone-input-styled"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">
                  <i className="fas fa-comment-alt"></i>
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  name="message"
                  placeholder="Tell us about your project or inquiry..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className={`submit-button-modern ${isSubmitting ? 'submitting' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="spinner"></span>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <i className="fas fa-paper-plane"></i>
                  </>
                )}
              </button>

              {statusMessage && (
                <div className={`status-message-modern ${statusType}`}>
                  {statusType === 'success' && <i className="fas fa-check-circle"></i>}
                  {statusType === 'error' && <i className="fas fa-exclamation-circle"></i>}
                  {statusType === 'sending' && <i className="fas fa-spinner fa-spin"></i>}
                  <span>{statusMessage}</span>
                </div>
              )}
            </form>
          </div>

          {/* Side Info */}
          <div className="git-side-info" data-aos="fade-left" data-aos-delay="200">
            <div className="side-info-card">
              <h3>Quick Response</h3>
              <p>We typically respond within 24 hours during business days.</p>
            </div>
            <div className="side-info-card">
              <h3>Direct Contact</h3>
              <div className="contact-detail">
                <i className="fas fa-envelope"></i>
                <span>info@prestigegriffin.com</span>
              </div>
            </div>
            <div className="side-info-card whatsapp-card">
              <h3>Prefer WhatsApp?</h3>
              <p>Chat with us directly for faster response.</p>
              <a
                href="https://wa.me/60126880357"
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-button"
              >
                <i className="fab fa-whatsapp"></i>
                <span>Open WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

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
    </div>
  );
}

export default GetInTouch;
