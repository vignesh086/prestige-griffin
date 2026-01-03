import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Services() {
  useEffect(() => {
    document.title = 'Services - Prestige Griffin';
  }, []);

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="page-hero-section">
        <div className="page-hero-content" data-aos="fade-up">
          <h1 className="page-hero-title">Our Services</h1>
          <p className="page-hero-subtitle">
            Comprehensive strategic solutions tailored to your industry and objectives.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="services-overview-section">
        <div className="services-overview-content" data-aos="fade-up" data-aos-delay="100">
          <p className="section-description">
            At Prestige Griffin, we deliver end-to-end advisory services across four core domains: finance & banking, AI & technology, defense, and commodities trading. Our multidisciplinary expertise enables us to address complex challenges, unlock opportunities, and drive sustainable value for our clients.
          </p>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="detailed-services-section">
        {/* Finance & Banking */}
        <div className="service-detail-card" data-aos="fade-up" data-aos-delay="100">
          <div className="service-detail-header">
            <div className="service-detail-icon">
              <i className="fas fa-university"></i>
            </div>
            <h2>Finance & Banking</h2>
          </div>
          <div className="service-detail-content">
            <p className="service-intro">
              Navigate the complexities of global financial markets with confidence. Our finance and banking practice provides comprehensive advisory services that help clients optimize their financial strategies, manage risk, and achieve their investment objectives.
            </p>
            <h3>Key Services:</h3>
            <ul className="service-list">
              <li><strong>Investment Strategy & Portfolio Management:</strong> Develop and execute sophisticated investment strategies tailored to your risk profile and return objectives.</li>
              <li><strong>Financial Analysis & Due Diligence:</strong> Conduct thorough financial assessments, valuations, and due diligence for M&A, partnerships, and investment opportunities.</li>
              <li><strong>Risk Management:</strong> Identify, assess, and mitigate financial risks through advanced modeling and strategic hedging solutions.</li>
              <li><strong>Capital Markets Advisory:</strong> Access capital markets efficiently through IPOs, debt financing, and structured finance solutions.</li>
              <li><strong>Regulatory Compliance:</strong> Navigate complex regulatory environments with expert guidance on compliance, reporting, and governance.</li>
              <li><strong>Treasury & Cash Management:</strong> Optimize liquidity, working capital, and treasury operations for enhanced financial performance.</li>
            </ul>
          </div>
        </div>

        {/* AI & Technology */}
        <div className="service-detail-card" data-aos="fade-up" data-aos-delay="200">
          <div className="service-detail-header">
            <div className="service-detail-icon">
              <i className="fas fa-microchip"></i>
            </div>
            <h2>AI & Technology</h2>
          </div>
          <div className="service-detail-content">
            <p className="service-intro">
              Harness the power of emerging technologies to transform your business. Our technology practice combines deep technical expertise with strategic thinking to deliver innovative solutions that drive digital transformation and competitive advantage.
            </p>
            <h3>Key Services:</h3>
            <ul className="service-list">
              <li><strong>AI & Machine Learning Implementation:</strong> Design and deploy AI-powered solutions for automation, predictive analytics, and intelligent decision-making.</li>
              <li><strong>Digital Transformation Strategy:</strong> Develop comprehensive roadmaps for digital transformation, encompassing process optimization, technology adoption, and cultural change.</li>
              <li><strong>Cloud Architecture & Migration:</strong> Design scalable cloud infrastructures and execute seamless migrations to leading cloud platforms.</li>
              <li><strong>Data Analytics & Business Intelligence:</strong> Transform raw data into actionable insights through advanced analytics, visualization, and reporting solutions.</li>
              <li><strong>Cybersecurity & Risk Assessment:</strong> Protect your digital assets with comprehensive security strategies, threat assessments, and incident response planning.</li>
              <li><strong>Technology Due Diligence:</strong> Evaluate technology capabilities, architectures, and risks for investment and M&A decisions.</li>
            </ul>
          </div>
        </div>

        {/* Defense and Arms */}
        <div className="service-detail-card" data-aos="fade-up" data-aos-delay="300">
          <div className="service-detail-header">
            <div className="service-detail-icon">
              <i className="fas fa-shield-alt"></i>
            </div>
            <h2>Defense and Arms</h2>
          </div>
          <div className="service-detail-content">
            <p className="service-intro">
              Navigate the complex defense and security landscape with strategic guidance grounded in expertise, ethics, and international standards. We provide comprehensive advisory services that balance security imperatives with responsible procurement and compliance.
            </p>
            <h3>Key Services:</h3>
            <ul className="service-list">
              <li><strong>Defense Strategy & Planning:</strong> Develop long-term defense strategies, capability assessments, and modernization roadmaps aligned with national security objectives.</li>
              <li><strong>Procurement Advisory:</strong> Streamline defense procurement processes, vendor selection, and contract negotiation while ensuring compliance with international regulations.</li>
              <li><strong>Security Risk Assessment:</strong> Conduct comprehensive threat assessments, vulnerability analyses, and security planning for critical infrastructure and operations.</li>
              <li><strong>Regulatory Compliance & Ethics:</strong> Navigate complex export controls, international arms trade regulations, and ethical considerations in defense transactions.</li>
              <li><strong>Strategic Partnerships:</strong> Facilitate partnerships between defense contractors, government agencies, and international allies for collaborative security initiatives.</li>
              <li><strong>Technology Integration:</strong> Assess and integrate advanced defense technologies, including surveillance systems, communications, and cyber defense capabilities.</li>
            </ul>
          </div>
        </div>

        {/* Commodities */}
        <div className="service-detail-card" data-aos="fade-up" data-aos-delay="400">
          <div className="service-detail-header">
            <div className="service-detail-icon">
              <i className="fas fa-oil-can"></i>
            </div>
            <h2>Commodities</h2>
          </div>
          <div className="service-detail-content">
            <p className="service-intro">
              Capitalize on opportunities in global commodities markets with strategic advisory and trading expertise. Our commodities practice provides comprehensive support for trading, sourcing, and risk management across oil, gas, metals, and agricultural products.
            </p>
            <h3>Key Services:</h3>
            <ul className="service-list">
              <li><strong>Commodities Trading:</strong> Execute strategic trades in oil, gas, precious metals, and raw materials through our extensive global network.</li>
              <li><strong>Market Analysis & Intelligence:</strong> Access real-time market intelligence, price forecasting, and supply-demand analysis to inform trading decisions.</li>
              <li><strong>Supply Chain Optimization:</strong> Streamline procurement, logistics, and distribution to reduce costs and improve efficiency.</li>
              <li><strong>Risk Management & Hedging:</strong> Implement sophisticated hedging strategies to mitigate price volatility and protect margins.</li>
              <li><strong>Strategic Sourcing:</strong> Identify reliable suppliers, negotiate favorable contracts, and build resilient supply chains across global markets.</li>
              <li><strong>Sustainable Commodities:</strong> Develop and implement responsible sourcing practices that prioritize environmental and social sustainability.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta-section">
        <div className="services-cta-content" data-aos="fade-up">
          <h2 className="section-title">Ready to Transform Your Business?</h2>
          <p className="section-description">
            Let's discuss how our expertise can help you achieve your strategic objectives and drive sustainable growth.
          </p>
          <div className="cta-container" data-aos="fade-up" data-aos-delay="100">
            <Link to="/contact" className="cta-button cta-button-large">
              Contact Us Today <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
