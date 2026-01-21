import { useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';
import HeroBackground from '../components/HeroBackground';

function Contact() {
  const navigate = useNavigate();

  const handleCardClick = (inquiryType) => {
    navigate('/get-in-touch', { state: { inquiryType } });
  };

  return (
    <div className="contact-page-modern">
      <SEO
        title="Contact Us"
        description="Get in touch with Prestige Griffin for strategic advisory solutions in finance, technology, defense and arms, and commodities. Let's discuss how we can help your business grow."
        canonical="/contact"
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" }
        ]}
      />

      {/* Hero Section */}
      <section className="contact-hero-modern">
        <HeroBackground />
        <div className="contact-hero-background">
          <div className="contact-hero-gradient"></div>
          <div className="contact-hero-pattern"></div>
          <div className="contact-hero-glow"></div>
        </div>
        <div className="contact-hero-content" data-aos="fade-up">
          <span className="contact-label">Contact Us</span>
          <h1 className="contact-hero-title">How Can We Help?</h1>
          <div className="contact-title-accent"></div>
          <p className="contact-hero-subtitle">
            Let's talk about your project and explore how we can create something extraordinary together.
          </p>
        </div>
      </section>

      {/* Inquiry Cards Section */}
      <section className="contact-cards-section">
        <div className="contact-cards-container">
          <div className="contact-cards-header" data-aos="fade-up">
            <span className="cards-label">Get Started</span>
            <h2 className="cards-title">Choose Your Inquiry Type</h2>
            <div className="cards-title-accent"></div>
          </div>

          <div className="contact-cards-grid">
            <div
              className="contact-card-modern"
              data-aos="zoom-in"
              data-aos-delay="100"
              onClick={() => handleCardClick('Business Partnership')}
            >
              <div className="card-accent-line"></div>
              <div className="card-number">1</div>
              <div className="card-icon-wrapper">
                <i className="fas fa-handshake"></i>
              </div>
              <div className="card-content">
                <h3>Business Partnership</h3>
                <p>Let's collaborate and create something extraordinary together. We're always open to strategic partnerships.</p>
                <div className="card-cta">
                  <span>Start Discussion</span>
                  <i className="fas fa-arrow-right"></i>
                </div>
              </div>
            </div>

            <div
              className="contact-card-modern"
              data-aos="zoom-in"
              data-aos-delay="200"
              onClick={() => handleCardClick('Project Inquiry')}
            >
              <div className="card-accent-line"></div>
              <div className="card-number">2</div>
              <div className="card-icon-wrapper">
                <i className="fas fa-lightbulb"></i>
              </div>
              <div className="card-content">
                <h3>Project Inquiry</h3>
                <p>Have a project in mind? We'd love to hear about it and explore how we can bring your vision to life.</p>
                <div className="card-cta">
                  <span>Share Your Project</span>
                  <i className="fas fa-arrow-right"></i>
                </div>
              </div>
            </div>

            <div
              className="contact-card-modern"
              data-aos="zoom-in"
              data-aos-delay="300"
              onClick={() => handleCardClick('General Questions')}
            >
              <div className="card-accent-line"></div>
              <div className="card-number">3</div>
              <div className="card-icon-wrapper">
                <i className="fas fa-comments"></i>
              </div>
              <div className="card-content">
                <h3>General Questions</h3>
                <p>Any questions about our services or how we work? Let's chat and find the answers together.</p>
                <div className="card-cta">
                  <span>Ask Us Anything</span>
                  <i className="fas fa-arrow-right"></i>
                </div>
              </div>
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

export default Contact;
