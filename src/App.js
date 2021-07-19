import logo from './assets/logo.svg';
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import Home from './Home.js';

const HowToUse = () => {
  return (
    <div className="body">
      <h1 className="Howtouse-Title" id="Howtouse">How To Use?</h1>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>

  );
}

const About = () => {
  return (
    <div className="body">
      <h1 className="About-Title" id="About"> About </h1>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>

  );
}

function Handwrite() {
  return (
    <div className="handwrite">
      <img src={logo} alt="handwrite logo" className="Handwrite-Logo" />
      <Navbar />
      <Home />
      <About />
      <HowToUse />
      <div className="bottom-container">
      </div>
    </div>
  );
}

export default Handwrite;
