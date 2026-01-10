import SEO from '../components/SEO';

function About() {
  return (
    <div className="about-page">
      <SEO
        title="About Us"
        description="Learn about Prestige Griffin's mission, vision, and values. We are a premier advisory firm providing strategic solutions in finance, technology, defense, and commodities with a global reach."
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

      {/* Mission & Vision Section */}
      <section className="mission-vision-section">
        <div className="mission-vision-content" data-aos="fade-up" data-aos-delay="100">
          <h2 className="section-title">Our Mission</h2>
          <p className="section-description">
            At Prestige Griffin, our mission is to empower businesses with actionable insights, cutting-edge intelligence, and innovative strategies that drive sustainable growth and lasting impact. We are committed to delivering excellence in every engagement, helping our clients navigate the complexities of modern industries with confidence and clarity.
          </p>
        </div>
        <div className="mission-vision-content" data-aos="fade-up" data-aos-delay="200">
          <h2 className="section-title">Our Vision</h2>
          <p className="section-description">
            We envision a future where businesses thrive through strategic foresight, responsible innovation, and collaborative partnerships. By bridging the gap between ambition and execution, we aim to be the trusted advisor for organizations seeking to create meaningful value and sustainable prosperity in an ever-evolving global landscape.
          </p>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="who-we-are-section">
        <div className="who-we-are-content" data-aos="fade-up">
          <h2 className="section-title">Who We Are</h2>
          <p className="section-description">
            Prestige Griffin is a premier advisory firm providing strategic solutions in <strong>finance & banking</strong>, <strong>AI & technology</strong>, <strong>defense</strong>, and <strong>commodities trading</strong>. Founded on principles of integrity, innovation, and excellence, we have established ourselves as trusted partners to businesses, governments, and institutions worldwide.
          </p>
          <p className="section-description">
            Our team comprises seasoned professionals with decades of combined experience across multiple sectors. From financial analysts and technology architects to defense strategists and commodities specialists, we bring together diverse expertise to deliver comprehensive, multidisciplinary solutions.
          </p>
          <p className="section-description">
            We understand that every client is unique, with distinct challenges, opportunities, and aspirations. That's why we take a bespoke approach to every engagement, crafting tailored strategies that align with your specific goals and deliver measurable results.
          </p>
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

      {/* Our Approach Section */}
      <section className="approach-section">
        <div className="approach-content" data-aos="fade-up">
          <h2 className="section-title">Our Approach</h2>
          <p className="section-description">
            At Prestige Griffin, we combine deep industry knowledge with analytical rigor and creative problem-solving to deliver solutions that work. Our process is built on three pillars:
          </p>
          <div className="approach-steps">
            <div className="approach-step" data-aos="fade-up" data-aos-delay="100">
              <div className="step-number">01</div>
              <h3>Understand</h3>
              <p>We begin by deeply understanding your business, industry dynamics, challenges, and objectives. Through comprehensive research and stakeholder engagement, we gain the insights needed to craft effective strategies.</p>
            </div>
            <div className="approach-step" data-aos="fade-up" data-aos-delay="200">
              <div className="step-number">02</div>
              <h3>Strategize</h3>
              <p>Leveraging our expertise and analytical capabilities, we develop tailored strategies that address your unique needs. We balance risk and opportunity, ensuring our recommendations are both ambitious and achievable.</p>
            </div>
            <div className="approach-step" data-aos="fade-up" data-aos-delay="300">
              <div className="step-number">03</div>
              <h3>Execute</h3>
              <p>We partner with you throughout implementation, providing hands-on support, monitoring progress, and adapting as needed. Our commitment doesn't end with recommendations—we ensure successful execution and measurable results.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Global Reach Section */}
      <section className="global-reach-section">
        <div className="global-reach-content" data-aos="fade-up">
          <h2 className="section-title">Global Reach, Local Expertise</h2>
          <p className="section-description">
            With a presence across key markets and an extensive network of partners, Prestige Griffin delivers global insights with local relevance. Whether you're navigating international markets, managing cross-border investments, or seeking strategic partnerships, we provide the expertise and connections you need to succeed.
          </p>
          <p className="section-description">
            Our diverse team brings cultural understanding and regional knowledge that enables us to operate effectively across different geographies, regulatory environments, and business landscapes.
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;
