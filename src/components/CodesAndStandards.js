import React, { useState, useEffect } from 'react';

const CodesAndStandards = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div id="codes-and-standards" style={{  
      position: 'relative',
      // width: '100vw',
      height: '100vh',
      padding: '20px',   
      backgroundColor: '#003366', // Dark ocean blue
      borderRadius: '0px',   
      boxShadow: '0   4px   8px   0 rgba(0,0,0,0.2)',   
      opacity: isVisible ?   1 :   0,   
      transition: 'opacity   1s ease-in-out',
      backgroundImage: `url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/37f002aa-032d-480b-9aa7-474adef47ed6/daqohse-f79cb156-0096-4748-9f7e-39b15cf2e86e.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzM3ZjAwMmFhLTAzMmQtNDgwYi05YWE3LTQ3NGFkZWY0N2VkNlwvZGFxb2hzZS1mNzljYjE1Ni0wMDk2LTQ3NDgtOWY3ZS0zOWIxNWNmMmU4NmUuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.J-x32M2EVAjG7wBPe_hvxGgyKH1dUGhBaoYqYjhUXW4)`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      flexDirection: 'column', // Align items vertically
      justifyContent: 'center',
      alignItems: 'auto',
      backgroundRepeat: 'no-repeat',
      animation: isVisible ? 'fadeIn   1s ease-in-out' : '', // Apply animation when isVisible is true
   }}>
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