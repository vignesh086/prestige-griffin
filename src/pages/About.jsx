import { useEffect } from 'react';

function About() {
  useEffect(() => {
    document.title = 'About Us - Prestige Griffin';
  }, []);

  return (
    <section className="intro">
      <h2 className="page-title" data-aos="fade-up">About Us</h2>
      <div className="about-content" data-aos="fade-up" data-aos-delay="200">
        <div className="about-intro">
          <p>
            We are a <strong>digital transformation and project delivery firm</strong> specializing in financial services,
            enterprise technology, and business optimization. We work with fintech startups, banks, and enterprises of all
            sizes to accelerate digital implementation, reduce time-to-market, and drive operational excellence.
          </p>
        </div>

        <div className="about-services-overview">
          <p>
            Our services include <strong>end-to-end project delivery</strong>, <strong>agile transformation</strong>,
            <strong>strategic consulting</strong>, <strong>managed services</strong>, and <strong>staff augmentation</strong>.
            Whether you need core banking system implementation, digital channel development, regulatory compliance support,
            or enterprise technology solutions, we deliver results with technical rigor and strategic insight.
          </p>
        </div>

        <div className="about-differentiators">
          <h3 data-aos="fade-up">What Sets Us Apart</h3>
          <p>
            Our commitment to <strong>outcomes over process</strong>. We combine rigorous project governance with agile
            flexibility, deep industry knowledge with cross-functional collaboration, and strategic thinking with hands-on
            execution. We don't just manage projects—we partner with you to unlock value, mitigate risk, and drive
            sustainable growth.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
