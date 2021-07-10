import logo from './logo.svg';
import Menu from './Menu';
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import Mainform from './Mainform.js';

function Handwrite() {
  return (
    <div className="handwrite">
      <img src={logo} alt="handwrite logo" className="Handwrite-Logo" />
      <Navbar />
      <Mainform />
      {/* <div className="input-form">
        <Menu />
      </div> */}
    </div>
  );
}

export default Handwrite;
