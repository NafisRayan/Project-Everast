import React, { useState, useEffect } from 'react';

const PictureAndVideo = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div id="picture-and-video" style={{ padding: '20px', backgroundColor: '#f5f5f5', borderRadius: '10px', boxShadow: '0   4px   8px   0 rgba(0,0,0,0.2)', opacity: isVisible ?   1 :   0, transition: 'opacity   1s ease-in-out', animation: isVisible ? 'fadeIn   1s ease-in-out' : '' }}>
      <h1 style={{ color: '#333' }}>Picture & Video</h1>
      <p style={{ color: '#666' }}>
        Check out our latest pictures and videos showcasing our work and achievements.
      </p>
      <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
        <img src="placeholder.jpg" alt="Project" style={{ width: '30%', margin: '10px' }} />
        <img src="placeholder.jpg" alt="Project" style={{ width: '30%', margin: '10px' }} />
        <img src="placeholder.jpg" alt="Project" style={{ width: '30%', margin: '10px' }} />
      </div>
    </div>
  );
};

export default PictureAndVideo;