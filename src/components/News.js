import React, { useState, useEffect } from 'react';

const News = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div id="news" style={{   
      padding: '20px',   
      backgroundColor: '#003366', // Dark ocean blue
      borderRadius: '10px',   
      boxShadow: '0   4px   8px   0 rgba(0,0,0,0.2)',   
      opacity: isVisible ?   1 :   0,   
      transition: 'opacity   1s ease-in-out',
      animation: isVisible ? 'fadeIn   1s ease-in-out' : '', // Apply animation when isVisible is true
    }}>
      <h1 style={{ color: '#FFFFFF' }}>News</h1>
      <p style={{ color: '#FFFFFF' }}>
        Stay updated with the latest news and updates from Everest Technology.
      </p>
      <button style={{ backgroundColor: '#FFFFFF', color: '#003366', padding: '10px   20px', borderRadius: '5px', border: 'none', cursor: 'pointer', transition: 'background-color   0.3s ease' }}>View More</button>
    </div>
  );
};

export default News;