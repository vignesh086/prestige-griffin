import { Link, useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';

function Careers() {
  const navigate = useNavigate();

  const handleApply = (jobDetails) => {
    navigate(`/careers/apply/${encodeURIComponent(jobDetails.title)}`, {
      state: { job: jobDetails }
    });
  };

  return (
    <div className="careers-page">
      <SEO
        title="Career Opportunities"
        description="Join Prestige Griffin and build your future with a dynamic team committed to excellence and innovation. Explore exciting career opportunities in finance, technology, defense, and commodities advisory."
        canonical="/careers"
      />

      {/* Hero Section */}
      <section className="page-hero-section">
        <div className="page-hero-content" data-aos="fade-up">
          <h1 className="page-hero-title">Build Your Future with Us</h1>
          <p className="page-hero-subtitle">
            Join a dynamic team of professionals committed to excellence, innovation, and strategic growth.
          </p>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="why-join-section">
        <div className="why-join-content" data-aos="fade-up" data-aos-delay="100">
          <h2 className="section-title">Why Prestige Griffin?</h2>
          <p className="section-description">
            At Prestige Griffin, we believe that our people are our greatest asset. We foster a culture of collaboration, continuous learning, and professional growth. When you join our team, you become part of a global network of experts dedicated to making a meaningful impact across industries.
          </p>
          <div className="benefits-grid">
            <div className="benefit-card" data-aos="fade-up" data-aos-delay="200">
              <div className="benefit-icon">
                <i className="fas fa-chart-line"></i>
              </div>
              <h3>Career Growth</h3>
              <p>Accelerate your career with ongoing training, mentorship, and advancement opportunities.</p>
            </div>
            <div className="benefit-card" data-aos="fade-up" data-aos-delay="300">
              <div className="benefit-icon">
                <i className="fas fa-users"></i>
              </div>
              <h3>Collaborative Environment</h3>
              <p>Work alongside industry leaders and experts in a supportive, team-oriented culture.</p>
            </div>
            <div className="benefit-card" data-aos="fade-up" data-aos-delay="400">
              <div className="benefit-icon">
                <i className="fas fa-globe"></i>
              </div>
              <h3>Global Impact</h3>
              <p>Contribute to projects that shape industries and drive meaningful change worldwide.</p>
            </div>
            <div className="benefit-card" data-aos="fade-up" data-aos-delay="500">
              <div className="benefit-icon">
                <i className="fas fa-balance-scale"></i>
              </div>
              <h3>Work-Life Balance</h3>
              <p>Enjoy competitive compensation, comprehensive benefits, and flexible work arrangements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="positions-section">
        <h2 className="section-title" data-aos="fade-up">Open Positions</h2>
        <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">
          Explore our current opportunities and find the perfect role to launch or advance your career.
        </p>

        <div className="positions-list">
          {/* Finance & Banking */}
          <div className="position-card" data-aos="fade-up" data-aos-delay="150">
            <div className="position-header">
              <div className="position-title-section">
                <h3>Senior Financial Analyst</h3>
                <p className="position-department">Finance & Banking</p>
              </div>
              <div className="position-meta">
                <span className="position-location"><i className="fas fa-map-marker-alt"></i> Global / Remote</span>
                <span className="position-type"><i className="fas fa-clock"></i> Full-time</span>
              </div>
            </div>
            <p className="position-description">
              Lead financial analysis and strategic planning initiatives for high-profile clients. Requires expertise in global markets, investment strategies, and risk management.
            </p>
            <div className="position-tags">
              <span className="tag">Financial Modeling</span>
              <span className="tag">Investment Strategy</span>
              <span className="tag">Risk Analysis</span>
            </div>
            <button
              className="apply-now-btn"
              onClick={() => handleApply({
                title: 'Senior Financial Analyst',
                department: 'Finance & Banking',
                location: 'Global / Remote',
                type: 'Full-time',
                description: 'Lead financial analysis and strategic planning initiatives for high-profile clients. Requires expertise in global markets, investment strategies, and risk management.',
                requirements: ['Financial Modeling', 'Investment Strategy', 'Risk Analysis'],
                responsibilities: [
                  'Conduct comprehensive financial analysis and modeling for strategic decision-making',
                  'Develop investment strategies aligned with client objectives and risk tolerance',
                  'Monitor global market trends and provide actionable insights',
                  'Prepare detailed financial reports and presentations for stakeholders',
                  'Collaborate with cross-functional teams to optimize financial performance'
                ],
                qualifications: [
                  "Bachelor's degree in Finance, Economics, or related field; MBA preferred",
                  '5+ years of experience in financial analysis or investment banking',
                  'Strong proficiency in financial modeling and valuation techniques',
                  'Excellent analytical and problem-solving skills',
                  'CFA certification is a plus'
                ]
              })}
            >
              Apply Now <i className="fas fa-arrow-right"></i>
            </button>
          </div>

          {/* AI & Technology */}
          <div className="position-card" data-aos="fade-up" data-aos-delay="200">
            <div className="position-header">
              <div className="position-title-section">
                <h3>AI Solutions Architect</h3>
                <p className="position-department">AI & Technology</p>
              </div>
              <div className="position-meta">
                <span className="position-location"><i className="fas fa-map-marker-alt"></i> Hybrid</span>
                <span className="position-type"><i className="fas fa-clock"></i> Full-time</span>
              </div>
            </div>
            <p className="position-description">
              Design and implement cutting-edge AI solutions for clients across diverse industries. Drive digital transformation through innovative technology integration.
            </p>
            <div className="position-tags">
              <span className="tag">Machine Learning</span>
              <span className="tag">Cloud Architecture</span>
              <span className="tag">Digital Transformation</span>
            </div>
            <button
              className="apply-now-btn"
              onClick={() => handleApply({
                title: 'AI Solutions Architect',
                department: 'AI & Technology',
                location: 'Hybrid',
                type: 'Full-time',
                description: 'Design and implement cutting-edge AI solutions for clients across diverse industries. Drive digital transformation through innovative technology integration.',
                requirements: ['Machine Learning', 'Cloud Architecture', 'Digital Transformation'],
                responsibilities: [
                  'Design and architect AI/ML solutions tailored to client business needs',
                  'Lead the implementation of machine learning models and data pipelines',
                  'Evaluate and recommend emerging technologies for client adoption',
                  'Collaborate with stakeholders to define technical requirements and roadmaps',
                  'Mentor team members on AI best practices and methodologies'
                ],
                qualifications: [
                  "Master's degree in Computer Science, AI, or related field",
                  '7+ years of experience in software architecture with 3+ years in AI/ML',
                  'Proficiency in Python, TensorFlow, PyTorch, and cloud platforms (AWS/Azure/GCP)',
                  'Experience with large-scale distributed systems',
                  'Strong communication skills to translate technical concepts for business audiences'
                ]
              })}
            >
              Apply Now <i className="fas fa-arrow-right"></i>
            </button>
          </div>

          {/* Defense */}
          <div className="position-card" data-aos="fade-up" data-aos-delay="250">
            <div className="position-header">
              <div className="position-title-section">
                <h3>Defense Strategy Consultant</h3>
                <p className="position-department">Defense and Arms</p>
              </div>
              <div className="position-meta">
                <span className="position-location"><i className="fas fa-map-marker-alt"></i> On-site</span>
                <span className="position-type"><i className="fas fa-clock"></i> Full-time</span>
              </div>
            </div>
            <p className="position-description">
              Provide strategic advisory services to defense sector clients. Ensure compliance with international regulations while delivering sustainable security solutions.
            </p>
            <div className="position-tags">
              <span className="tag">Strategic Planning</span>
              <span className="tag">Compliance</span>
              <span className="tag">Government Relations</span>
            </div>
            <button
              className="apply-now-btn"
              onClick={() => handleApply({
                title: 'Defense Strategy Consultant',
                department: 'Defense and Arms',
                location: 'On-site',
                type: 'Full-time',
                description: 'Provide strategic advisory services to defense sector clients. Ensure compliance with international regulations while delivering sustainable security solutions.',
                requirements: ['Strategic Planning', 'Compliance', 'Government Relations'],
                responsibilities: [
                  'Develop and implement strategic plans for defense sector clients',
                  'Ensure compliance with international defense regulations and export controls',
                  'Build and maintain relationships with government and military stakeholders',
                  'Conduct risk assessments and provide mitigation strategies',
                  'Advise on sustainable and ethical security solutions'
                ],
                qualifications: [
                  "Bachelor's degree in International Relations, Political Science, or related field",
                  '8+ years of experience in defense consulting or government relations',
                  'Deep understanding of international defense regulations (ITAR, EAR)',
                  'Security clearance or ability to obtain one',
                  'Strong network within government and defense sectors'
                ]
              })}
            >
              Apply Now <i className="fas fa-arrow-right"></i>
            </button>
          </div>

          {/* Commodities */}
          <div className="position-card" data-aos="fade-up" data-aos-delay="300">
            <div className="position-header">
              <div className="position-title-section">
                <h3>Commodities Trading Specialist</h3>
                <p className="position-department">Commodities</p>
              </div>
              <div className="position-meta">
                <span className="position-location"><i className="fas fa-map-marker-alt"></i> Global / Remote</span>
                <span className="position-type"><i className="fas fa-clock"></i> Full-time</span>
              </div>
            </div>
            <p className="position-description">
              Execute and manage commodity trading strategies in oil, gas, and raw materials markets. Build and maintain strategic partnerships across global networks.
            </p>
            <div className="position-tags">
              <span className="tag">Commodities Trading</span>
              <span className="tag">Market Analysis</span>
              <span className="tag">Risk Management</span>
            </div>
            <button
              className="apply-now-btn"
              onClick={() => handleApply({
                title: 'Commodities Trading Specialist',
                department: 'Commodities',
                location: 'Global / Remote',
                type: 'Full-time',
                description: 'Execute and manage commodity trading strategies in oil, gas, and raw materials markets. Build and maintain strategic partnerships across global networks.',
                requirements: ['Commodities Trading', 'Market Analysis', 'Risk Management'],
                responsibilities: [
                  'Execute trading strategies across oil, gas, and raw materials markets',
                  'Analyze market trends, supply-demand dynamics, and pricing patterns',
                  'Develop and maintain relationships with global trading partners',
                  'Manage portfolio risk and optimize trading positions',
                  'Provide market intelligence and recommendations to clients'
                ],
                qualifications: [
                  "Bachelor's degree in Finance, Economics, or related field",
                  '5+ years of experience in commodities trading or brokerage',
                  'Strong understanding of global commodity markets and derivatives',
                  'Proven track record of profitable trading strategies',
                  'Excellent negotiation and relationship-building skills'
                ]
              })}
            >
              Apply Now <i className="fas fa-arrow-right"></i>
            </button>
          </div>

          {/* Business Development */}
          <div className="position-card" data-aos="fade-up" data-aos-delay="350">
            <div className="position-header">
              <div className="position-title-section">
                <h3>Business Development Manager</h3>
                <p className="position-department">Business Development</p>
              </div>
              <div className="position-meta">
                <span className="position-location"><i className="fas fa-map-marker-alt"></i> Hybrid</span>
                <span className="position-type"><i className="fas fa-clock"></i> Full-time</span>
              </div>
            </div>
            <p className="position-description">
              Identify and pursue new business opportunities, build client relationships, and drive revenue growth across all service lines.
            </p>
            <div className="position-tags">
              <span className="tag">Client Relations</span>
              <span className="tag">Strategic Partnerships</span>
              <span className="tag">Revenue Growth</span>
            </div>
            <button
              className="apply-now-btn"
              onClick={() => handleApply({
                title: 'Business Development Manager',
                department: 'Business Development',
                location: 'Hybrid',
                type: 'Full-time',
                description: 'Identify and pursue new business opportunities, build client relationships, and drive revenue growth across all service lines.',
                requirements: ['Client Relations', 'Strategic Partnerships', 'Revenue Growth'],
                responsibilities: [
                  'Identify and pursue new business opportunities across target markets',
                  'Build and nurture long-term client relationships',
                  'Develop and execute strategic partnership initiatives',
                  'Create compelling proposals and presentations for prospective clients',
                  'Collaborate with service teams to ensure successful client onboarding'
                ],
                qualifications: [
                  "Bachelor's degree in Business, Marketing, or related field",
                  '6+ years of experience in business development or sales',
                  'Proven track record of meeting and exceeding revenue targets',
                  'Strong networking and relationship management skills',
                  'Experience in professional services or consulting preferred'
                ]
              })}
            >
              Apply Now <i className="fas fa-arrow-right"></i>
            </button>
          </div>

          {/* Operations */}
          <div className="position-card" data-aos="fade-up" data-aos-delay="400">
            <div className="position-header">
              <div className="position-title-section">
                <h3>Operations Coordinator</h3>
                <p className="position-department">Operations</p>
              </div>
              <div className="position-meta">
                <span className="position-location"><i className="fas fa-map-marker-alt"></i> Remote</span>
                <span className="position-type"><i className="fas fa-clock"></i> Full-time</span>
              </div>
            </div>
            <p className="position-description">
              Support day-to-day operations, coordinate cross-functional projects, and ensure seamless execution of client engagements.
            </p>
            <div className="position-tags">
              <span className="tag">Project Management</span>
              <span className="tag">Process Optimization</span>
              <span className="tag">Team Coordination</span>
            </div>
            <button
              className="apply-now-btn"
              onClick={() => handleApply({
                title: 'Operations Coordinator',
                department: 'Operations',
                location: 'Remote',
                type: 'Full-time',
                description: 'Support day-to-day operations, coordinate cross-functional projects, and ensure seamless execution of client engagements.',
                requirements: ['Project Management', 'Process Optimization', 'Team Coordination'],
                responsibilities: [
                  'Coordinate daily operations and ensure smooth workflow across teams',
                  'Manage project timelines, deliverables, and resource allocation',
                  'Implement and optimize operational processes and procedures',
                  'Facilitate communication between departments and stakeholders',
                  'Track and report on key operational metrics and KPIs'
                ],
                qualifications: [
                  "Bachelor's degree in Business Administration or related field",
                  '3+ years of experience in operations or project coordination',
                  'Strong organizational and multitasking abilities',
                  'Proficiency in project management tools (Asana, Monday, etc.)',
                  'Excellent communication and interpersonal skills'
                ]
              })}
            >
              Apply Now <i className="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </section>

      {/* Application CTA Section */}
      <section className="application-cta-section">
        <div className="application-cta-content" data-aos="fade-up">
          <h2 className="section-title">Ready to Make an Impact?</h2>
          <p className="section-description">
            Don't see a position that matches your expertise? We're always interested in hearing from talented professionals who are passionate about strategic growth and innovation.
          </p>
          <div className="cta-container" data-aos="fade-up" data-aos-delay="200">
            <Link to="/contact" className="cta-button cta-button-large">
              Get in Touch <i className="fas fa-paper-plane"></i>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Careers;
