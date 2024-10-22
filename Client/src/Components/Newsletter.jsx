import React from 'react';
import '../Styles/Newsletter.css'; 

const Newsletter = () => {
  return (
    <div className="newsletter-container">
      <h2 className="newsletter-title">Subscribe to Our Newsletter</h2>
      <p className="newsletter-subtitle">Get the latest updates and offers directly to your inbox.</p>
      <div className="newsletter-form">
        <input
          type="email"
          placeholder="Enter your email"
          className="newsletter-input"
        />
        <button className="newsletter-button">Subscribe</button>
      </div>
    </div>
  );
};

export default Newsletter;
