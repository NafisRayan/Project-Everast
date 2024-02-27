import React, { useState, useEffect } from 'react';

const ProductsAndServices = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div id="products-and-services" style={{ padding: '20px', backgroundColor: '#f5f5f5', borderRadius: '10px', boxShadow: '0   4px   8px   0 rgba(0,0,0,0.2)', opacity: isVisible ?   1 :   0, transition: 'opacity   1s ease-in-out', animation: isVisible ? 'fadeIn   1s ease-in-out' : '' }}>
      <h1 style={{ color: '#333' }}>Products & Services</h1>
      <p style={{ color: '#666' }}>
        We offer a wide range of products and services, including solar solutions, electrical substations, fire safety equipment, consultancy services, and electrical testing. Our expertise lies in providing sustainable and efficient solutions that prioritize safety and compliance.
      </p>
      <h2 style={{ color: '#333' }}>Our Expertise</h2>
      <ul style={{ color: '#666' }}>
        <li>Solar Solutions</li>
        <li>Electrical Sub-Stations</li>
        <li>Fire Safety Equipment</li>
        <li>Consultancy Services</li>
        <li>Electrical Testing</li>
      </ul>
    </div>
  );
};

export default ProductsAndServices;