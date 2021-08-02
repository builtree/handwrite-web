import logo from './assets/logo.svg';
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import Home from './Home.js';

const HowToUse = () => {
  return (
    <div className="subsection" id="howtouse">
      <h1>How To Use?</h1>
      <div align="left" style= {{ padding:"5%" }}>
        <h2>Creating your Handwritten Sample</h2>
        <br />
        <ol type="1">
          <li> Take a printout of the sample form.</li> <br />
          <li> Fill the form using the image below as a reference.</li> <br />
          <li> Scan the filled form using a scanner, or Adobe Scan in your phone.</li> <br />
          <li> Save the .jpg image in your system.</li> <br />
        </ol>
        Your form should look like this:
        <br /> <br />
        <img src="https://raw.githubusercontent.com/cod-ed/assets/handwrite/handwrite_filled_form.jpg" 
          className="image-container"></img>
        <br /> <br />

        <h2>Creating your font</h2>
        <br />
        <ol type="1">
          <li>Upload the scanned .jpg image in the form above.</li> <br />
          <li>Fill the form with the desired font details and click the CREATE FONT button.</li> <br />
          <li>Wait a few seconds while your font is being generated. A DOWNLOAD FONT button will 
            appear, just click on it and your font will get downloade.!</li> <br />
          <li>Select your font in your word processor and get to work!</li> <br />
        </ol>

        Here's the end result!
        <br /> <br />
        <img src="https://raw.githubusercontent.com/cod-ed/assets/handwrite/handwrite_sentence.png"></img>
      </div>
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
