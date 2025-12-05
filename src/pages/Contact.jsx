import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Contact() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Contact Us - Prestige Griffin';
  }, []);

  const handleCardClick = (inquiryType) => {
    navigate('/get-in-touch', { state: { inquiryType } });
  };

  return (
    <section className="intro contact-page">
      {/* Hero Section */}
      <div className="contact-hero" data-aos="fade-up">
        <h2 className="contact-title">How can we help?</h2>
        <p className="contact-subtitle">Let's talk about your project</p>
      </div>

      {/* Interaction Cards */}
      <div className="contact-cards" data-aos="fade-up" data-aos-delay="100">
        <div
          className="contact-card"
          data-aos="fade-up"
          data-aos-delay="150"
          onClick={() => handleCardClick('Business Partnership')}
        >
          <div className="card-icon">
            <i className="fas fa-briefcase"></i>
          </div>
          <h3>Business Partnership</h3>
          <p>Let's make something special together</p>
        </div>

        <div
          className="contact-card"
          data-aos="fade-up"
          data-aos-delay="200"
          onClick={() => handleCardClick('Project Inquiry')}
        >
          <div className="card-icon">
            <i className="fas fa-lightbulb"></i>
          </div>
          <h3>Project Inquiry</h3>
          <p>Have a project in mind? We'd love to hear about it</p>
        </div>

        <div
          className="contact-card"
          data-aos="fade-up"
          data-aos-delay="250"
          onClick={() => handleCardClick('General Questions')}
        >
          <div className="card-icon">
            <i className="fas fa-coffee"></i>
          </div>
          <h3>General Questions</h3>
          <p>Any burning questions? Let's chat</p>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/60126880357"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
        title="Chat with us on WhatsApp"
        data-aos="zoom-in"
        data-aos-delay="300"
      >
        <i className="fab fa-whatsapp"></i>
      </a>
    </section>
  );
}

export default Contact;
