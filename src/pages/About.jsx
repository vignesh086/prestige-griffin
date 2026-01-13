import SEO from '../components/SEO';

function About() {
  return (
    <div className="about-page">
      <SEO
        title="About Us"
        description="Learn about Prestige Griffin's mission, vision, and values. We are a premier advisory firm providing strategic solutions in finance, technology, defense and arms, and commodities with a global reach."
        canonical="/about"
      />

      {/* Hero Section */}
      <section className="page-hero-section">
        <div className="page-hero-content" data-aos="fade-up">
          <h1 className="page-hero-title">About Prestige Griffin</h1>
          <p className="page-hero-subtitle">
            Empowering businesses through strategic insights and innovative solutions.
          </p>
        </div>
      </section>

      {/* Mission & Vision Section - Modernized */}
      <section className="mission-vision-section-modern">
        <div className="mv-card mission-card" data-aos="fade-right" data-aos-delay="100">
          <div className="mv-card-accent"></div>
          <div className="mv-card-content">
            <div className="mv-icon-wrapper">
              <i className="fas fa-bullseye"></i>
            </div>
            <h2 className="mv-title">Our Mission</h2>
            <div className="mv-divider"></div>
            <p className="mv-description">
              At Prestige Griffin, our mission is to empower businesses with actionable insights, cutting-edge intelligence, and innovative strategies that drive sustainable growth and lasting impact. We are committed to delivering excellence in every engagement, helping our clients navigate the complexities of modern industries with confidence and clarity.
            </p>
          </div>
          <div className="mv-card-glow"></div>
        </div>

        <div className="mv-card vision-card" data-aos="fade-left" data-aos-delay="200">
          <div className="mv-card-accent"></div>
          <div className="mv-card-content">
            <div className="mv-icon-wrapper">
              <i className="fas fa-eye"></i>
            </div>
            <h2 className="mv-title">Our Vision</h2>
            <div className="mv-divider"></div>
            <p className="mv-description">
              We envision a future where businesses thrive through strategic foresight, responsible innovation, and collaborative partnerships. By bridging the gap between ambition and execution, we aim to be the trusted advisor for organizations seeking to create meaningful value and sustainable prosperity in an ever-evolving global landscape.
            </p>
          </div>
          <div className="mv-card-glow"></div>
        </div>
      </section>

      {/* Who We Are Section - Modernized */}
      <section className="who-we-are-section-modern">
        <div className="wwa-container" data-aos="fade-up">
          <div className="wwa-header">
            <span className="wwa-label">About Us</span>
            <h2 className="wwa-title">Who We Are</h2>
            <div className="wwa-title-accent"></div>
          </div>

          <div className="wwa-intro">
            <p>
              Prestige Griffin is a premier advisory firm providing strategic solutions across multiple industries. Founded on principles of integrity, innovation, and excellence, we have established ourselves as trusted partners to businesses, governments, and institutions worldwide.
            </p>
          </div>

          <div className="wwa-sectors-grid">
            <div className="wwa-sector-card" data-aos="zoom-in" data-aos-delay="100">
              <div className="sector-icon-ring">
                <i className="fas fa-chart-line"></i>
              </div>
              <h3>Finance & Banking</h3>
              <p>Strategic financial advisory and banking solutions</p>
            </div>
            <div className="wwa-sector-card" data-aos="zoom-in" data-aos-delay="200">
              <div className="sector-icon-ring">
                <i className="fas fa-microchip"></i>
              </div>
              <h3>AI & Technology</h3>
              <p>Cutting-edge tech integration and AI strategies</p>
            </div>
            <div className="wwa-sector-card" data-aos="zoom-in" data-aos-delay="300">
              <div className="sector-icon-ring">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h3>Defense and Arms</h3>
              <p>Security consulting and defense and arms sector expertise</p>
            </div>
            <div className="wwa-sector-card" data-aos="zoom-in" data-aos-delay="400">
              <div className="sector-icon-ring">
                <i className="fas fa-globe-americas"></i>
              </div>
              <h3>Commodities Trading</h3>
              <p>Global commodities market intelligence</p>
            </div>
          </div>

          <div className="wwa-team-info" data-aos="fade-up" data-aos-delay="300">
            <div className="team-info-card">
              <i className="fas fa-users"></i>
              <div className="team-info-text">
                <h4>Expert Team</h4>
                <p>Our team comprises seasoned professionals with decades of combined experience across multiple sectors—from financial analysts and technology architects to defense and arms strategists and commodities specialists.</p>
              </div>
            </div>
            <div className="team-info-card">
              <i className="fas fa-fingerprint"></i>
              <div className="team-info-text">
                <h4>Bespoke Solutions</h4>
                <p>We understand that every client is unique. That's why we take a bespoke approach to every engagement, crafting tailored strategies that align with your specific goals and deliver measurable results.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="values-section">
        <h2 className="section-title" data-aos="fade-up">Our Core Values</h2>
        <div className="values-grid">
          <div className="value-card" data-aos="fade-up" data-aos-delay="100">
            <div className="value-icon">
              <i className="fas fa-handshake"></i>
            </div>
            <h3>Integrity</h3>
            <p>We conduct business with the highest ethical standards, ensuring transparency, honesty, and accountability in all our interactions.</p>
          </div>
          <div className="value-card" data-aos="fade-up" data-aos-delay="200">
            <div className="value-icon">
              <i className="fas fa-lightbulb"></i>
            </div>
            <h3>Innovation</h3>
            <p>We embrace creativity and forward-thinking approaches, constantly seeking new ways to solve complex challenges and create value.</p>
          </div>
          <div className="value-card" data-aos="fade-up" data-aos-delay="300">
            <div className="value-icon">
              <i className="fas fa-award"></i>
            </div>
            <h3>Excellence</h3>
            <p>We are committed to delivering exceptional quality in everything we do, setting the highest standards for ourselves and exceeding client expectations.</p>
          </div>
          <div className="value-card" data-aos="fade-up" data-aos-delay="400">
            <div className="value-icon">
              <i className="fas fa-hands-helping"></i>
            </div>
            <h3>Collaboration</h3>
            <p>We believe in the power of partnership, working closely with clients and stakeholders to achieve shared success and mutual growth.</p>
          </div>
          <div className="value-card" data-aos="fade-up" data-aos-delay="500">
            <div className="value-icon">
              <i className="fas fa-leaf"></i>
            </div>
            <h3>Sustainability</h3>
            <p>We prioritize responsible business practices, ensuring that our solutions create long-term value while respecting environmental and social considerations.</p>
          </div>
          <div className="value-card" data-aos="fade-up" data-aos-delay="600">
            <div className="value-icon">
              <i className="fas fa-graduation-cap"></i>
            </div>
            <h3>Continuous Learning</h3>
            <p>We foster a culture of growth and development, encouraging our team to stay ahead of industry trends and expand their expertise.</p>
          </div>
        </div>
      </section>

      {/* Our Approach Section - Modernized with Timeline */}
      <section className="approach-section-modern">
        <div className="approach-header" data-aos="fade-up">
          <span className="approach-label">How We Work</span>
          <h2 className="approach-title">Our Approach</h2>
          <p className="approach-subtitle">
            We combine deep industry knowledge with analytical rigor and creative problem-solving to deliver solutions that work.
          </p>
        </div>

        <div className="approach-timeline-v2">
          <div className="timeline-step-v2" data-aos="fade-up" data-aos-delay="100">
            <div className="step-number-side">
              <span className="number-text">1</span>
            </div>
            <div className="step-line-container">
              <div className="step-dot"></div>
              <div className="step-line"></div>
            </div>
            <div className="step-content-v2">
              <div className="step-header-v2">
                <div className="step-icon-v2">
                  <i className="fas fa-search"></i>
                </div>
                <h3>Understand</h3>
              </div>
              <p>We begin by deeply understanding your business, industry dynamics, challenges, and objectives. Through comprehensive research and stakeholder engagement, we gain the insights needed to craft effective strategies.</p>
              <div className="step-highlights-v2">
                <span><i className="fas fa-check"></i> Deep Discovery</span>
                <span><i className="fas fa-check"></i> Stakeholder Engagement</span>
                <span><i className="fas fa-check"></i> Industry Analysis</span>
              </div>
            </div>
          </div>

          <div className="timeline-step-v2" data-aos="fade-up" data-aos-delay="200">
            <div className="step-number-side">
              <span className="number-text">2</span>
            </div>
            <div className="step-line-container">
              <div className="step-dot"></div>
              <div className="step-line"></div>
            </div>
            <div className="step-content-v2">
              <div className="step-header-v2">
                <div className="step-icon-v2">
                  <i className="fas fa-chess"></i>
                </div>
                <h3>Strategize</h3>
              </div>
              <p>Leveraging our expertise and analytical capabilities, we develop tailored strategies that address your unique needs. We balance risk and opportunity, ensuring our recommendations are both ambitious and achievable.</p>
              <div className="step-highlights-v2">
                <span><i className="fas fa-check"></i> Custom Solutions</span>
                <span><i className="fas fa-check"></i> Risk Assessment</span>
                <span><i className="fas fa-check"></i> Strategic Planning</span>
              </div>
            </div>
          </div>

          <div className="timeline-step-v2" data-aos="fade-up" data-aos-delay="300">
            <div className="step-number-side">
              <span className="number-text">3</span>
            </div>
            <div className="step-line-container">
              <div className="step-dot"></div>
              <div className="step-line last"></div>
            </div>
            <div className="step-content-v2">
              <div className="step-header-v2">
                <div className="step-icon-v2">
                  <i className="fas fa-rocket"></i>
                </div>
                <h3>Execute</h3>
              </div>
              <p>We partner with you throughout implementation, providing hands-on support, monitoring progress, and adapting as needed. Our commitment doesn't end with recommendations—we ensure successful execution and measurable results.</p>
              <div className="step-highlights-v2">
                <span><i className="fas fa-check"></i> Hands-on Support</span>
                <span><i className="fas fa-check"></i> Progress Monitoring</span>
                <span><i className="fas fa-check"></i> Measurable Results</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Reach Section - Modernized */}
      <section className="global-reach-section-modern">
        <div className="gr-container">
          <div className="gr-header" data-aos="fade-up">
            <span className="gr-label">Worldwide Presence</span>
            <h2 className="gr-title">Global Reach, Local Expertise</h2>
            <div className="gr-title-accent"></div>
          </div>

          <div className="gr-content-wrapper">
            <div className="gr-main-content" data-aos="fade-right" data-aos-delay="100">
              <div className="gr-globe-visual">
                <div className="globe-ring globe-ring-1"></div>
                <div className="globe-ring globe-ring-2"></div>
                <div className="globe-ring globe-ring-3"></div>
                <div className="globe-icon-wrapper">
                  <i className="fas fa-globe"></i>
                </div>
                <div className="globe-dots">
                  <span className="globe-dot dot-1"></span>
                  <span className="globe-dot dot-2"></span>
                  <span className="globe-dot dot-3"></span>
                  <span className="globe-dot dot-4"></span>
                  <span className="globe-dot dot-5"></span>
                </div>
              </div>
              <div className="gr-description">
                <p>
                  With a presence across key markets and an extensive network of partners, Prestige Griffin delivers global insights with local relevance. Whether you're navigating international markets, managing cross-border investments, or seeking strategic partnerships, we provide the expertise and connections you need to succeed.
                </p>
              </div>
            </div>

            <div className="gr-features-grid" data-aos="fade-left" data-aos-delay="200">
              <div className="gr-feature-card">
                <div className="gr-feature-icon">
                  <i className="fas fa-network-wired"></i>
                </div>
                <h3>Global Network</h3>
                <p>Extensive partnerships across key international markets and financial centers</p>
              </div>
              <div className="gr-feature-card">
                <div className="gr-feature-icon">
                  <i className="fas fa-exchange-alt"></i>
                </div>
                <h3>Cross-Border Expertise</h3>
                <p>Seamless navigation of international regulations and investment landscapes</p>
              </div>
              <div className="gr-feature-card">
                <div className="gr-feature-icon">
                  <i className="fas fa-language"></i>
                </div>
                <h3>Cultural Understanding</h3>
                <p>Diverse team with regional knowledge and cultural intelligence</p>
              </div>
              <div className="gr-feature-card">
                <div className="gr-feature-icon">
                  <i className="fas fa-handshake"></i>
                </div>
                <h3>Strategic Partnerships</h3>
                <p>Strong relationships with local experts and industry leaders worldwide</p>
              </div>
            </div>
          </div>

          <div className="gr-stats-bar" data-aos="fade-up" data-aos-delay="300">
            <div className="gr-stat">
              <span className="gr-stat-number">50+</span>
              <span className="gr-stat-label">Countries Served</span>
            </div>
            <div className="gr-stat-divider"></div>
            <div className="gr-stat">
              <span className="gr-stat-number">200+</span>
              <span className="gr-stat-label">Global Partners</span>
            </div>
            <div className="gr-stat-divider"></div>
            <div className="gr-stat">
              <span className="gr-stat-number">15+</span>
              <span className="gr-stat-label">Years Experience</span>
            </div>
            <div className="gr-stat-divider"></div>
            <div className="gr-stat">
              <span className="gr-stat-number">24/7</span>
              <span className="gr-stat-label">Global Support</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
