import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  useEffect(() => {
    document.title = 'Prestige Griffin - Investing in Strategic Growth';
  }, []);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content" data-aos="fade-up">
          <h1 className="hero-title">Investing in Strategic Growth</h1>
          <p className="hero-tagline">
            A forward-thinking advisory firm committed to delivering exceptional results through strategic insights and innovative solutions.
          </p>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="value-proposition-section">
        <div className="value-content" data-aos="fade-up" data-aos-delay="100">
          <h2 className="section-title">Our Expertise</h2>
          <p className="section-description">
            Prestige Griffin is a premier advisory firm specializing in <strong>finance & banking</strong>, <strong>AI & technology</strong>, <strong>defense</strong>, and <strong>commodities trading</strong>. We provide comprehensive strategic solutions spanning from early-stage consulting to full-scale implementation, empowering businesses to navigate complex markets and achieve sustainable growth.
          </p>
          <p className="section-description">
            Our multidisciplinary approach combines deep industry expertise with cutting-edge innovation, ensuring our clients stay ahead in an ever-evolving global landscape. We collaborate with visionaries to transform ambitious ideas into tangible results.
          </p>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="services-preview-section">
        <h2 className="section-title" data-aos="fade-up">What We Offer</h2>
        <div className="services-grid">
          <div className="service-box" data-aos="fade-up" data-aos-delay="100">
            <div className="service-icon">
              <i className="fas fa-university"></i>
            </div>
            <h3>Finance & Banking</h3>
            <p>Expert advisory in global finance, investment strategies, and banking solutions tailored to our clients' needs. We provide comprehensive financial analysis, risk management, and strategic planning to maximize returns and ensure long-term stability.</p>
          </div>
          <div className="service-box" data-aos="fade-up" data-aos-delay="200">
            <div className="service-icon">
              <i className="fas fa-microchip"></i>
            </div>
            <h3>AI & Technology</h3>
            <p>Driving innovation with digital transformation, AI integration, and scalable technology solutions. Our team leverages emerging technologies to optimize operations, enhance decision-making, and create competitive advantages in the digital age.</p>
          </div>
          <div className="service-box" data-aos="fade-up" data-aos-delay="300">
            <div className="service-icon">
              <i className="fas fa-shield-alt"></i>
            </div>
            <h3>Defense and Arms</h3>
            <p>Providing strategic insights and partnerships in defense and arms, ensuring sustainable security investments. We facilitate responsible procurement, strategic planning, and compliance with international standards while prioritizing ethical considerations.</p>
          </div>
          <div className="service-box" data-aos="fade-up" data-aos-delay="400">
            <div className="service-icon">
              <i className="fas fa-oil-can"></i>
            </div>
            <h3>Commodities</h3>
            <p>Specialized in global commodities such as oil, gas, and raw materials, delivering value through trusted trading networks. Our extensive market knowledge and strategic partnerships enable efficient sourcing, trading, and risk mitigation in volatile markets.</p>
          </div>
        </div>
        <div className="cta-container" data-aos="fade-up" data-aos-delay="500">
          <Link to="/services" className="cta-button">
            Explore Our Services <i className="fas fa-arrow-right"></i>
          </Link>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="about-preview-section">
        <div className="about-preview-content" data-aos="fade-up">
          <h2 className="section-title">Who We Are</h2>
          <p className="section-description">
            At Prestige Griffin, we are more than advisors—we are partners in your success. With a team of seasoned professionals and industry veterans, we bring decades of combined experience across multiple sectors. Our commitment to excellence, integrity, and innovation drives everything we do.
          </p>
          <p className="section-description">
            We pride ourselves on delivering bespoke solutions that balance risk, opportunity, and impact. By understanding the unique challenges and aspirations of each client, we craft strategies that not only meet immediate needs but also pave the way for long-term prosperity.
          </p>
          <div className="cta-container" data-aos="fade-up" data-aos-delay="200">
            <Link to="/about" className="cta-button">
              Learn More About Us <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* Careers CTA Section */}
      <section className="careers-cta-section">
        <div className="careers-content" data-aos="fade-up">
          <h2 className="section-title">Join Our Team</h2>
          <p className="section-description">
            Are you driven by excellence and passionate about making a meaningful impact? At Prestige Griffin, we're always looking for talented individuals who share our vision of creating a future built on strategic growth and responsible innovation.
          </p>
          <p className="section-description">
            Explore exciting career opportunities and become part of a dynamic team that values collaboration, creativity, and continuous learning.
          </p>
          <div className="cta-container" data-aos="fade-up" data-aos-delay="200">
            <Link to="/careers" className="cta-button">
              View Open Positions <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
