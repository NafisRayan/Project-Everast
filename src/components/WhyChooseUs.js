// src/components/WhyChooseUs.js

import React, { useState, useEffect } from 'react';

const WhyChooseUs = () => {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
      }, []);

 return (
    <div id= 'why-choose-us' style={{
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
      animation: isVisible ? 'fadeIn   1s ease-in-out' : '',
    }}>
      <h2 style={{ color: 'white' }}>Why Choose Everest Technology?</h2>
      <ul style={{ color: 'white' }}>
        <li>
          <h3>Expertise:</h3>
          <p>Backed by a group of experienced specialists, we bring considerable experience to each project.</p>
        </li>
        <li>
          <h3>Innovation:</h3>
          <p>We stay on the cutting edge of technical breakthroughs, providing creative solutions for sustainable energy and electrical safety.</p>
        </li>
        <li>
          <h3>Quality Assurance:</h3>
          <p>Our dedication to quality is steadfast. We purchase high-quality items and adhere to strict industry requirements.</p>
        </li>
        <li>
          <h3>Client-Centric Approach:</h3>
          <p>Acknowledging each client's individual demands, we design our solutions to provide optimum value and pleasure.</p>
        </li>
      </ul>
      
    </div>
 );
};

export default WhyChooseUs;