import React from 'react';
import './styles/Sidebar.css';

const Header = () => (
  <aside className="sidebar">
    <div className="profile-pic-placeholder">
      {/* Replace with <img src="profile.jpg" alt="Raghav Gupta" /> if you have a profile image */}
    </div>
    <h1 className="name">Raghav Gupta</h1>
    <h2 className="title">Software Engineer</h2>
    <div className="contact-info">
      <div>er.raghavgupta22@gmail.com</div>
      <div>8557025600</div>
      <div>18 Mirpur colony</div>
    </div>
    <div className="social-icons">
      <a href="https://linkedin.com/in/raghav-gupta-41a57716a" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
        <svg width="24" height="24" fill="#0A66C2" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 11.28h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v5.59z"/></svg>
      </a>
      {/* Add more icons as needed */}
    </div>
  </aside>
);

export default Header; 