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
    <div id="contact" className="contact-section max-w-4xl mx-auto px-4 py-8 mt-16 flex flex-col items-center">
      <h2 className="text-3xl text-white font-bold mb-4 ml-2">Get in Touch</h2>
      <p className="text-lg text-white ml-2 mb-4">Feel free to reach out to me through any of the following channels, I am always open to new opportunities for collaboration!</p>
      <div className="flex space-x-4 ml-2">
        <FiGithub className={`icon ${clickedIcon === 'github' ? 'active' : ''} text-white text-4xl`} onClick={() => handleIconClick('github')} style={{ cursor: 'pointer' }}/>
        <FiLinkedin className={`icon ${clickedIcon === 'linkedin' ? 'active' : ''} text-white text-4xl`} onClick={() => handleIconClick('linkedin')} style={{ cursor: 'pointer' }}/>
        <FiMail className={`icon ${clickedIcon === 'email' ? 'active' : ''} text-white text-4xl`} onClick={() => handleIconClick('email')} style={{ cursor: 'pointer' }}/>
      </div>
    </div>
  );
};

export default Contact;