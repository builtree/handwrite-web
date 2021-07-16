import logo from './logo.svg';
import Menu from './Menu';
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import Mainform from './Mainform.js';
import About from './About';
import Howtouse from './howtouse';

function Handwrite() {
  return (
    <div className="handwrite" id="Home">
      <img src={logo} alt="handwrite logo" className="Handwrite-Logo" />
      <Navbar />
      <Mainform />
      {/* <div className="input-form">
        <Menu />
      </div> */}
      <About />
      <Howtouse />
      <div className="bottom-container">
      </div>
    </div>
  );
}

export default Handwrite;
