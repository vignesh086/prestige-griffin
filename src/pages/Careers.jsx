import { Link, useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';

function Careers() {
  const navigate = useNavigate();

  // Job postings data for SEO schema
  const jobPostings = [
    {
      title: "Senior Financial Analyst",
      description: "Lead financial analysis and strategic planning initiatives for high-profile clients. Requires expertise in global markets, investment strategies, and risk management.",
      department: "Finance & Banking",
      location: "Global / Remote",
      locationType: "TELECOMMUTE",
      skills: ["Financial Modeling", "Investment Strategy", "Risk Analysis"],
      datePosted: "2025-01-01",
      validThrough: "2025-12-31"
    },
    {
      title: "AI Solutions Architect",
      description: "Design and implement cutting-edge AI solutions for clients across diverse industries. Drive digital transformation through innovative technology integration.",
      department: "AI & Technology",
      location: "Hybrid",
      locationType: "TELECOMMUTE",
      skills: ["Machine Learning", "Cloud Architecture", "Digital Transformation"],
      datePosted: "2025-01-01",
      validThrough: "2025-12-31"
    },
    {
      title: "Defense Strategy Consultant",
      description: "Provide strategic advisory services to defense sector clients. Ensure compliance with international regulations while delivering sustainable security solutions.",
      department: "Defense and Arms",
      location: "On-site",
      locationType: "IN_PERSON",
      skills: ["Strategic Planning", "Compliance", "Government Relations"],
      datePosted: "2025-01-01",
      validThrough: "2025-12-31"
    },
    {
      title: "Commodities Trading Specialist",
      description: "Execute and manage commodity trading strategies in oil, gas, and raw materials markets. Build and maintain strategic partnerships across global networks.",
      department: "Commodities",
      location: "Global / Remote",
      locationType: "TELECOMMUTE",
      skills: ["Commodities Trading", "Market Analysis", "Risk Management"],
      datePosted: "2025-01-01",
      validThrough: "2025-12-31"
    },
    {
      title: "Business Development Manager",
      description: "Identify and pursue new business opportunities, build client relationships, and drive revenue growth across all service lines.",
      department: "Business Development",
      location: "Hybrid",
      locationType: "TELECOMMUTE",
      skills: ["Client Relations", "Strategic Partnerships", "Revenue Growth"],
      datePosted: "2025-01-01",
      validThrough: "2025-12-31"
    },
    {
      title: "Operations Coordinator",
      description: "Support day-to-day operations, coordinate cross-functional projects, and ensure seamless execution of client engagements.",
      department: "Operations",
      location: "Remote",
      locationType: "TELECOMMUTE",
      skills: ["Project Management", "Process Optimization", "Team Coordination"],
      datePosted: "2025-01-01",
      validThrough: "2025-12-31"
    }
  ];

  const handleApply = (jobDetails) => {
    navigate(`/careers/apply/${encodeURIComponent(jobDetails.title)}`, {
      state: { job: jobDetails }
    });
  };

  return (
    <div className="careers-page">
      <SEO
        title="Career Opportunities"
        description="Join Prestige Griffin and build your future with a dynamic team committed to excellence and innovation. Explore exciting career opportunities in finance, technology, defense and arms, and commodities advisory."
        canonical="/careers"
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Careers", path: "/careers" }
        ]}
        jobPostings={jobPostings}
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

      {/* Why Join Us Section - Modernized */}
      <section className="why-join-section-modern">
        <div className="why-join-container">
          <div className="why-join-header" data-aos="fade-up">
            <span className="why-join-label">Join Our Team</span>
            <h2 className="why-join-title">Why Prestige Griffin?</h2>
            <div className="why-join-title-accent"></div>
          </div>
          <p className="why-join-description" data-aos="fade-up" data-aos-delay="100">
            At Prestige Griffin, we believe that our people are our greatest asset. We foster a culture of collaboration, continuous learning, and professional growth. When you join our team, you become part of a global network of experts dedicated to making a meaningful impact across industries.
          </p>
          <div className="benefits-grid-modern">
            <div className="benefit-card-modern" data-aos="zoom-in" data-aos-delay="100">
              <div className="benefit-card-accent"></div>
              <div className="benefit-number">1</div>
              <div className="benefit-icon-modern">
                <i className="fas fa-chart-line"></i>
              </div>
              <h3>Career Growth</h3>
              <p>Accelerate your career with ongoing training, mentorship, and advancement opportunities.</p>
              <div className="benefit-highlights">
                <span><i className="fas fa-check"></i> Mentorship Programs</span>
                <span><i className="fas fa-check"></i> Training & Development</span>
              </div>
            </div>
            <div className="benefit-card-modern" data-aos="zoom-in" data-aos-delay="200">
              <div className="benefit-card-accent"></div>
              <div className="benefit-number">2</div>
              <div className="benefit-icon-modern">
                <i className="fas fa-users"></i>
              </div>
              <h3>Collaborative Environment</h3>
              <p>Work alongside industry leaders and experts in a supportive, team-oriented culture.</p>
              <div className="benefit-highlights">
                <span><i className="fas fa-check"></i> Expert Teams</span>
                <span><i className="fas fa-check"></i> Open Communication</span>
              </div>
            </div>
            <div className="benefit-card-modern" data-aos="zoom-in" data-aos-delay="300">
              <div className="benefit-card-accent"></div>
              <div className="benefit-number">3</div>
              <div className="benefit-icon-modern">
                <i className="fas fa-globe"></i>
              </div>
              <h3>Global Impact</h3>
              <p>Contribute to projects that shape industries and drive meaningful change worldwide.</p>
              <div className="benefit-highlights">
                <span><i className="fas fa-check"></i> International Projects</span>
                <span><i className="fas fa-check"></i> Industry Leadership</span>
              </div>
            </div>
            <div className="benefit-card-modern" data-aos="zoom-in" data-aos-delay="400">
              <div className="benefit-card-accent"></div>
              <div className="benefit-number">4</div>
              <div className="benefit-icon-modern">
                <i className="fas fa-balance-scale"></i>
              </div>
              <h3>Work-Life Balance</h3>
              <p>Enjoy competitive compensation, comprehensive benefits, and flexible work arrangements.</p>
              <div className="benefit-highlights">
                <span><i className="fas fa-check"></i> Flexible Hours</span>
                <span><i className="fas fa-check"></i> Remote Options</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions Section - Modernized */}
      <section className="positions-section-modern">
        <div className="positions-container">
          <div className="positions-header" data-aos="fade-up">
            <span className="positions-label">Opportunities</span>
            <h2 className="positions-title">Open Positions</h2>
            <div className="positions-title-accent"></div>
            <p className="positions-subtitle">
              Explore our current opportunities and find the perfect role to launch or advance your career.
            </p>
          </div>

          <div className="positions-grid">
            {/* Finance & Banking */}
            <div className="position-card-modern" data-aos="fade-up" data-aos-delay="100">
              <div className="position-card-accent"></div>
              <div className="position-icon-wrapper">
                <i className="fas fa-university"></i>
              </div>
              <div className="position-content">
                <div className="position-header-modern">
                  <h3>Senior Financial Analyst</h3>
                  <span className="position-department-badge">Finance & Banking</span>
                </div>
                <div className="position-meta-modern">
                  <span className="meta-item"><i className="fas fa-map-marker-alt"></i> Global / Remote</span>
                  <span className="meta-item"><i className="fas fa-clock"></i> Full-time</span>
                </div>
                <p className="position-description-modern">
                  Lead financial analysis and strategic planning initiatives for high-profile clients. Requires expertise in global markets, investment strategies, and risk management.
                </p>
                <div className="position-tags-modern">
                  <span className="tag-modern">Financial Modeling</span>
                  <span className="tag-modern">Investment Strategy</span>
                  <span className="tag-modern">Risk Analysis</span>
                </div>
                <button
                  className="apply-btn-modern"
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
                  <span>Apply Now</span>
                  <i className="fas fa-arrow-right"></i>
                </button>
              </div>
            </div>

            {/* AI & Technology */}
            <div className="position-card-modern" data-aos="fade-up" data-aos-delay="150">
              <div className="position-card-accent"></div>
              <div className="position-icon-wrapper">
                <i className="fas fa-microchip"></i>
              </div>
              <div className="position-content">
                <div className="position-header-modern">
                  <h3>AI Solutions Architect</h3>
                  <span className="position-department-badge">AI & Technology</span>
                </div>
                <div className="position-meta-modern">
                  <span className="meta-item"><i className="fas fa-map-marker-alt"></i> Hybrid</span>
                  <span className="meta-item"><i className="fas fa-clock"></i> Full-time</span>
                </div>
                <p className="position-description-modern">
                  Design and implement cutting-edge AI solutions for clients across diverse industries. Drive digital transformation through innovative technology integration.
                </p>
                <div className="position-tags-modern">
                  <span className="tag-modern">Machine Learning</span>
                  <span className="tag-modern">Cloud Architecture</span>
                  <span className="tag-modern">Digital Transformation</span>
                </div>
                <button
                  className="apply-btn-modern"
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
                  <span>Apply Now</span>
                  <i className="fas fa-arrow-right"></i>
                </button>
              </div>
            </div>

            {/* Defense */}
            <div className="position-card-modern" data-aos="fade-up" data-aos-delay="200">
              <div className="position-card-accent"></div>
              <div className="position-icon-wrapper">
                <i className="fas fa-shield-alt"></i>
              </div>
              <div className="position-content">
                <div className="position-header-modern">
                  <h3>Defense Strategy Consultant</h3>
                  <span className="position-department-badge">Defense and Arms</span>
                </div>
                <div className="position-meta-modern">
                  <span className="meta-item"><i className="fas fa-map-marker-alt"></i> On-site</span>
                  <span className="meta-item"><i className="fas fa-clock"></i> Full-time</span>
                </div>
                <p className="position-description-modern">
                  Provide strategic advisory services to defense sector clients. Ensure compliance with international regulations while delivering sustainable security solutions.
                </p>
                <div className="position-tags-modern">
                  <span className="tag-modern">Strategic Planning</span>
                  <span className="tag-modern">Compliance</span>
                  <span className="tag-modern">Government Relations</span>
                </div>
                <button
                  className="apply-btn-modern"
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
                  <span>Apply Now</span>
                  <i className="fas fa-arrow-right"></i>
                </button>
              </div>
            </div>

            {/* Commodities */}
            <div className="position-card-modern" data-aos="fade-up" data-aos-delay="250">
              <div className="position-card-accent"></div>
              <div className="position-icon-wrapper">
                <i className="fas fa-oil-can"></i>
              </div>
              <div className="position-content">
                <div className="position-header-modern">
                  <h3>Commodities Trading Specialist</h3>
                  <span className="position-department-badge">Commodities</span>
                </div>
                <div className="position-meta-modern">
                  <span className="meta-item"><i className="fas fa-map-marker-alt"></i> Global / Remote</span>
                  <span className="meta-item"><i className="fas fa-clock"></i> Full-time</span>
                </div>
                <p className="position-description-modern">
                  Execute and manage commodity trading strategies in oil, gas, and raw materials markets. Build and maintain strategic partnerships across global networks.
                </p>
                <div className="position-tags-modern">
                  <span className="tag-modern">Commodities Trading</span>
                  <span className="tag-modern">Market Analysis</span>
                  <span className="tag-modern">Risk Management</span>
                </div>
                <button
                  className="apply-btn-modern"
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
                  <span>Apply Now</span>
                  <i className="fas fa-arrow-right"></i>
                </button>
              </div>
            </div>

            {/* Business Development */}
            <div className="position-card-modern" data-aos="fade-up" data-aos-delay="300">
              <div className="position-card-accent"></div>
              <div className="position-icon-wrapper">
                <i className="fas fa-handshake"></i>
              </div>
              <div className="position-content">
                <div className="position-header-modern">
                  <h3>Business Development Manager</h3>
                  <span className="position-department-badge">Business Development</span>
                </div>
                <div className="position-meta-modern">
                  <span className="meta-item"><i className="fas fa-map-marker-alt"></i> Hybrid</span>
                  <span className="meta-item"><i className="fas fa-clock"></i> Full-time</span>
                </div>
                <p className="position-description-modern">
                  Identify and pursue new business opportunities, build client relationships, and drive revenue growth across all service lines.
                </p>
                <div className="position-tags-modern">
                  <span className="tag-modern">Client Relations</span>
                  <span className="tag-modern">Strategic Partnerships</span>
                  <span className="tag-modern">Revenue Growth</span>
                </div>
                <button
                  className="apply-btn-modern"
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
                  <span>Apply Now</span>
                  <i className="fas fa-arrow-right"></i>
                </button>
              </div>
            </div>

            {/* Operations */}
            <div className="position-card-modern" data-aos="fade-up" data-aos-delay="350">
              <div className="position-card-accent"></div>
              <div className="position-icon-wrapper">
                <i className="fas fa-cogs"></i>
              </div>
              <div className="position-content">
                <div className="position-header-modern">
                  <h3>Operations Coordinator</h3>
                  <span className="position-department-badge">Operations</span>
                </div>
                <div className="position-meta-modern">
                  <span className="meta-item"><i className="fas fa-map-marker-alt"></i> Remote</span>
                  <span className="meta-item"><i className="fas fa-clock"></i> Full-time</span>
                </div>
                <p className="position-description-modern">
                  Support day-to-day operations, coordinate cross-functional projects, and ensure seamless execution of client engagements.
                </p>
                <div className="position-tags-modern">
                  <span className="tag-modern">Project Management</span>
                  <span className="tag-modern">Process Optimization</span>
                  <span className="tag-modern">Team Coordination</span>
                </div>
                <button
                  className="apply-btn-modern"
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
                  <span>Apply Now</span>
                  <i className="fas fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application CTA Section - Modernized */}
      <section className="careers-cta-section-modern">
        <div className="careers-cta-background">
          <div className="careers-cta-gradient"></div>
          <div className="careers-cta-pattern"></div>
        </div>
        <div className="careers-cta-container" data-aos="fade-up">
          <div className="careers-cta-icon-wrapper">
            <i className="fas fa-paper-plane"></i>
          </div>
          <h2 className="careers-cta-title">Ready to Make an Impact?</h2>
          <p className="careers-cta-description">
            Don't see a position that matches your expertise? We're always interested in hearing from talented professionals who are passionate about strategic growth and innovation.
          </p>
          <div className="careers-cta-features">
            <span className="cta-feature"><i className="fas fa-check-circle"></i> Competitive Compensation</span>
            <span className="cta-feature"><i className="fas fa-check-circle"></i> Global Opportunities</span>
            <span className="cta-feature"><i className="fas fa-check-circle"></i> Career Development</span>
          </div>
          <Link to="/contact" className="careers-cta-button" data-aos="zoom-in" data-aos-delay="200">
            <span>Get in Touch</span>
            <i className="fas fa-arrow-right"></i>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Careers;
