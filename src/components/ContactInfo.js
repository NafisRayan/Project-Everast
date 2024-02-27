import React, { useState, useEffect } from 'react';

const ContactInfo = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div id="contact-info" style={{ padding: '20px', backgroundColor: '#f5f5f5', borderRadius: '10px', boxShadow: '0   4px   8px   0 rgba(0,0,0,0.2)', opacity: isVisible ?  1 :  0, transition: 'opacity  1s ease-in-out', animation: isVisible ? 'fadeIn  1s ease-in-out' : '' }}>
      <h1 style={{ color: '#333' }}>Contact Info</h1>
      <p style={{ color: '#666' }}>
        +8801965400401<br />
        Care Lake Front   16/A, Road   9, Gulshan Badda Link Road, Gulshan   1, Dhaka<br />
        everest.technology01@gmail.com
      </p>
    </div>
  );
};

export default ContactInfo;