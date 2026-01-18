import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="legal-page">
      <SEO
        title="Privacy Policy"
        description="Prestige Griffin's privacy policy explains how we collect, use, and protect your personal information. Learn about your rights and our data protection practices."
        canonical="/privacy"
        noindex={true}
      />
      <section className="legal-hero-section">
        <div className="legal-hero-content" data-aos="fade-up">
          <h1 className="legal-hero-title">Privacy Policy</h1>
          <p className="legal-hero-subtitle">Last Updated: January 2025</p>
        </div>
      </section>

      <section className="legal-content-section">
        <div className="legal-content-container" data-aos="fade-up">

          <div className="legal-section">
            <h2>1. Introduction</h2>
            <p>
              Prestige Griffin ("we," "our," or "us") is committed to protecting your privacy and ensuring
              the security of your personal information. This Privacy Policy explains how we collect, use,
              disclose, and safeguard your information when you visit our website, use our services, or
              engage with us in any capacity.
            </p>
            <p>
              By accessing our website or using our services, you consent to the practices described in
              this Privacy Policy. We encourage you to read this policy carefully and contact us if you
              have any questions.
            </p>
          </div>

          <div className="legal-section">
            <h2>2. Information We Collect</h2>

            <h3>2.1 Personal Information</h3>
            <p>We may collect personal information that you voluntarily provide to us, including:</p>
            <ul>
              <li>Full name and title</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Company or organization name</li>
              <li>Job title and professional background</li>
              <li>Mailing address</li>
              <li>Resume and career information (for job applicants)</li>
              <li>Financial information relevant to our advisory services</li>
            </ul>

            <h3>2.2 Automatically Collected Information</h3>
            <p>When you visit our website, we may automatically collect certain information, including:</p>
            <ul>
              <li>IP address and geographic location</li>
              <li>Browser type and version</li>
              <li>Device type and operating system</li>
              <li>Pages visited and time spent on each page</li>
              <li>Referring website or source</li>
              <li>Date and time of access</li>
            </ul>
          </div>

          <div className="legal-section">
            <h2>3. How We Use Your Information</h2>
            <p>We use the information we collect for the following purposes:</p>
            <ul>
              <li>To provide, maintain, and improve our advisory services</li>
              <li>To respond to your inquiries and fulfill your requests</li>
              <li>To process job applications and evaluate candidates</li>
              <li>To send you relevant updates, newsletters, and marketing communications (with your consent)</li>
              <li>To analyze website usage and improve user experience</li>
              <li>To comply with legal obligations and regulatory requirements</li>
              <li>To protect our rights, property, and safety, as well as those of our clients and partners</li>
              <li>To detect and prevent fraud or other unauthorized activities</li>
            </ul>
          </div>

          <div className="legal-section">
            <h2>4. Information Sharing and Disclosure</h2>
            <p>
              We do not sell, trade, or rent your personal information to third parties. We may share
              your information in the following circumstances:
            </p>
            <ul>
              <li><strong>Service Providers:</strong> We may share information with trusted third-party
              service providers who assist us in operating our website and conducting our business,
              subject to confidentiality agreements.</li>
              <li><strong>Legal Requirements:</strong> We may disclose information when required by law,
              court order, or governmental authority, or to protect our legal rights.</li>
              <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of
              assets, your information may be transferred as part of the transaction.</li>
              <li><strong>With Your Consent:</strong> We may share your information with third parties
              when you have given us explicit consent to do so.</li>
            </ul>
          </div>

          <div className="legal-section">
            <h2>5. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal
              information against unauthorized access, alteration, disclosure, or destruction. These
              measures include:
            </p>
            <ul>
              <li>Encryption of sensitive data during transmission (SSL/TLS)</li>
              <li>Secure storage systems with access controls</li>
              <li>Regular security assessments and updates</li>
              <li>Employee training on data protection practices</li>
              <li>Confidentiality agreements with staff and contractors</li>
            </ul>
            <p>
              However, no method of transmission over the Internet or electronic storage is 100% secure.
              While we strive to protect your information, we cannot guarantee absolute security.
            </p>
          </div>

          <div className="legal-section">
            <h2>6. Data Retention</h2>
            <p>
              We retain your personal information only for as long as necessary to fulfill the purposes
              for which it was collected, comply with legal obligations, resolve disputes, and enforce
              our agreements. The retention period may vary depending on the context and our legal
              requirements.
            </p>
          </div>

          <div className="legal-section">
            <h2>7. Your Rights</h2>
            <p>Depending on your jurisdiction, you may have the following rights regarding your personal information:</p>
            <ul>
              <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information, subject to legal exceptions</li>
              <li><strong>Objection:</strong> Object to certain processing activities</li>
              <li><strong>Portability:</strong> Request transfer of your data to another service provider</li>
              <li><strong>Withdrawal of Consent:</strong> Withdraw consent for marketing communications at any time</li>
            </ul>
            <p>
              To exercise these rights, please contact us using the information provided in the Contact section below.
            </p>
          </div>

          <div className="legal-section">
            <h2>8. Cookies and Tracking Technologies</h2>
            <p>
              Our website may use cookies and similar tracking technologies to enhance your browsing
              experience, analyze website traffic, and understand user preferences. You can control
              cookie settings through your browser preferences. Disabling cookies may affect the
              functionality of certain features on our website.
            </p>
          </div>

          <div className="legal-section">
            <h2>9. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites or services. We are not responsible
              for the privacy practices or content of these external sites. We encourage you to review
              the privacy policies of any third-party websites you visit.
            </p>
          </div>

          <div className="legal-section">
            <h2>10. International Data Transfers</h2>
            <p>
              As a global advisory firm, we may transfer your information to countries outside your
              jurisdiction. When we do so, we ensure appropriate safeguards are in place to protect
              your information in accordance with applicable data protection laws.
            </p>
          </div>

          <div className="legal-section">
            <h2>11. Children's Privacy</h2>
            <p>
              Our services are not directed to individuals under the age of 18. We do not knowingly
              collect personal information from children. If we become aware that we have collected
              information from a child, we will take steps to delete it promptly.
            </p>
          </div>

          <div className="legal-section">
            <h2>12. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our practices
              or legal requirements. We will notify you of any material changes by posting the updated
              policy on our website with a new "Last Updated" date. We encourage you to review this
              policy periodically.
            </p>
          </div>

          <div className="legal-section">
            <h2>13. Contact Us</h2>
            <p>
              If you have any questions, concerns, or requests regarding this Privacy Policy or our
              data practices, please contact us:
            </p>
            <div className="legal-contact-info">
              <p><strong>Prestige Griffin</strong></p>
              <p>Email: privacy@prestigegriffin.com</p>
            </div>
          </div>

          <div className="legal-navigation">
            <Link to="/terms" className="legal-nav-link">Terms and Conditions</Link>
            <Link to="/disclaimer" className="legal-nav-link">Disclaimer</Link>
            <Link to="/contact" className="legal-nav-link">Contact Us</Link>
          </div>

        </div>
      </section>
    </div>
  );
}

export default PrivacyPolicy;
