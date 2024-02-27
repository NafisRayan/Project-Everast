import React, { useState, useEffect } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div id="about" style={{   
      padding: '20px',   
      backgroundColor: '#003366', // Dark ocean blue
      borderRadius: '10px',   
      boxShadow: '0   4px   8px   0 rgba(0,0,0,0.2)',   
      opacity: isVisible ?  1 :  0,   
      transition: 'opacity  1s ease-in-out',
      backgroundImage: 'url(/about-background.jpg)',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      animation: isVisible ? 'fadeIn  1s ease-in-out' : '', // Apply animation when isVisible is true
    }}>
      <h1 style={{ color: '#FFFFFF' }}>About Everest Technology</h1>
      <p style={{ color: '#FFFFFF' }}>
        Everest Technology is the leading MEP engineering firm in Bangladesh, committed to modernizing the energy landscape and ensuring the safety and efficiency of electrical infrastructure. We specialize in solar solutions, electrical substations, fire safety equipment, and more. Our mission is to provide sustainable and efficient solutions that prioritize safety and compliance.
      </p>
      <button style={{ backgroundColor: '#FFFFFF', color: '#003366', padding: '10px   20px', borderRadius: '5px', border: 'none', cursor: 'pointer', transition: 'background-color   0.3s ease' }}>Learn More</button>
    </div>
  );
};

export default About;