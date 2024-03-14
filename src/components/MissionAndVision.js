import React, { useState, useEffect } from 'react';

const MissionAndVision = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div id="mission-and-vision" style={{  
      position: 'relative',
      // width: '100vw',
      height: '150vh',
      padding: '20px',   
      backgroundColor: '#003366', // Dark ocean blue
      borderRadius: '0px',   
      boxShadow: '0   4px   8px   0 rgba(0,0,0,0.2)',   
      opacity: isVisible ?   1 :   0,   
      transition: 'opacity   1s ease-in-out',
      backgroundImage: `url(https://i.pinimg.com/originals/09/30/2b/09302bb5c506164ba539ff36f82929f1.gif)`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      flexDirection: 'column', // Align items vertically
      justifyContent: 'center',
      alignItems: 'auto',
      backgroundRepeat: 'no-repeat',
      animation: isVisible ? 'fadeIn   1s ease-in-out' : '', // Apply animation when isVisible is true
   }}>
    <h1 style={{ color: 'white' }}>Mission & Vision</h1>
      <p style={{ color: 'white' }}>
        Our mission is to modernize the energy landscape and ensure the safety and efficiency of electrical infrastructure. Our vision is to be the leading provider of MEP engineering services in Bangladesh, offering comprehensive solutions that prioritize safety, efficiency, and sustainability.
      </p>
      <h2 style={{ color: 'white' }}>Our Values</h2>
      <ul style={{ color: 'white' }}>
        <li>Innovation</li>
        <li>Quality</li>
        <li>Sustainability</li>
        <li>Integrity</li>
        <li>Excellence</li>
      </ul>
    </div>
  );
};

export default MissionAndVision;