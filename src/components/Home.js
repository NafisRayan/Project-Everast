import React from 'react';

const Home = () => {
  const homeStyles = {
    position: 'relative',
      // width: '100vw',
      height: '100vh',
      padding: '20px',   
      backgroundColor: '#003366', // Dark ocean blue
      borderRadius: '0px',   
      boxShadow: '0   4px   8px   0 rgba(0,0,0,0.2)',  
      transition: 'opacity   1s ease-in-out',
      backgroundImage: `url(https://rare-gallery.com/livewalls/imgpreview/94581-Blue-Night-4k-Moving-Blue-Abstract.jpg)`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      flexDirection: 'column', // Align items vertically
      justifyContent: 'center',
      alignItems: 'auto',
      backgroundRepeat: 'no-repeat',
   };

  const titleStyles = {
    fontSize: '4em',
  };

  return (
    <div id="home" style={homeStyles}>
      <h1 style={titleStyles}>Welcome to Everest Technology</h1>
      <h6 style={{ color: 'white' }}>Everest Technology invites you to embark on a journey toward a more sustainable and secure future. We are more than just a service supplier. We are your collaborative partners in development.</h6>
    </div>
  );
};

export default Home;