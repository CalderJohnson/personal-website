'use client';
import { useState } from 'react';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const Contact = () => {
  const [clickedIcon, setClickedIcon] = useState(null as string | null);

  const handleIconClick = (icon: string) => {
    switch (icon) {
      case 'github':
        window.open('https://github.com/CalderJohnson/', '_blank');
        break;
      case 'linkedin':
        window.open('https://www.linkedin.com/in/calderbjohnson/', '_blank');
        break;
      case 'email':
        window.location.href = 'mailto:calderbjohnson@icloud.com';
        break;
      default:
        break;
    }
    setClickedIcon(icon);
  };

  return (
    <section id="contact" className="contact-section">
      <span className="eyebrow">Contact</span>
      <h2 className="section-title">Let&apos;s connect.</h2>
      <p className="contact-copy">Feel free to reach out about new opportunities, research, or a good technical conversation.</p>
      <div className="contact-links">
        <a href="https://github.com/CalderJohnson/" target="_blank" rel="noreferrer"><FiGithub /> GitHub</a>
        <a href="https://www.linkedin.com/in/calderbjohnson/" target="_blank" rel="noreferrer"><FiLinkedin /> LinkedIn</a>
        <a href="mailto:calderbjohnson@icloud.com"><FiMail /> Email</a>
      </div>
    </section>
  );
};

export default Contact;