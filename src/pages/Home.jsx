import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

function Home() {
  return (
    <div className="home-page">
      <SEO
        title="Investing in Strategic Growth"
        description="Prestige Griffin is a premier advisory firm providing strategic solutions in finance, banking, technology, defense, and commodities trading. Expert insights and innovative strategies for long-term growth."
        canonical="/"
      />

      {/* Hero Section - Modernized */}
      <section className="hero-section-modern">
        <div className="hero-background">
          <div className="hero-gradient"></div>
          <div className="hero-particles">
            <span className="particle particle-1"></span>
            <span className="particle particle-2"></span>
            <span className="particle particle-3"></span>
            <span className="particle particle-4"></span>
            <span className="particle particle-5"></span>
          </div>
          <div className="hero-rings">
            <div className="hero-ring ring-1"></div>
            <div className="hero-ring ring-2"></div>
            <div className="hero-ring ring-3"></div>
          </div>
        </div>
        <div className="hero-content-modern" data-aos="fade-up">
          <span className="hero-badge">Premier Advisory Firm</span>
          <h1 className="hero-title-modern">
            Investing in <span className="text-gradient">Strategic Growth</span>
          </h1>
          <p className="hero-subtitle-modern">
            Empowering businesses through strategic insights, cutting-edge intelligence, and innovative solutions that drive sustainable growth and lasting impact.
          </p>
          <div className="hero-cta-group">
            <Link to="/services" className="hero-cta-primary">
              Explore Our Services <i className="fas fa-arrow-right"></i>
            </Link>
            <Link to="/contact" className="hero-cta-secondary">
              Get in Touch
            </Link>
          </div>
        </div>
        <div className="hero-scroll-indicator" data-aos="fade-up" data-aos-delay="400">
          <span>Scroll to explore</span>
          <div className="scroll-line"></div>
        </div>
      </section>

      {/* About/Intro Section - Modernized */}
      <section className="intro-section-modern">
        <div className="intro-container">
          <div className="intro-header" data-aos="fade-up">
            <span className="intro-label">Who We Are</span>
            <h2 className="intro-title-modern">PRESTIGE GRIFFIN</h2>
            <div className="intro-title-accent"></div>
          </div>

          <div className="intro-content-grid">
            <div className="intro-text" data-aos="fade-right" data-aos-delay="100">
              <p className="intro-description-modern">
                Prestige Griffin is a premier advisory firm specializing in <strong>finance & banking</strong>, <strong>AI & technology</strong>, <strong>defense</strong>, and <strong>commodities trading</strong>. We provide comprehensive strategic solutions spanning from early-stage consulting to full-scale implementation.
              </p>
              <p className="intro-description-modern">
                Our multidisciplinary approach combines deep industry expertise with cutting-edge innovation, ensuring our clients stay ahead in an ever-evolving global landscape.
              </p>
              <Link to="/about" className="intro-cta" data-aos="fade-up" data-aos-delay="200">
                Learn More About Us <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
            <div className="intro-visual" data-aos="fade-left" data-aos-delay="200">
              <div className="intro-visual-card">
                <div className="visual-icon-large">
                  <i className="fas fa-chess-knight"></i>
                </div>
                <h3>Strategic Excellence</h3>
                <p>Transforming vision into measurable success through expert guidance</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Modernized */}
      <section className="stats-section-modern">
        <div className="stats-container">
          <div className="stats-header" data-aos="fade-up">
            <span className="stats-label">Our Impact</span>
            <h2 className="stats-title">Driving Results Worldwide</h2>
          </div>
          <div className="stats-grid-modern">
            <div className="stat-card" data-aos="zoom-in" data-aos-delay="100">
              <div className="stat-icon-wrapper">
                <i className="fas fa-calendar-check"></i>
              </div>
              <div className="stat-number-modern">15+</div>
              <div className="stat-label-modern">Years of Combined Expertise</div>
              <div className="stat-bar"></div>
            </div>
            <div className="stat-card" data-aos="zoom-in" data-aos-delay="200">
              <div className="stat-icon-wrapper">
                <i className="fas fa-handshake"></i>
              </div>
              <div className="stat-number-modern">50+</div>
              <div className="stat-label-modern">Global Partnerships</div>
              <div className="stat-bar"></div>
            </div>
            <div className="stat-card" data-aos="zoom-in" data-aos-delay="300">
              <div className="stat-icon-wrapper">
                <i className="fas fa-briefcase"></i>
              </div>
              <div className="stat-number-modern">4</div>
              <div className="stat-label-modern">Core Service Areas</div>
              <div className="stat-bar"></div>
            </div>
            <div className="stat-card" data-aos="zoom-in" data-aos-delay="400">
              <div className="stat-icon-wrapper">
                <i className="fas fa-globe-americas"></i>
              </div>
              <div className="stat-number-modern">10+</div>
              <div className="stat-label-modern">Countries Served</div>
              <div className="stat-bar"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Modernized */}
      <section className="services-section-modern">
        <div className="services-container">
          <div className="services-header" data-aos="fade-up">
            <span className="services-label">What We Do</span>
            <h2 className="services-title">Strategic Solutions That Drive Success</h2>
            <div className="services-title-accent"></div>
          </div>

          <div className="services-grid-modern">
            <div className="service-card-modern" data-aos="fade-up" data-aos-delay="100">
              <div className="service-card-accent"></div>
              <div className="service-number">01</div>
              <div className="service-icon-modern">
                <i className="fas fa-university"></i>
              </div>
              <h3>Finance & Banking</h3>
              <p>Expert advisory in global finance, investment strategies, and banking solutions tailored to drive growth and ensure long-term stability.</p>
              <div className="service-tags">
                <span>Investment Strategy</span>
                <span>Risk Management</span>
              </div>
            </div>

            <div className="service-card-modern" data-aos="fade-up" data-aos-delay="200">
              <div className="service-card-accent"></div>
              <div className="service-number">02</div>
              <div className="service-icon-modern">
                <i className="fas fa-microchip"></i>
              </div>
              <h3>AI & Technology</h3>
              <p>Driving innovation with digital transformation, AI integration, and scalable technology solutions to create competitive advantages.</p>
              <div className="service-tags">
                <span>Digital Transformation</span>
                <span>AI Integration</span>
              </div>
            </div>

            <div className="service-card-modern" data-aos="fade-up" data-aos-delay="300">
              <div className="service-card-accent"></div>
              <div className="service-number">03</div>
              <div className="service-icon-modern">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h3>Defense</h3>
              <p>Strategic insights and partnerships in defense, ensuring secure and sustainable security investments with ethical considerations.</p>
              <div className="service-tags">
                <span>Security Consulting</span>
                <span>Strategic Defense</span>
              </div>
            </div>

            <div className="service-card-modern" data-aos="fade-up" data-aos-delay="400">
              <div className="service-card-accent"></div>
              <div className="service-number">04</div>
              <div className="service-icon-modern">
                <i className="fas fa-oil-can"></i>
              </div>
              <h3>Commodities</h3>
              <p>Specialized in global commodities trading including oil, gas, and raw materials, delivering value through trusted networks.</p>
              <div className="service-tags">
                <span>Global Trading</span>
                <span>Market Intelligence</span>
              </div>
            </div>
          </div>

          <div className="services-cta" data-aos="fade-up" data-aos-delay="500">
            <Link to="/services" className="services-cta-button">
              Explore All Services <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-section">
        <div className="why-choose-container">
          <div className="why-choose-header" data-aos="fade-up">
            <span className="why-choose-label">Why Prestige Griffin</span>
            <h2 className="why-choose-title">Committed to Excellence and Innovation</h2>
          </div>

          <div className="why-choose-content">
            <div className="why-choose-text" data-aos="fade-right" data-aos-delay="100">
              <p>
                At Prestige Griffin, we are more than advisors—we are partners in your success. With a team of seasoned professionals and industry veterans, we bring decades of combined experience across multiple sectors.
              </p>
              <p>
                Our commitment to excellence, integrity, and innovation drives everything we do. Join us in shaping a future built on strategic growth, responsible innovation, and lasting partnerships.
              </p>
            </div>

            <div className="why-choose-features" data-aos="fade-left" data-aos-delay="200">
              <div className="feature-item">
                <div className="feature-icon">
                  <i className="fas fa-award"></i>
                </div>
                <div className="feature-text">
                  <h4>Industry Expertise</h4>
                  <p>Decades of combined experience across multiple sectors</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">
                  <i className="fas fa-lightbulb"></i>
                </div>
                <div className="feature-text">
                  <h4>Innovative Solutions</h4>
                  <p>Cutting-edge strategies tailored to your needs</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">
                  <i className="fas fa-users"></i>
                </div>
                <div className="feature-text">
                  <h4>Dedicated Partnership</h4>
                  <p>We're invested in your long-term success</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Modernized */}
      <section className="cta-section-modern">
        <div className="cta-background">
          <div className="cta-pattern"></div>
        </div>
        <div className="cta-content-modern" data-aos="fade-up">
          <div className="cta-icon-wrapper">
            <i className="fas fa-rocket"></i>
          </div>
          <h2 className="cta-title-modern">Ready to Transform Your Business?</h2>
          <p className="cta-description-modern">
            Let's discuss how Prestige Griffin can help you achieve your strategic goals and drive sustainable growth.
          </p>
          <div className="cta-buttons">
            <Link to="/contact" className="cta-button-primary">
              Start a Conversation <i className="fas fa-arrow-right"></i>
            </Link>
            <Link to="/about" className="cta-button-outline">
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
