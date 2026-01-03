import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  useEffect(() => {
    document.title = 'Prestige Griffin - Investing in Strategic Growth';
  }, []);

  return (
    <div className="home-page">
      {/* Hero Section - AMAP Style */}
      <section className="hero-section">
        <div className="hero-content" data-aos="fade-up">
          <h1 className="hero-title">Investing in Strategic Growth</h1>
          <p className="hero-subtitle">
            Empowering businesses through strategic insights, cutting-edge intelligence, and innovative solutions that drive sustainable growth and lasting impact.
          </p>
        </div>
      </section>

      {/* About/Intro Section - AMAP Style */}
      <section className="intro-section">
        <div className="intro-content" data-aos="fade-up">
          <h2 className="intro-title">PRESTIGE GRIFFIN</h2>
          <p className="intro-description">
            Prestige Griffin is a premier advisory firm specializing in <strong>finance & banking</strong>, <strong>AI & technology</strong>, <strong>defense</strong>, and <strong>commodities trading</strong>. We provide comprehensive strategic solutions spanning from early-stage consulting to full-scale implementation, empowering businesses to navigate complex markets and achieve sustainable growth.
          </p>
          <p className="intro-description">
            Our multidisciplinary approach combines deep industry expertise with cutting-edge innovation, ensuring our clients stay ahead in an ever-evolving global landscape.
          </p>
          <div className="cta-container" data-aos="fade-up" data-aos-delay="100">
            <Link to="/about" className="cta-button">
              Learn More About Us <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section - AMAP Style */}
      <section className="stats-section">
        <div className="stats-grid">
          <div className="stat-item" data-aos="fade-up" data-aos-delay="100">
            <div className="stat-number">15+</div>
            <div className="stat-label">Years of Combined Expertise</div>
          </div>
          <div className="stat-item" data-aos="fade-up" data-aos-delay="200">
            <div className="stat-number">50+</div>
            <div className="stat-label">Global Partnerships</div>
          </div>
          <div className="stat-item" data-aos="fade-up" data-aos-delay="300">
            <div className="stat-number">4</div>
            <div className="stat-label">Core Service Areas</div>
          </div>
          <div className="stat-item" data-aos="fade-up" data-aos-delay="400">
            <div className="stat-number">10+</div>
            <div className="stat-label">Countries Served</div>
          </div>
        </div>
      </section>

      {/* Services Section - AMAP Style */}
      <section className="services-section">
        <h2 className="section-title" data-aos="fade-up">Strategic Solutions That Drive Success</h2>
        <div className="services-grid">
          <div className="service-box" data-aos="fade-up" data-aos-delay="100">
            <div className="service-icon">
              <i className="fas fa-university"></i>
            </div>
            <h3>Finance & Banking</h3>
            <p>Expert advisory in global finance, investment strategies, and banking solutions tailored to drive growth and ensure long-term stability.</p>
          </div>
          <div className="service-box" data-aos="fade-up" data-aos-delay="200">
            <div className="service-icon">
              <i className="fas fa-microchip"></i>
            </div>
            <h3>AI & Technology</h3>
            <p>Driving innovation with digital transformation, AI integration, and scalable technology solutions to create competitive advantages.</p>
          </div>
          <div className="service-box" data-aos="fade-up" data-aos-delay="300">
            <div className="service-icon">
              <i className="fas fa-shield-alt"></i>
            </div>
            <h3>Defense</h3>
            <p>Strategic insights and partnerships in defense, ensuring secure and sustainable security investments with ethical considerations.</p>
          </div>
          <div className="service-box" data-aos="fade-up" data-aos-delay="400">
            <div className="service-icon">
              <i className="fas fa-oil-can"></i>
            </div>
            <h3>Commodities</h3>
            <p>Specialized in global commodities trading including oil, gas, and raw materials, delivering value through trusted networks.</p>
          </div>
        </div>
        <div className="cta-container" data-aos="fade-up" data-aos-delay="500">
          <Link to="/services" className="cta-button-secondary">
            Explore All Services <i className="fas fa-arrow-right"></i>
          </Link>
        </div>
      </section>

      {/* CTA Section - AMAP Style */}
      <section className="cta-section">
        <div className="cta-content" data-aos="fade-up">
          <h2 className="section-title">Committed to Excellence and Innovation</h2>
          <p className="section-description">
            At Prestige Griffin, we are more than advisors—we are partners in your success. With a team of seasoned professionals and industry veterans, we bring decades of combined experience across multiple sectors. Our commitment to excellence, integrity, and innovation drives everything we do.
          </p>
          <p className="section-description">
            Join us in shaping a future built on strategic growth, responsible innovation, and lasting partnerships.
          </p>
          <div className="cta-container" data-aos="fade-up" data-aos-delay="200">
            <Link to="/contact" className="cta-button">
              Get in Touch <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
