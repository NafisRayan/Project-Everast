import React, { useState, useEffect } from 'react';

const ProductsAndServices = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
<div id="products-and-services" style={{  
 position: 'relative',
//  width: '50vw',
 height: '120vh',
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
 <h1 style={{ color: 'white' }}>Products & Services</h1>
    <p style={{ color: 'white' }}>
      We offer a wide range of products and services, including solar solutions, electrical substations, fire safety equipment, consultancy services, and electrical testing. Our expertise lies in providing sustainable and efficient solutions that prioritize safety and compliance.
    </p>
    <h2 style={{ color: 'white' }}>Our Core Services:</h2>
    <ul style={{ color: 'white' }}>
      <li>
        <h3>Solar Solutions:</h3>
        <p>We are dedicated to harnessing the sun's power using cutting-edge solar panel technologies. Our expert professionals assure seamless integration and maximum energy efficiency for both residential and commercial projects.</p>
      </li>
      <li>
        <h3>Electrical Sub-Stations:</h3>
        <p>Changing the way power is distributed, we design and implement electrical substations that are suited to our clients' specific requirements. Our solutions prioritize dependability, scalability, and adherence to industry standards.</p>
      </li>
      <li>
        <h3>Fire Safety Equipment:</h3>
        <p>Safety is our number one priority. We provide cutting-edge fire safety equipment to protect people and property. Our services, which include detection systems and suppression technologies, are designed to fulfill the highest safety standards.</p>
      </li>
      <li>
        <h3>Consultancy Services:</h3>
        <p>With extensive industry understanding, our consultant services help clients navigate the difficulties of renewable energy adoption, electrical infrastructure planning, and safety compliance. We want to help organizations and individuals make educated decisions that are aligned with their aims.</p>
      </li>
      <li>
        <h3>Electrical Testing:</h3>
        <p>Thorough testing is essential for ensuring the integrity of electrical systems. Our professionals do rigorous electrical testing to identify potential faults, ensure compliance, and improve overall installation performance.</p>
      </li>
    </ul>
</div>
  );
};

export default ProductsAndServices;