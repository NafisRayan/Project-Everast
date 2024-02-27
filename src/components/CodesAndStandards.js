import React, { useState, useEffect } from 'react';

const CodesAndStandards = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div id="codes-and-standards" style={{ padding: '20px', backgroundColor: '#003366', borderRadius: '10px', boxShadow: '0   4px   8px   0 rgba(0,0,0,0.2)', opacity: isVisible ?  1 :  0, transition: 'opacity  1s ease-in-out', animation: isVisible ? 'fadeIn  1s ease-in-out' : '' }}>
      <h1 style={{ color: '#FFFFFF' }}>Codes & Standards</h1>
      <p style={{ color: '#FFFFFF' }}>
        We adhere to the highest industry standards and codes to ensure the safety and efficiency of our services. Our commitment to compliance ensures that our projects meet the highest safety and quality standards.
      </p>
      <h2 style={{ color: '#FFFFFF' }}>Our Compliance</h2>
      <ul style={{ color: '#FFFFFF' }}>
        <li>ISO   9001: Quality Management</li>
        <li>ISO   14001: Environmental Management</li>
        <li>ISO   45001: Occupational Health and Safety</li>
      </ul>
    </div>
  );
};

export default CodesAndStandards;