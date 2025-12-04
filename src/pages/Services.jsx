import { useEffect } from 'react';

function Services() {
  useEffect(() => {
    document.title = 'Services - Prestige Griffin';
  }, []);

  return (
    <section className="intro">
      <h2 className="page-title" data-aos="fade-up">Our Services</h2>
      <div className="services">
        <div className="service-box" data-aos="fade-up" data-aos-delay="100">
          <h3><i className="fas fa-university"></i> Finance & Banking</h3>
          <p>Expert advisory in global finance, investment strategies, and banking solutions tailored to our clients' needs.</p>
        </div>
        <div className="service-box" data-aos="fade-up" data-aos-delay="200">
          <h3><i className="fas fa-microchip"></i> Technology</h3>
          <p>Driving innovation with digital transformation, AI integration, and scalable technology solutions.</p>
        </div>
        <div className="service-box" data-aos="fade-up" data-aos-delay="300">
          <h3><i className="fas fa-shield-alt"></i> Defense & Arms Advisory</h3>
          <p>Providing strategic insights and partnerships in defense and arms, ensuring sustainable security investments.</p>
        </div>
        <div className="service-box" data-aos="fade-up" data-aos-delay="400">
          <h3><i className="fas fa-oil-can"></i> Commodities Trading</h3>
          <p>Specialized in global commodities such as oil, gas, and raw materials, delivering value through trusted trading networks.</p>
        </div>
      </div>
    </section>
  );
}

export default Services;
