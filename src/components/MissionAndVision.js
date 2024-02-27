import React, { useState, useEffect } from 'react';

const MissionAndVision = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div id="mission-and-vision" style={{ padding: '20px', backgroundColor: '#f5f5f5', borderRadius: '10px', boxShadow: '0   4px   8px   0 rgba(0,0,0,0.2)', opacity: isVisible ?  1 :  0, transition: 'opacity  1s ease-in-out', animation: isVisible ? 'fadeIn  1s ease-in-out' : '' }}>
      <h1 style={{ color: '#333' }}>Mission & Vision</h1>
      <p style={{ color: '#666' }}>
        Our mission is to modernize the energy landscape and ensure the safety and efficiency of electrical infrastructure. Our vision is to be the leading provider of MEP engineering services in Bangladesh, offering comprehensive solutions that prioritize safety, efficiency, and sustainability.
      </p>
      <h2 style={{ color: '#333' }}>Our Values</h2>
      <ul style={{ color: '#666' }}>
        <li>Innovation</li>
        <li>Quality</li>
        <li>Sustainability</li>
        <li>Integrity</li>
      </ul>
    </div>
  );
};

export default MissionAndVision;