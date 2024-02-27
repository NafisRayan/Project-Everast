import React, { useState, useEffect } from 'react';

const Career = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div id="career" style={{ padding: '20px', backgroundColor: '#003366', borderRadius: '10px', boxShadow: '0   4px   8px   0 rgba(0,0,0,0.2)', opacity: isVisible ?  1 :  0, transition: 'opacity  1s ease-in-out', animation: isVisible ? 'fadeIn  1s ease-in-out' : '' }}>
      <h1 style={{ color: '#FFFFFF' }}>Career</h1>
      <p style={{ color: '#FFFFFF' }}>
        Join our team and be part of the future of MEP engineering. We are looking for passionate individuals who are dedicated to innovation and quality.
      </p>
      <h2 style={{ color: '#FFFFFF' }}>Our Culture</h2>
      <ul style={{ color: '#FFFFFF' }}>
        <li>Collaborative</li>
        <li>Innovative</li>
        <li>Customer-Centric</li>
        <li>Sustainable</li>
      </ul>
    </div>
  );
};

export default Career;