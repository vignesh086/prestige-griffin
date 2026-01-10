import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

function TermsAndConditions() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="legal-page">
      <SEO
        title="Terms and Conditions"
        description="Review Prestige Griffin's terms and conditions for using our website and advisory services. Understand your rights and responsibilities."
        canonical="/terms"
        noindex={true}
      />
      <section className="legal-hero-section">
        <div className="legal-hero-content" data-aos="fade-up">
          <h1 className="legal-hero-title">Terms and Conditions</h1>
          <p className="legal-hero-subtitle">Last Updated: January 2025</p>
        </div>
      </section>

      <section className="legal-content-section">
        <div className="legal-content-container" data-aos="fade-up">

          <div className="legal-section">
            <h2>1. Agreement to Terms</h2>
            <p>
              Welcome to Prestige Griffin. These Terms and Conditions ("Terms") constitute a legally
              binding agreement between you ("User," "you," or "your") and Prestige Griffin ("Company,"
              "we," "our," or "us") governing your access to and use of our website, services, and
              any related content or materials.
            </p>
            <p>
              By accessing our website or engaging our services, you acknowledge that you have read,
              understood, and agree to be bound by these Terms. If you do not agree to these Terms,
              you must not access or use our services.
            </p>
          </div>

          <div className="legal-section">
            <h2>2. Description of Services</h2>
            <p>
              Prestige Griffin is a strategic advisory firm providing professional consulting services
              across multiple sectors, including but not limited to:
            </p>
            <ul>
              <li>Finance and Banking Advisory</li>
              <li>AI and Technology Integration</li>
              <li>Defense and Security Consulting</li>
              <li>Commodities and Trade Advisory</li>
              <li>Strategic Business Development</li>
              <li>Operational Excellence Consulting</li>
            </ul>
            <p>
              The specific scope, terms, and conditions of any engagement will be outlined in a
              separate service agreement or statement of work between Prestige Griffin and the client.
            </p>
          </div>

          <div className="legal-section">
            <h2>3. Eligibility</h2>
            <p>
              Our services are intended for businesses, organizations, and individuals who are at least
              18 years of age and have the legal capacity to enter into binding contracts. By using our
              services, you represent and warrant that you meet these eligibility requirements.
            </p>
          </div>

          <div className="legal-section">
            <h2>4. User Responsibilities</h2>
            <p>When using our website and services, you agree to:</p>
            <ul>
              <li>Provide accurate, current, and complete information as requested</li>
              <li>Maintain the confidentiality of any account credentials or sensitive information</li>
              <li>Use our services only for lawful purposes and in accordance with these Terms</li>
              <li>Not engage in any activity that could harm, disable, or impair our website or services</li>
              <li>Not attempt to gain unauthorized access to any systems or data</li>
              <li>Not reproduce, distribute, or exploit any content without prior written consent</li>
              <li>Comply with all applicable laws and regulations in your jurisdiction</li>
            </ul>
          </div>

          <div className="legal-section">
            <h2>5. Intellectual Property Rights</h2>
            <p>
              All content on this website, including but not limited to text, graphics, logos, images,
              audio clips, digital downloads, and software, is the property of Prestige Griffin or its
              content suppliers and is protected by international copyright, trademark, and other
              intellectual property laws.
            </p>
            <p>
              You may not reproduce, distribute, modify, create derivative works from, publicly display,
              or exploit any of our content without our prior written permission. Limited use for
              personal, non-commercial purposes may be permitted with proper attribution.
            </p>
            <p>
              The Prestige Griffin name, logo, and all related marks are trademarks of Prestige Griffin.
              You may not use these marks without our express written consent.
            </p>
          </div>

          <div className="legal-section">
            <h2>6. Confidentiality</h2>
            <p>
              Both parties agree to maintain the confidentiality of any proprietary or sensitive
              information shared during the course of our engagement. This includes, but is not
              limited to:
            </p>
            <ul>
              <li>Business strategies and plans</li>
              <li>Financial information and projections</li>
              <li>Technical specifications and processes</li>
              <li>Client lists and contact information</li>
              <li>Any information designated as confidential</li>
            </ul>
            <p>
              Confidentiality obligations shall survive the termination of any engagement or these Terms.
            </p>
          </div>

          <div className="legal-section">
            <h2>7. Payment Terms</h2>
            <p>
              Fees for our services will be outlined in individual service agreements. Unless otherwise
              specified:
            </p>
            <ul>
              <li>Payment terms are net 30 days from invoice date</li>
              <li>All fees are quoted in the currency specified in the agreement</li>
              <li>Late payments may be subject to interest charges as permitted by law</li>
              <li>Expenses incurred on behalf of clients will be billed at cost plus handling</li>
              <li>We reserve the right to suspend services for accounts with outstanding balances</li>
            </ul>
          </div>

          <div className="legal-section">
            <h2>8. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by applicable law, Prestige Griffin and its directors,
              officers, employees, agents, and affiliates shall not be liable for any indirect,
              incidental, special, consequential, or punitive damages, including but not limited to:
            </p>
            <ul>
              <li>Loss of profits, revenue, or business opportunities</li>
              <li>Loss of data or information</li>
              <li>Business interruption</li>
              <li>Any other pecuniary loss</li>
            </ul>
            <p>
              Our total liability for any claims arising from or related to our services shall not
              exceed the fees paid by you for the specific service giving rise to the claim.
            </p>
          </div>

          <div className="legal-section">
            <h2>9. Indemnification</h2>
            <p>
              You agree to indemnify, defend, and hold harmless Prestige Griffin and its officers,
              directors, employees, agents, and affiliates from and against any claims, liabilities,
              damages, losses, costs, or expenses (including reasonable attorneys' fees) arising from:
            </p>
            <ul>
              <li>Your use of our website or services</li>
              <li>Your violation of these Terms</li>
              <li>Your violation of any rights of third parties</li>
              <li>Any content or information you provide to us</li>
            </ul>
          </div>

          <div className="legal-section">
            <h2>10. Termination</h2>
            <p>
              We reserve the right to suspend or terminate your access to our website or services at
              any time, with or without cause, and with or without notice. Upon termination:
            </p>
            <ul>
              <li>Your right to access and use our services will immediately cease</li>
              <li>Any outstanding fees remain due and payable</li>
              <li>Provisions that by their nature should survive termination shall remain in effect</li>
            </ul>
            <p>
              You may terminate your engagement with us in accordance with the terms of any applicable
              service agreement.
            </p>
          </div>

          <div className="legal-section">
            <h2>11. Dispute Resolution</h2>
            <p>
              Any disputes arising from or relating to these Terms or our services shall be resolved
              through the following process:
            </p>
            <ul>
              <li><strong>Negotiation:</strong> The parties will first attempt to resolve disputes
              through good-faith negotiation.</li>
              <li><strong>Mediation:</strong> If negotiation fails, the parties may agree to non-binding
              mediation with a mutually acceptable mediator.</li>
              <li><strong>Arbitration:</strong> Any unresolved disputes shall be submitted to binding
              arbitration in accordance with applicable arbitration rules.</li>
            </ul>
          </div>

          <div className="legal-section">
            <h2>12. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of Malaysia,
              without regard to its conflict of law provisions. Any legal proceedings shall be brought
              in the courts of Malaysia, and you consent to the exclusive jurisdiction of such courts.
            </p>
          </div>

          <div className="legal-section">
            <h2>13. Force Majeure</h2>
            <p>
              Neither party shall be liable for any failure or delay in performing their obligations
              due to circumstances beyond their reasonable control, including but not limited to acts
              of God, natural disasters, war, terrorism, riots, embargoes, acts of civil or military
              authorities, fire, floods, epidemics, or infrastructure failures.
            </p>
          </div>

          <div className="legal-section">
            <h2>14. Severability</h2>
            <p>
              If any provision of these Terms is found to be invalid, illegal, or unenforceable by a
              court of competent jurisdiction, such invalidity shall not affect the remaining provisions,
              which shall continue in full force and effect.
            </p>
          </div>

          <div className="legal-section">
            <h2>15. Entire Agreement</h2>
            <p>
              These Terms, together with our Privacy Policy, Disclaimer, and any applicable service
              agreements, constitute the entire agreement between you and Prestige Griffin regarding
              the use of our website and services, superseding any prior agreements or understandings.
            </p>
          </div>

          <div className="legal-section">
            <h2>16. Modifications to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. Changes will be effective
              immediately upon posting to our website with an updated "Last Updated" date. Your
              continued use of our services after such changes constitutes acceptance of the modified Terms.
            </p>
          </div>

          <div className="legal-section">
            <h2>17. Contact Information</h2>
            <p>
              For questions or concerns regarding these Terms and Conditions, please contact us:
            </p>
            <div className="legal-contact-info">
              <p><strong>Prestige Griffin</strong></p>
              <p>Email: legal@prestigegriffin.com</p>
              <p>Phone: +60 12-688 0357</p>
            </div>
          </div>

          <div className="legal-navigation">
            <Link to="/privacy" className="legal-nav-link">Privacy Policy</Link>
            <Link to="/disclaimer" className="legal-nav-link">Disclaimer</Link>
            <Link to="/contact" className="legal-nav-link">Contact Us</Link>
          </div>

        </div>
      </section>
    </div>
  );
}

export default TermsAndConditions;
