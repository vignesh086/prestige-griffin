import { useEffect, useState } from 'react';

const jobsData = [
  {
    id: 1,
    title: 'Senior Financial Analyst',
    department: 'Finance & Banking',
    location: 'Global / Remote',
    type: 'Full-time',
    description: 'Lead financial analysis and strategic planning initiatives for high-profile clients. Requires expertise in global markets, investment strategies, and risk management.',
    responsibilities: [
      'Develop and maintain complex financial models for client portfolios',
      'Conduct comprehensive market research and competitive analysis',
      'Present strategic recommendations to senior leadership and clients',
      'Collaborate with cross-functional teams on investment strategies'
    ],
    requirements: [
      '7+ years of experience in financial analysis or investment banking',
      'MBA or CFA designation preferred',
      'Strong proficiency in financial modeling and data analysis',
      'Excellent communication and presentation skills'
    ],
    tags: ['Financial Modeling', 'Investment Strategy', 'Risk Analysis']
  },
  {
    id: 2,
    title: 'AI Solutions Architect',
    department: 'AI & Technology',
    location: 'Hybrid',
    type: 'Full-time',
    description: 'Design and implement cutting-edge AI solutions for clients across diverse industries. Drive digital transformation through innovative technology integration.',
    responsibilities: [
      'Architect scalable AI/ML solutions for enterprise clients',
      'Lead technical discovery sessions and solution design workshops',
      'Oversee implementation and deployment of AI systems',
      'Stay current with emerging AI technologies and best practices'
    ],
    requirements: [
      '5+ years of experience in AI/ML architecture',
      'Expertise in cloud platforms (AWS, Azure, GCP)',
      'Strong background in machine learning frameworks',
      'Experience with enterprise-scale AI deployments'
    ],
    tags: ['Machine Learning', 'Cloud Architecture', 'Digital Transformation']
  },
  {
    id: 3,
    title: 'Defense Strategy Consultant',
    department: 'Defense and Arms',
    location: 'On-site',
    type: 'Full-time',
    description: 'Provide strategic advisory services to defense sector clients. Ensure compliance with international regulations while delivering sustainable security solutions.',
    responsibilities: [
      'Develop strategic recommendations for defense sector clients',
      'Navigate complex regulatory environments and compliance requirements',
      'Build and maintain relationships with government stakeholders',
      'Lead cross-border project coordination and execution'
    ],
    requirements: [
      '10+ years of experience in defense consulting or government relations',
      'Security clearance or ability to obtain one',
      'Strong understanding of international defense regulations',
      'Proven track record of successful client engagements'
    ],
    tags: ['Strategic Planning', 'Compliance', 'Government Relations']
  },
  {
    id: 4,
    title: 'Commodities Trading Specialist',
    department: 'Commodities',
    location: 'Global / Remote',
    type: 'Full-time',
    description: 'Execute and manage commodity trading strategies in oil, gas, and raw materials markets. Build and maintain strategic partnerships across global networks.',
    responsibilities: [
      'Execute trading strategies across commodity markets',
      'Monitor market trends and identify trading opportunities',
      'Manage risk exposure and maintain portfolio balance',
      'Develop relationships with global trading partners'
    ],
    requirements: [
      '5+ years of experience in commodities trading',
      'Strong analytical and quantitative skills',
      'Deep knowledge of energy and raw materials markets',
      'Proven track record of profitable trading performance'
    ],
    tags: ['Commodities Trading', 'Market Analysis', 'Risk Management']
  },
  {
    id: 5,
    title: 'Business Development Manager',
    department: 'Business Development',
    location: 'Hybrid',
    type: 'Full-time',
    description: 'Identify and pursue new business opportunities, build client relationships, and drive revenue growth across all service lines.',
    responsibilities: [
      'Identify and qualify new business opportunities',
      'Build and maintain strategic client relationships',
      'Develop and present compelling proposals',
      'Collaborate with service teams on client solutions'
    ],
    requirements: [
      '6+ years of B2B business development experience',
      'Proven track record of meeting or exceeding targets',
      'Strong network in financial services or consulting',
      'Excellent negotiation and closing skills'
    ],
    tags: ['Client Relations', 'Strategic Partnerships', 'Revenue Growth']
  },
  {
    id: 6,
    title: 'Operations Coordinator',
    department: 'Operations',
    location: 'Remote',
    type: 'Full-time',
    description: 'Support day-to-day operations, coordinate cross-functional projects, and ensure seamless execution of client engagements.',
    responsibilities: [
      'Coordinate project timelines and deliverables',
      'Facilitate communication across teams and stakeholders',
      'Maintain project documentation and reporting',
      'Identify and implement process improvements'
    ],
    requirements: [
      '3+ years of operations or project coordination experience',
      'Strong organizational and multitasking abilities',
      'Proficiency in project management tools',
      'Excellent written and verbal communication'
    ],
    tags: ['Project Management', 'Process Optimization', 'Team Coordination']
  }
];

const departments = ['All', 'Finance & Banking', 'AI & Technology', 'Defense and Arms', 'Commodities', 'Business Development', 'Operations'];

function Careers() {
  const [expandedJob, setExpandedJob] = useState(null);
  const [selectedDepartment, setSelectedDepartment] = useState('All');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJobForApplication, setSelectedJobForApplication] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    linkedin: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    document.title = 'Careers - Prestige Griffin';
  }, []);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  const toggleJob = (jobId) => {
    setExpandedJob(expandedJob === jobId ? null : jobId);
  };

  const filteredJobs = selectedDepartment === 'All'
    ? jobsData
    : jobsData.filter(job => job.department === selectedDepartment);

  const openApplicationModal = (job) => {
    setSelectedJobForApplication(job);
    setIsModalOpen(true);
    setSubmitSuccess(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedJobForApplication(null);
    setFormData({ name: '', email: '', phone: '', linkedin: '', message: '' });
    setSubmitSuccess(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitSuccess(true);

    // Auto close after success
    setTimeout(() => {
      closeModal();
    }, 2000);
  };

  return (
    <div className="careers-page">
      {/* Hero Section */}
      <section className="careers-hero-section">
        <div className="careers-hero-content" data-aos="fade-up">
          <span className="careers-hero-badge">Join Our Team</span>
          <h1 className="careers-hero-title">Unlock Your Potential</h1>
          <p className="careers-hero-subtitle">
            We're on the search for exceptional talent. Build your future with a team
            committed to excellence, innovation, and strategic growth.
          </p>
          <div className="careers-hero-stats">
            <div className="stat-item">
              <span className="stat-number">50+</span>
              <span className="stat-label">Team Members</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">12</span>
              <span className="stat-label">Countries</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">6</span>
              <span className="stat-label">Open Roles</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="why-join-section">
        <div className="why-join-content" data-aos="fade-up" data-aos-delay="100">
          <h2 className="section-title">Why Prestige Griffin?</h2>
          <p className="section-description">
            At Prestige Griffin, we believe that our people are our greatest asset. We foster a culture of collaboration, continuous learning, and professional growth.
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
        <div className="positions-header" data-aos="fade-up">
          <h2 className="section-title">Open Positions</h2>
          <p className="section-subtitle">
            Explore our current opportunities and find the perfect role to launch or advance your career.
          </p>
        </div>

        {/* Department Filter */}
        <div className="department-filter" data-aos="fade-up" data-aos-delay="100">
          {departments.map((dept) => (
            <button
              key={dept}
              className={`filter-btn ${selectedDepartment === dept ? 'active' : ''}`}
              onClick={() => setSelectedDepartment(dept)}
            >
              {dept}
            </button>
          ))}
        </div>

        {/* Job Listings Accordion */}
        <div className="jobs-accordion">
          {filteredJobs.map((job, index) => (
            <div
              key={job.id}
              className={`job-accordion-item ${expandedJob === job.id ? 'expanded' : ''}`}
              data-aos="fade-up"
              data-aos-delay={150 + (index * 50)}
            >
              <div
                className="job-accordion-header"
                onClick={() => toggleJob(job.id)}
              >
                <div className="job-header-left">
                  <h3 className="job-title">{job.title}</h3>
                  <div className="job-meta-inline">
                    <span className="job-department">{job.department}</span>
                    <span className="job-location">
                      <i className="fas fa-map-marker-alt"></i> {job.location}
                    </span>
                    <span className="job-type">
                      <i className="fas fa-clock"></i> {job.type}
                    </span>
                  </div>
                </div>
                <div className="job-header-right">
                  <span className={`accordion-icon ${expandedJob === job.id ? 'rotated' : ''}`}>
                    <i className="fas fa-chevron-down"></i>
                  </span>
                </div>
              </div>

              <div className={`job-accordion-content ${expandedJob === job.id ? 'show' : ''}`}>
                <div className="job-details">
                  <p className="job-description">{job.description}</p>

                  <div className="job-details-grid">
                    <div className="job-details-section">
                      <h4><i className="fas fa-tasks"></i> Key Responsibilities</h4>
                      <ul>
                        {job.responsibilities.map((resp, idx) => (
                          <li key={idx}>{resp}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="job-details-section">
                      <h4><i className="fas fa-check-circle"></i> Requirements</h4>
                      <ul>
                        {job.requirements.map((req, idx) => (
                          <li key={idx}>{req}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="job-tags">
                    {job.tags.map((tag, idx) => (
                      <span key={idx} className="tag">{tag}</span>
                    ))}
                  </div>

                  <div className="job-actions">
                    <button
                      className="apply-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        openApplicationModal(job);
                      }}
                    >
                      Apply Now <i className="fas fa-arrow-right"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredJobs.length === 0 && (
          <div className="no-jobs-message" data-aos="fade-up">
            <i className="fas fa-search"></i>
            <p>No positions available in this department at the moment.</p>
            <button
              className="reset-filter-btn"
              onClick={() => setSelectedDepartment('All')}
            >
              View All Positions
            </button>
          </div>
        )}
      </section>

      {/* Application CTA Section */}
      <section className="application-cta-section">
        <div className="application-cta-content" data-aos="fade-up">
          <h2 className="section-title">Don't See the Right Fit?</h2>
          <p className="section-description">
            We're always interested in hearing from talented professionals who are passionate
            about strategic growth and innovation. Send us your resume and let's start a conversation.
          </p>
          <button
            className="cta-button cta-button-large"
            onClick={() => openApplicationModal({ title: 'General Application', department: 'Open Application' })}
          >
            Submit Your Resume <i className="fas fa-paper-plane"></i>
          </button>
        </div>
      </section>

      {/* Application Modal */}
      {isModalOpen && (
        <div className="application-modal-overlay" onClick={closeModal}>
          <div className="application-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={closeModal}>
              <i className="fas fa-times"></i>
            </button>

            {!submitSuccess ? (
              <>
                <div className="modal-header">
                  <h2>Apply for Position</h2>
                  <p className="modal-job-title">{selectedJobForApplication?.title}</p>
                  <span className="modal-department">{selectedJobForApplication?.department}</span>
                </div>

                <form onSubmit={handleSubmit} className="application-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="linkedin">LinkedIn Profile</label>
                      <input
                        type="url"
                        id="linkedin"
                        name="linkedin"
                        value={formData.linkedin}
                        onChange={handleInputChange}
                        placeholder="https://linkedin.com/in/yourprofile"
                      />
                    </div>
                  </div>

                  <div className="form-group full-width">
                    <label htmlFor="message">Cover Letter / Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows="5"
                      placeholder="Tell us about yourself and why you're interested in this role..."
                    ></textarea>
                  </div>

                  <div className="form-group full-width file-upload-group">
                    <label>Resume / CV</label>
                    <div className="file-upload-area">
                      <i className="fas fa-cloud-upload-alt"></i>
                      <p>Drag & drop your resume here or <span>browse files</span></p>
                      <small>PDF, DOC, DOCX (Max 5MB)</small>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="submit-application-btn"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <i className="fas fa-spinner fa-spin"></i> Submitting...
                      </>
                    ) : (
                      <>
                        Submit Application <i className="fas fa-paper-plane"></i>
                      </>
                    )}
                  </button>
                </form>
              </>
            ) : (
              <div className="success-message">
                <div className="success-icon">
                  <i className="fas fa-check-circle"></i>
                </div>
                <h2>Application Submitted!</h2>
                <p>Thank you for your interest in joining Prestige Griffin. We'll review your application and get back to you soon.</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Careers;
