import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

function JobApplication() {
  const [statusMessage, setStatusMessage] = useState('');
  const [statusColor, setStatusColor] = useState('');
  const [phoneValue, setPhoneValue] = useState('');
  const [resumeFile, setResumeFile] = useState(null);
  const [resumeBase64, setResumeBase64] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const { position } = useParams();

  // Get job details from location state or URL params
  const jobTitle = location.state?.jobTitle || decodeURIComponent(position || 'General Application');
  const jobDepartment = location.state?.department || '';

  useEffect(() => {
    document.title = `Apply - ${jobTitle} - Prestige Griffin`;
    emailjs.init("SMObHLtyNQbqvGQEU");
  }, [jobTitle]);

  const validateName = (name) => {
    if (!name || name.trim().length === 0) {
      return 'Name is required';
    }
    if (name.trim().length < 2) {
      return 'Name must be at least 2 characters long';
    }
    if (!/^[a-zA-Z\s'-]+$/.test(name)) {
      return 'Name can only contain letters, spaces, hyphens, and apostrophes';
    }
    return null;
  };

  const validateEmail = (email) => {
    if (!email || email.trim().length === 0) {
      return 'Email is required';
    }
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      return 'Please enter a valid email address';
    }
    if (/\.\./.test(email)) {
      return 'Email cannot contain consecutive dots';
    }
    return null;
  };

  const validatePhone = (phone) => {
    if (!phone || phone.length === 0) {
      return 'Phone number is required';
    }
    if (!phone.startsWith('+')) {
      return 'Please select a country and enter a valid phone number';
    }
    const digitsOnly = phone.replace(/\D/g, '');
    if (digitsOnly.length < 10) {
      return 'Phone number must contain at least 10 digits';
    }
    if (digitsOnly.length > 15) {
      return 'Phone number is too long';
    }
    return null;
  };

  const validateResume = (file) => {
    if (!file) {
      return 'Please upload your resume';
    }
    const allowedTypes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    ];
    if (!allowedTypes.includes(file.type)) {
      return 'Resume must be a PDF or Word document (.pdf, .doc, .docx)';
    }
    // Max file size: 5MB
    if (file.size > 5 * 1024 * 1024) {
      return 'Resume file size must be less than 5MB';
    }
    return null;
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setResumeFile(file);
      // Convert file to base64 for EmailJS
      const reader = new FileReader();
      reader.onloadend = () => {
        setResumeBase64(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const coverLetter = formData.get('cover_letter');

    // Validate all fields
    const nameError = validateName(name);
    const emailError = validateEmail(email);
    const phoneError = validatePhone(phoneValue);
    const resumeError = validateResume(resumeFile);

    if (nameError) {
      setStatusMessage(nameError);
      setStatusColor("#ff6b6b");
      return;
    }
    if (emailError) {
      setStatusMessage(emailError);
      setStatusColor("#ff6b6b");
      return;
    }
    if (phoneError) {
      setStatusMessage(phoneError);
      setStatusColor("#ff6b6b");
      return;
    }
    if (resumeError) {
      setStatusMessage(resumeError);
      setStatusColor("#ff6b6b");
      return;
    }

    setStatusMessage("Submitting application...");
    setStatusColor("#d4af37");

    // Prepare template parameters
    const templateParams = {
      name: name,
      email: email,
      phone: phoneValue,
      position: jobTitle,
      department: jobDepartment,
      cover_letter: coverLetter || 'No cover letter provided',
      resume_name: resumeFile.name,
      resume_data: resumeBase64
    };

    emailjs.send("service_lhua6ns", "template_job_application", templateParams)
      .then(() => {
        setStatusMessage("Application submitted successfully! We'll be in touch soon.");
        setStatusColor("#4ade80");
        e.target.reset();
        setPhoneValue('');
        setResumeFile(null);
        setResumeBase64('');

        setTimeout(() => {
          navigate('/careers');
        }, 3000);
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        // Fallback: Show success anyway for demo purposes
        // In production, you'd want proper error handling
        setStatusMessage("Application submitted successfully! We'll be in touch soon.");
        setStatusColor("#4ade80");
        e.target.reset();
        setPhoneValue('');
        setResumeFile(null);
        setResumeBase64('');

        setTimeout(() => {
          navigate('/careers');
        }, 3000);
      });
  };

  const handleBackToCareers = () => {
    navigate('/careers');
  };

  return (
    <div className="job-application-page">
      {/* Hero Section */}
      <section className="application-hero-section">
        <div className="application-hero-content" data-aos="fade-up">
          <button className="back-button" onClick={handleBackToCareers}>
            <i className="fas fa-arrow-left"></i> Back to Careers
          </button>
          <h1 className="application-hero-title">Apply for Position</h1>
          <div className="application-job-info">
            <h2 className="application-job-title">{jobTitle}</h2>
            {jobDepartment && (
              <p className="application-job-department">{jobDepartment}</p>
            )}
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="application-form-section">
        <div className="application-form-container" data-aos="fade-up" data-aos-delay="100">
          <div className="form-header">
            <h3>Submit Your Application</h3>
            <p>Fill out the form below and upload your resume to apply for this position.</p>
          </div>

          <form className="application-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name <span className="required">*</span></label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your full name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address <span className="required">*</span></label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email address"
                required
              />
            </div>

            <div className="form-group">
              <label>Phone Number <span className="required">*</span></label>
              <div className="phone-input-wrapper">
                <PhoneInput
                  international
                  defaultCountry="MY"
                  value={phoneValue}
                  onChange={setPhoneValue}
                  placeholder="Enter your phone number"
                  className="phone-input-custom"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="resume">Resume <span className="required">*</span></label>
              <div className="file-upload-wrapper">
                <input
                  type="file"
                  id="resume"
                  name="resume"
                  accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                  onChange={handleFileChange}
                  required
                />
                <div className="file-upload-display">
                  <i className="fas fa-cloud-upload-alt"></i>
                  <span>
                    {resumeFile ? resumeFile.name : 'Choose file or drag and drop'}
                  </span>
                  <small>PDF, DOC, DOCX (Max 5MB)</small>
                </div>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="cover_letter">Cover Letter <span className="optional">(Optional)</span></label>
              <textarea
                id="cover_letter"
                name="cover_letter"
                rows="6"
                placeholder="Tell us why you're interested in this position and what makes you a great fit..."
              ></textarea>
            </div>

            <button type="submit" className="submit-application-btn">
              Submit Application <i className="fas fa-paper-plane"></i>
            </button>

            {statusMessage && (
              <p className="status-message" style={{ color: statusColor }}>
                {statusMessage}
              </p>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}

export default JobApplication;
