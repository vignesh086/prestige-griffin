import { useEffect } from 'react';

function About() {
  useEffect(() => {
    document.title = 'About Us - Prestige Griffin';
  }, []);

  return (
    <section className="intro">
      <h2 className="page-title" data-aos="fade-up">About Us</h2>
      <div className="about-content" data-aos="fade-up" data-aos-delay="200">
        <p>
          Prestige Griffin is a premier advisory firm providing strategic solutions in finance, banking, technology, defense, and commodities trading.
          Our mission is to empower businesses with insights, intelligence, and innovative strategies that drive long-term growth and sustainable results.
        </p>
        <p>
          With a team of experienced professionals, we leverage global expertise to help our clients navigate complex industries and achieve their strategic objectives.
          We pride ourselves on delivering bespoke solutions that balance risk, opportunity, and impact.
        </p>
      </div>
    </section>
  );
}

export default About;
