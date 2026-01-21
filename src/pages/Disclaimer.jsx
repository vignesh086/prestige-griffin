import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import HeroBackground from '../components/HeroBackground';

function Disclaimer() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="legal-page">
      <SEO
        title="Disclaimer"
        description="Important disclaimers regarding Prestige Griffin's website content and advisory services. Read our legal notices and limitations."
        canonical="/disclaimer"
        noindex={true}
      />
      <section className="legal-hero-section">
        <HeroBackground />
        <div className="legal-hero-content" data-aos="fade-up">
          <h1 className="legal-hero-title">Disclaimer</h1>
          <p className="legal-hero-subtitle">Last Updated: January 2025</p>
        </div>
      </section>

      <section className="legal-content-section">
        <div className="legal-content-container" data-aos="fade-up">

          <div className="legal-section">
            <h2>1. General Disclaimer</h2>
            <p>
              The information provided on this website and through Prestige Griffin's services is for
              general informational and educational purposes only. While we strive to provide accurate,
              up-to-date, and reliable information, we make no representations or warranties of any kind,
              express or implied, about the completeness, accuracy, reliability, suitability, or
              availability of the information, products, services, or related graphics contained on
              this website.
            </p>
            <p>
              Any reliance you place on such information is strictly at your own risk. Prestige Griffin
              shall not be liable for any loss or damage, including without limitation, indirect or
              consequential loss or damage, arising from the use of information provided on this website
              or through our services.
            </p>
          </div>

          <div className="legal-section">
            <h2>2. Professional Advice Disclaimer</h2>
            <p>
              The content on this website does not constitute professional advice. Our strategic advisory
              services are tailored to individual client needs and circumstances. Information presented
              on this website should not be considered as:
            </p>
            <ul>
              <li><strong>Financial Advice:</strong> Nothing on this website constitutes financial,
              investment, or tax advice. Always consult with qualified financial professionals before
              making investment decisions.</li>
              <li><strong>Legal Advice:</strong> Information provided is not a substitute for legal
              counsel. Consult with qualified legal professionals for specific legal matters.</li>
              <li><strong>Business Advice:</strong> General information should not replace professional
              business consulting tailored to your specific situation.</li>
              <li><strong>Technical Advice:</strong> Technology-related content is for informational
              purposes and should not replace expert technical consultation.</li>
            </ul>
          </div>

          <div className="legal-section">
            <h2>3. No Guarantee of Results</h2>
            <p>
              While Prestige Griffin is committed to delivering high-quality advisory services, we
              cannot and do not guarantee specific results or outcomes. Success depends on numerous
              factors beyond our control, including but not limited to:
            </p>
            <ul>
              <li>Market conditions and economic factors</li>
              <li>Client implementation of recommendations</li>
              <li>Regulatory and political environments</li>
              <li>Competitive landscape</li>
              <li>Timing and execution of strategies</li>
              <li>Third-party actions and decisions</li>
            </ul>
            <p>
              Past performance or case studies referenced on this website are not indicative of future
              results. Each client engagement is unique, and outcomes may vary significantly.
            </p>
          </div>

          <div className="legal-section">
            <h2>4. Investment Disclaimer</h2>
            <p>
              Any references to investments, securities, commodities, or financial instruments on this
              website are for informational purposes only and do not constitute an offer, solicitation,
              or recommendation to buy, sell, or hold any investment product.
            </p>
            <p>
              Investments involve risk, including the potential loss of principal. Before making any
              investment decisions, you should:
            </p>
            <ul>
              <li>Carefully consider your investment objectives and risk tolerance</li>
              <li>Consult with qualified financial advisors</li>
              <li>Review all relevant offering documents and disclosures</li>
              <li>Understand that past performance does not guarantee future results</li>
            </ul>
            <p>
              Prestige Griffin does not provide investment management services or act as a registered
              investment advisor unless explicitly stated in a separate engagement agreement.
            </p>
          </div>

          <div className="legal-section">
            <h2>5. Defense and Security Services Disclaimer</h2>
            <p>
              Our defense and security consulting services are subject to all applicable laws,
              regulations, and export controls. Information on this website regarding defense-related
              services:
            </p>
            <ul>
              <li>Does not constitute an offer to provide controlled goods or services</li>
              <li>Is subject to applicable export control regulations (including ITAR, EAR, and local laws)</li>
              <li>Requires proper licensing and governmental approvals where applicable</li>
              <li>Is provided only to eligible entities and individuals</li>
            </ul>
            <p>
              Engagement in defense-related services requires verification of eligibility and compliance
              with all applicable regulations.
            </p>
          </div>

          <div className="legal-section">
            <h2>6. Third-Party Content and Links</h2>
            <p>
              This website may contain links to external websites, references to third-party content,
              or information about third-party products and services. These references are provided
              for convenience only and do not imply:
            </p>
            <ul>
              <li>Endorsement or approval of the third party or their products/services</li>
              <li>Any partnership, affiliation, or sponsorship relationship</li>
              <li>Responsibility for the accuracy of third-party content</li>
              <li>Liability for any damages arising from third-party websites or services</li>
            </ul>
            <p>
              We encourage you to review the terms, conditions, and privacy policies of any third-party
              websites you visit.
            </p>
          </div>

          <div className="legal-section">
            <h2>7. Technology and AI Services Disclaimer</h2>
            <p>
              Our AI and technology advisory services involve emerging technologies that may carry
              inherent risks and uncertainties. Please note:
            </p>
            <ul>
              <li>AI and machine learning systems may produce unexpected or imperfect results</li>
              <li>Technology implementations require ongoing maintenance and updates</li>
              <li>Regulatory frameworks for emerging technologies continue to evolve</li>
              <li>Integration with existing systems may present unforeseen challenges</li>
              <li>Data quality significantly impacts AI/ML outcomes</li>
            </ul>
            <p>
              Technology recommendations are based on current best practices and available information
              at the time of engagement.
            </p>
          </div>

          <div className="legal-section">
            <h2>8. Forward-Looking Statements</h2>
            <p>
              This website may contain forward-looking statements, projections, or forecasts that are
              based on current expectations and assumptions. These statements are subject to risks and
              uncertainties that could cause actual results to differ materially from those expressed
              or implied.
            </p>
            <p>
              Forward-looking statements should not be relied upon as predictions of future events.
              We undertake no obligation to update or revise any forward-looking statements.
            </p>
          </div>

          <div className="legal-section">
            <h2>9. Testimonials and Case Studies</h2>
            <p>
              Any testimonials, success stories, or case studies presented on this website represent
              individual experiences and results. These examples:
            </p>
            <ul>
              <li>Are not guarantees of similar outcomes for other clients</li>
              <li>May have been edited for clarity or length</li>
              <li>Reflect specific circumstances that may not apply to your situation</li>
              <li>Should not be the sole basis for engaging our services</li>
            </ul>
          </div>

          <div className="legal-section">
            <h2>10. Website Availability</h2>
            <p>
              We strive to maintain continuous availability of our website but do not guarantee
              uninterrupted access. The website may be temporarily unavailable due to:
            </p>
            <ul>
              <li>Scheduled maintenance and updates</li>
              <li>Technical issues or server problems</li>
              <li>Security incidents or threats</li>
              <li>Circumstances beyond our control</li>
            </ul>
            <p>
              We shall not be liable for any loss or inconvenience caused by website unavailability.
            </p>
          </div>

          <div className="legal-section">
            <h2>11. Accuracy of Information</h2>
            <p>
              While we make reasonable efforts to ensure the accuracy of information on this website,
              errors may occur. We reserve the right to correct any errors, inaccuracies, or omissions
              and to change or update information at any time without prior notice.
            </p>
          </div>

          <div className="legal-section">
            <h2>12. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, Prestige Griffin, its directors, officers,
              employees, agents, and affiliates shall not be liable for any direct, indirect, incidental,
              special, consequential, or punitive damages arising from:
            </p>
            <ul>
              <li>Your use of or inability to use this website</li>
              <li>Any errors or omissions in website content</li>
              <li>Any unauthorized access to or use of our servers</li>
              <li>Any interruption or cessation of transmission to or from our website</li>
              <li>Any bugs, viruses, or harmful code transmitted through our website</li>
              <li>Any content or conduct of third parties on the website</li>
            </ul>
          </div>

          <div className="legal-section">
            <h2>13. Jurisdiction-Specific Notices</h2>
            <p>
              This website is operated from Malaysia. If you access this website from other jurisdictions,
              you are responsible for compliance with local laws. Some content may not be appropriate or
              available in all jurisdictions.
            </p>
          </div>

          <div className="legal-section">
            <h2>14. Contact Us</h2>
            <p>
              If you have questions about this Disclaimer or need clarification on any points, please
              contact us:
            </p>
            <div className="legal-contact-info">
              <p><strong>Prestige Griffin</strong></p>
              <p>Email: info@prestigegriffin.com</p>
            </div>
          </div>

          <div className="legal-navigation">
            <Link to="/privacy" className="legal-nav-link">Privacy Policy</Link>
            <Link to="/terms" className="legal-nav-link">Terms and Conditions</Link>
            <Link to="/contact" className="legal-nav-link">Contact Us</Link>
          </div>

        </div>
      </section>
    </div>
  );
}

export default Disclaimer;
