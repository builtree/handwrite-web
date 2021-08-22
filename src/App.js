import logo from './assets/logo.svg';
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Grid from '@material-ui/core/Grid';
import Navbar from './Navbar';
import Home from './Home.js';

const HowToUse = () => {
  return (
    <div className="subsection" id="howtouse">
      <h1>How To Use?</h1>
      <br /> <br />
      <Grid container direction="row" justify="space-around" alignItems="center">
        <div align='left'>
          <h2>Creating your Handwritten Sample</h2>
          <br />
          <ol type="1">
            <li> Take a printout of the <a href='https://github.com/cod-ed/handwrite/raw/dev/handwrite_sample.pdf'>sample form</a>.</li> <br />
            <li> Fill the form using the reference image.</li> <br />
            <li> Scan the filled form using a scanner, or any scanning application on your phone.</li> <br />
            <li> Save the scan in JPEG format.</li> <br />
          </ol>
          <br /> <br />
          <h2>Creating your font</h2>
          <br />
          <ol type="1">
            <li>Upload the scanned JPEG image <a href='#home'>above</a>.</li> <br />
            <li>Fill the form with the desired font details and click the CREATE FONT button.</li> <br />
            <li>Wait for a few seconds and download your TTF font. (If an error occurs try again with a new scan)</li> <br />
            <li>Install the font in your system!</li> <br />
          </ol>
        </div>
        <div>
          Your form should look like this:
          <br /> <br />
          <img src="https://raw.githubusercontent.com/cod-ed/assets/handwrite/handwrite_filled_form.jpg" className='image-container'></img>
        </div>
      </Grid>
        <br /> <br />
        Here's the end result!
        <br /> <br />
        <img src="https://raw.githubusercontent.com/cod-ed/assets/handwrite/handwrite_sentence.png"></img>
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
