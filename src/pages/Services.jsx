import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

function Services() {
  return (
    <div className="services-page">
      <SEO
        title="Our Services"
        description="Comprehensive strategic advisory services in Finance & Banking, AI & Technology, Defense and Arms, and Commodities. Tailored solutions to drive sustainable growth and competitive advantage."
        canonical="/services"
      />

      {/* Hero Section */}
      <section className="page-hero-section">
        <div className="page-hero-content" data-aos="fade-up">
          <h1 className="page-hero-title">Our Services</h1>
          <p className="page-hero-subtitle">
            Comprehensive strategic solutions tailored to your industry and objectives.
          </p>
        </div>
      </section>

      {/* Services Overview - Modernized */}
      <section className="services-overview-modern">
        <div className="overview-container">
          <div className="overview-header" data-aos="fade-up">
            <span className="overview-label">What We Offer</span>
            <h2 className="overview-title">End-to-End Advisory Excellence</h2>
            <div className="overview-title-accent"></div>
          </div>
          <div className="overview-text" data-aos="fade-up" data-aos-delay="100">
            <p>
              At Prestige Griffin, we deliver end-to-end advisory services across four core domains: finance & banking, AI & technology, defense and arms, and commodities trading. Our multidisciplinary expertise enables us to address complex challenges, unlock opportunities, and drive sustainable value for our clients.
            </p>
          </div>
          <div className="overview-highlights" data-aos="fade-up" data-aos-delay="200">
            <div className="highlight-item">
              <i className="fas fa-check-circle"></i>
              <span>Tailored Solutions</span>
            </div>
            <div className="highlight-item">
              <i className="fas fa-check-circle"></i>
              <span>Global Expertise</span>
            </div>
            <div className="highlight-item">
              <i className="fas fa-check-circle"></i>
              <span>Proven Results</span>
            </div>
            <div className="highlight-item">
              <i className="fas fa-check-circle"></i>
              <span>Strategic Partnership</span>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services - Modernized */}
      <section className="core-services-section">

        {/* Finance & Banking */}
        <div className="core-service-block" data-aos="fade-up">
          <div className="service-block-header">
            <div className="service-block-icon">
              <i className="fas fa-university"></i>
            </div>
            <div className="service-block-title">
              <span className="service-number">1</span>
              <h2>Finance & Banking</h2>
            </div>
          </div>
          <div className="service-block-intro">
            <p>
              Navigate the complexities of global financial markets with confidence. Our finance and banking practice provides comprehensive advisory services that help clients optimize their financial strategies, manage risk, and achieve their investment objectives.
            </p>
          </div>
          <div className="key-services-header">
            <span className="key-services-label">Key Services</span>
            <div className="key-services-line"></div>
          </div>
          <div className="key-services-grid">
            <div className="key-service-card" data-aos="zoom-in" data-aos-delay="100">
              <div className="key-service-icon">
                <i className="fas fa-chart-pie"></i>
              </div>
              <h4>Investment Strategy & Portfolio Management</h4>
              <p>Develop and execute sophisticated investment strategies tailored to your risk profile and return objectives.</p>
            </div>
            <div className="key-service-card" data-aos="zoom-in" data-aos-delay="150">
              <div className="key-service-icon">
                <i className="fas fa-search-dollar"></i>
              </div>
              <h4>Financial Analysis & Due Diligence</h4>
              <p>Conduct thorough financial assessments, valuations, and due diligence for M&A and investment opportunities.</p>
            </div>
            <div className="key-service-card" data-aos="zoom-in" data-aos-delay="200">
              <div className="key-service-icon">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h4>Risk Management</h4>
              <p>Identify, assess, and mitigate financial risks through advanced modeling and strategic hedging solutions.</p>
            </div>
            <div className="key-service-card" data-aos="zoom-in" data-aos-delay="250">
              <div className="key-service-icon">
                <i className="fas fa-landmark"></i>
              </div>
              <h4>Capital Markets Advisory</h4>
              <p>Access capital markets efficiently through IPOs, debt financing, and structured finance solutions.</p>
            </div>
            <div className="key-service-card" data-aos="zoom-in" data-aos-delay="300">
              <div className="key-service-icon">
                <i className="fas fa-balance-scale"></i>
              </div>
              <h4>Regulatory Compliance</h4>
              <p>Navigate complex regulatory environments with expert guidance on compliance, reporting, and governance.</p>
            </div>
            <div className="key-service-card" data-aos="zoom-in" data-aos-delay="350">
              <div className="key-service-icon">
                <i className="fas fa-coins"></i>
              </div>
              <h4>Treasury & Cash Management</h4>
              <p>Optimize liquidity, working capital, and treasury operations for enhanced financial performance.</p>
            </div>
          </div>
        </div>

        {/* AI & Technology */}
        <div className="core-service-block alternate" data-aos="fade-up">
          <div className="service-block-header">
            <div className="service-block-icon">
              <i className="fas fa-microchip"></i>
            </div>
            <div className="service-block-title">
              <span className="service-number">2</span>
              <h2>AI & Technology</h2>
            </div>
          </div>
          <div className="service-block-intro">
            <p>
              Harness the power of emerging technologies to transform your business. Our technology practice combines deep technical expertise with strategic thinking to deliver innovative solutions that drive digital transformation and competitive advantage.
            </p>
          </div>
          <div className="key-services-header">
            <span className="key-services-label">Key Services</span>
            <div className="key-services-line"></div>
          </div>
          <div className="key-services-grid">
            <div className="key-service-card" data-aos="zoom-in" data-aos-delay="100">
              <div className="key-service-icon">
                <i className="fas fa-robot"></i>
              </div>
              <h4>AI & Machine Learning Implementation</h4>
              <p>Design and deploy AI-powered solutions for automation, predictive analytics, and intelligent decision-making.</p>
            </div>
            <div className="key-service-card" data-aos="zoom-in" data-aos-delay="150">
              <div className="key-service-icon">
                <i className="fas fa-digital-tachograph"></i>
              </div>
              <h4>Digital Transformation Strategy</h4>
              <p>Develop comprehensive roadmaps for digital transformation, encompassing process optimization and technology adoption.</p>
            </div>
            <div className="key-service-card" data-aos="zoom-in" data-aos-delay="200">
              <div className="key-service-icon">
                <i className="fas fa-cloud"></i>
              </div>
              <h4>Cloud Architecture & Migration</h4>
              <p>Design scalable cloud infrastructures and execute seamless migrations to leading cloud platforms.</p>
            </div>
            <div className="key-service-card" data-aos="zoom-in" data-aos-delay="250">
              <div className="key-service-icon">
                <i className="fas fa-chart-bar"></i>
              </div>
              <h4>Data Analytics & Business Intelligence</h4>
              <p>Transform raw data into actionable insights through advanced analytics, visualization, and reporting solutions.</p>
            </div>
            <div className="key-service-card" data-aos="zoom-in" data-aos-delay="300">
              <div className="key-service-icon">
                <i className="fas fa-lock"></i>
              </div>
              <h4>Cybersecurity & Risk Assessment</h4>
              <p>Protect your digital assets with comprehensive security strategies, threat assessments, and incident response.</p>
            </div>
            <div className="key-service-card" data-aos="zoom-in" data-aos-delay="350">
              <div className="key-service-icon">
                <i className="fas fa-microscope"></i>
              </div>
              <h4>Technology Due Diligence</h4>
              <p>Evaluate technology capabilities, architectures, and risks for investment and M&A decisions.</p>
            </div>
          </div>
        </div>

        {/* Defense and Arms */}
        <div className="core-service-block" data-aos="fade-up">
          <div className="service-block-header">
            <div className="service-block-icon">
              <i className="fas fa-shield-alt"></i>
            </div>
            <div className="service-block-title">
              <span className="service-number">3</span>
              <h2>Defense and Arms</h2>
            </div>
          </div>
          <div className="service-block-intro">
            <p>
              Navigate the complex defense and security landscape with strategic guidance grounded in expertise, ethics, and international standards. We provide comprehensive advisory services that balance security imperatives with responsible procurement and compliance.
            </p>
          </div>
          <div className="key-services-header">
            <span className="key-services-label">Key Services</span>
            <div className="key-services-line"></div>
          </div>
          <div className="key-services-grid">
            <div className="key-service-card" data-aos="zoom-in" data-aos-delay="100">
              <div className="key-service-icon">
                <i className="fas fa-chess"></i>
              </div>
              <h4>Defense Strategy & Planning</h4>
              <p>Develop long-term defense strategies, capability assessments, and modernization roadmaps aligned with security objectives.</p>
            </div>
            <div className="key-service-card" data-aos="zoom-in" data-aos-delay="150">
              <div className="key-service-icon">
                <i className="fas fa-file-contract"></i>
              </div>
              <h4>Procurement Advisory</h4>
              <p>Streamline defense procurement processes, vendor selection, and contract negotiation with compliance assurance.</p>
            </div>
            <div className="key-service-card" data-aos="zoom-in" data-aos-delay="200">
              <div className="key-service-icon">
                <i className="fas fa-exclamation-triangle"></i>
              </div>
              <h4>Security Risk Assessment</h4>
              <p>Conduct comprehensive threat assessments, vulnerability analyses, and security planning for critical infrastructure.</p>
            </div>
            <div className="key-service-card" data-aos="zoom-in" data-aos-delay="250">
              <div className="key-service-icon">
                <i className="fas fa-gavel"></i>
              </div>
              <h4>Regulatory Compliance & Ethics</h4>
              <p>Navigate complex export controls, international arms trade regulations, and ethical considerations in defense.</p>
            </div>
            <div className="key-service-card" data-aos="zoom-in" data-aos-delay="300">
              <div className="key-service-icon">
                <i className="fas fa-handshake"></i>
              </div>
              <h4>Strategic Partnerships</h4>
              <p>Facilitate partnerships between defense contractors, government agencies, and international allies.</p>
            </div>
            <div className="key-service-card" data-aos="zoom-in" data-aos-delay="350">
              <div className="key-service-icon">
                <i className="fas fa-satellite"></i>
              </div>
              <h4>Technology Integration</h4>
              <p>Assess and integrate advanced defense technologies, including surveillance, communications, and cyber defense.</p>
            </div>
          </div>
        </div>

        {/* Commodities */}
        <div className="core-service-block alternate" data-aos="fade-up">
          <div className="service-block-header">
            <div className="service-block-icon">
              <i className="fas fa-oil-can"></i>
            </div>
            <div className="service-block-title">
              <span className="service-number">4</span>
              <h2>Commodities</h2>
            </div>
          </div>
          <div className="service-block-intro">
            <p>
              Capitalize on opportunities in global commodities markets with strategic advisory and trading expertise. Our commodities practice provides comprehensive support for trading, sourcing, and risk management across oil, gas, metals, and agricultural products.
            </p>
          </div>
          <div className="key-services-header">
            <span className="key-services-label">Key Services</span>
            <div className="key-services-line"></div>
          </div>
          <div className="key-services-grid">
            <div className="key-service-card" data-aos="zoom-in" data-aos-delay="100">
              <div className="key-service-icon">
                <i className="fas fa-exchange-alt"></i>
              </div>
              <h4>Commodities Trading</h4>
              <p>Execute strategic trades in oil, gas, precious metals, and raw materials through our extensive global network.</p>
            </div>
            <div className="key-service-card" data-aos="zoom-in" data-aos-delay="150">
              <div className="key-service-icon">
                <i className="fas fa-chart-line"></i>
              </div>
              <h4>Market Analysis & Intelligence</h4>
              <p>Access real-time market intelligence, price forecasting, and supply-demand analysis to inform trading decisions.</p>
            </div>
            <div className="key-service-card" data-aos="zoom-in" data-aos-delay="200">
              <div className="key-service-icon">
                <i className="fas fa-truck"></i>
              </div>
              <h4>Supply Chain Optimization</h4>
              <p>Streamline procurement, logistics, and distribution to reduce costs and improve efficiency.</p>
            </div>
            <div className="key-service-card" data-aos="zoom-in" data-aos-delay="250">
              <div className="key-service-icon">
                <i className="fas fa-umbrella"></i>
              </div>
              <h4>Risk Management & Hedging</h4>
              <p>Implement sophisticated hedging strategies to mitigate price volatility and protect margins.</p>
            </div>
            <div className="key-service-card" data-aos="zoom-in" data-aos-delay="300">
              <div className="key-service-icon">
                <i className="fas fa-globe-americas"></i>
              </div>
              <h4>Strategic Sourcing</h4>
              <p>Identify reliable suppliers, negotiate favorable contracts, and build resilient supply chains across global markets.</p>
            </div>
            <div className="key-service-card" data-aos="zoom-in" data-aos-delay="350">
              <div className="key-service-icon">
                <i className="fas fa-leaf"></i>
              </div>
              <h4>Sustainable Commodities</h4>
              <p>Develop and implement responsible sourcing practices that prioritize environmental and social sustainability.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Modernized */}
      <section className="services-cta-modern">
        <div className="services-cta-background">
          <div className="cta-pattern"></div>
        </div>
        <div className="services-cta-content" data-aos="fade-up">
          <div className="cta-icon-wrapper">
            <i className="fas fa-rocket"></i>
          </div>
          <h2>Ready to Transform Your Business?</h2>
          <p>
            Let's discuss how our expertise can help you achieve your strategic objectives and drive sustainable growth.
          </p>
          <div className="cta-buttons">
            <Link to="/contact" className="cta-button-primary">
              Contact Us Today <i className="fas fa-arrow-right"></i>
            </Link>
            <Link to="/about" className="cta-button-outline">
              Learn About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
