import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import MissionAndVision from './components/MissionAndVision';
import News from './components/News';
import ProductsAndServices from './components/ProductsAndServices';
import Career from './components/Career';
import ContactInfo from './components/ContactInfo';
import CodesAndStandards from './components/CodesAndStandards';
import PictureAndVideo from './components/PictureAndVideo';
import Home from './components/Home'; 

const App = () => {
  return (
    <div>
      <style>
        {`
          body {
            margin:  0;
            padding:  0;
            font-family: Arial, sans-serif;
            background-color: #003366; /* Dark ocean blue */
            color: #FFFFFF; /* White text for contrast */
          }

          @keyframes fadeIn {
            from {
              opacity:  0;
            }
            to {
              opacity:  1;
            }
            @keyframes fadeIn {
              from {
                opacity:  0;
              }
              to {
                opacity:  1;
              }
            }
          }
        `}
      </style>
      <Navbar />
      <Home/>
      <About />
      <MissionAndVision />
      <News />
      <ProductsAndServices />
      <CodesAndStandards />
      <PictureAndVideo />
      <Career />
      <ContactInfo />
    </div>
  );
};

export default App;