import { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const [statusMessage, setStatusMessage] = useState('');
  const [statusColor, setStatusColor] = useState('');

  useEffect(() => {
    document.title = 'Contact Us - Prestige Griffin';
    // Initialize EmailJS
    emailjs.init("SMObHLtyNQbqvGQEU");
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    setStatusMessage("Sending message...");
    setStatusColor("yellow");

    emailjs.sendForm("service_lhua6ns", "template_z53lnqk", e.target)
      .then(() => {
        setStatusMessage("✅ Message sent successfully!");
        setStatusColor("lightgreen");
        e.target.reset();
      })
      .catch((error) => {
        setStatusMessage("❌ Failed to send message. Please try again.");
        setStatusColor("red");
        console.error("EmailJS Error:", error);
      });
  };

  return (
    <section className="intro">
      <h2 className="page-title" data-aos="fade-up">Contact Us</h2>
      <form
        id="contact-form"
        className="contact-form"
        onSubmit={handleSubmit}
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <input type="text" name="name" placeholder="Full Name" required />
        <input type="email" name="email" placeholder="Email Address" required />
        <input type="text" name="phone" placeholder="Phone Number" required />
        <textarea rows="5" name="message" placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
        {statusMessage && (
          <p id="status-message" style={{ color: statusColor }}>
            {statusMessage}
          </p>
        )}
      </form>
    </section>
  );
}

export default Contact;
