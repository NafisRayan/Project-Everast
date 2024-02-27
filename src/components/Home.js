import React from 'react';

const Home = () => {
  const homeStyles = {
    position: 'relative',
    width: '100vw',
    height: '100vh',
    backgroundImage: 'url(https://e0.pxfuel.com/wallpapers/470/518/desktop-wallpaper-mount-everest-for-background.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#FFFFFF',
    textShadow: '2px  2px  4px rgba(0,  0,  0,  0.5)',
    textAlign: 'center',
    zIndex:  1,
  };

  const titleStyles = {
    fontSize: '4em',
  };

  return (
    <div style={homeStyles}>
      <h1 style={titleStyles}>Welcome to Everest Technology</h1>
    </div>
  );
};

export default Home;