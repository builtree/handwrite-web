import logo from './assets/logo.svg';
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import Home from './Home.js';

const HowToUse = () => {
  return (
    <div className="subsection" id="howtouse">
      <h1>How To Use?</h1>
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
    <div className="subsection" id="about">
      <h1>About</h1>
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
    <div className="handwrite" id="home">
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
