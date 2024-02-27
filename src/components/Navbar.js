import React, { useState } from 'react';

const Navbar = () => {
  const [hoveredLink, setHoveredLink] = useState(null);

  const navbarStyle = {
    backgroundColor: 'rgba(51,  151,  251,  0.5)',
    padding: '20px',
    position: 'sticky',
    top:   0,
    zIndex:   100,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    animation: 'slideIn   1s ease-out',
    backgroundImage: 'url(/navbar-background.jpg)', // Add this line
    backgroundSize: 'cover', // Ensure the image covers the entire navbar
    backgroundRepeat: 'no-repeat', // Prevent the image from repeating
  };

  const linkStyle = {
    color: 'white',
    marginRight: '10px',
    textDecoration: 'none',
    padding: '5px   10px',
    transition: 'background-color   0.3s ease',
  };

  const handleMouseEnter = (link) => {
    setHoveredLink(link);
  };

  const handleMouseLeave = () => {
    setHoveredLink(null);
  };

  return (
    <nav style={navbarStyle}>
      <a href="#about" style={hoveredLink === 'about' ? { ...linkStyle, backgroundColor: '#555' } : linkStyle} onMouseEnter={() => handleMouseEnter('about')} onMouseLeave={handleMouseLeave}>About</a>
      <a href="#mission-and-vision" style={hoveredLink === 'mission-and-vision' ? { ...linkStyle, backgroundColor: '#555' } : linkStyle} onMouseEnter={() => handleMouseEnter('mission-and-vision')} onMouseLeave={handleMouseLeave}>Mission & Vision</a>
      <a href="#news" style={hoveredLink === 'news' ? { ...linkStyle, backgroundColor: '#555' } : linkStyle} onMouseEnter={() => handleMouseEnter('news')} onMouseLeave={handleMouseLeave}>News</a>
      <a href="#products-and-services" style={hoveredLink === 'products-and-services' ? { ...linkStyle, backgroundColor: '#555' } : linkStyle} onMouseEnter={() => handleMouseEnter('products-and-services')} onMouseLeave={handleMouseLeave}>Products & Services</a>
      <a href="#career" style={hoveredLink === 'career' ? { ...linkStyle, backgroundColor: '#555' } : linkStyle} onMouseEnter={() => handleMouseEnter('career')} onMouseLeave={handleMouseLeave}>Career</a>
      <a href="#contact-info" style={hoveredLink === 'contact-info' ? { ...linkStyle, backgroundColor: '#555' } : linkStyle} onMouseEnter={() => handleMouseEnter('contact-info')} onMouseLeave={handleMouseLeave}>Contact Info</a>
      <a href="#codes-and-standards" style={hoveredLink === 'codes-and-standards' ? { ...linkStyle, backgroundColor: '#555' } : linkStyle} onMouseEnter={() => handleMouseEnter('codes-and-standards')} onMouseLeave={handleMouseLeave}>Codes & Standards</a>
      <a href="#picture-and-video" style={hoveredLink === 'picture-and-video' ? { ...linkStyle, backgroundColor: '#555' } : linkStyle} onMouseEnter={() => handleMouseEnter('picture-and-video')} onMouseLeave={handleMouseLeave}>Picture & Video</a>
    </nav>
  );
};

export default Navbar;