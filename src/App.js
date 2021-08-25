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
          <img src="https://raw.githubusercontent.com/cod-ed/assets/handwrite/handwrite_filled_form.jpg" className='image-container' alt="Filled Form Example"></img>
        </div>
      </Grid>
        <br /> <br />
        Here's the end result!
        <br /> <br />
        <img src="https://raw.githubusercontent.com/cod-ed/assets/handwrite/handwrite_sentence.png" alt="Output Example"></img>
      </div>
  );
}

const About = () => {
  return (
    <div className="subsection" id="about">
      <h1>About</h1>
      <br />
      <div>
        Ever had those long-winded assignments, that the teacher always wants handwritten? Is your written work messy because you think faster than you write? <br /><br /> <i>Wish there was a font for your handwriting?</i> <br /><br /> Handwrite helps you do exactly that! Refer to the <a href="#howtouse">How to Use</a> section for more details.
      </div>
      <br /><br />
      <h2>Why did we build this?</h2>
      <div><br />Handwriting stuff is a struggle, it’s tiring, time consuming and inconsistent but still is a requirement for so many assignments, tests etc. We, as developers, love to type on our keyboard far more than writing and it’s practical, isn’t it? 
      So we decided to build something that can help us type out our writing. Being experienced in Python and wanting to learn Image Processing, this was the perfect project, so we got started!
      </div>
      <br /><br />
      <h2>Want to Contribute?</h2>
      <div><br />We &#9829; open-source! <br /> We look forward to your contributions! Don’t shy away if you are a beginner, we are happy to help you get started. <br /><br />
      <div className="about-list"><ul>
      The following repositories help handwrite work: <br/><br/>
        <li><a href="https://github.com/cod-ed/handwrite">Handwrite:</a> Core Handwrite project build with Python. It also features a CLI interface for handwrite. (Python) <br/> You can get started with how core handwrite works <a href="https://cod-ed.github.io/handwrite/">here.</a></li><br />
        <li><a href="https://github.com/cod-ed/handwrite-web">Handwrite Web:</a> Frontend of handwrite web. (React)</li><br />
        <li><a href="https://github.com/cod-ed/handwrite-server">Handwrite Server:</a> Backend for handwrite, hosted on heroku. (Python, Flask)</li><br />
      </ul>
      </div>
      </div>
    </div>
  );
}


function Handwrite() {
  return (
    <div className="handwrite" id="home">
      <img src={logo} alt="handwrite logo" className="Handwrite-Logo" />
      <Navbar />
      <Home />
      <br/>
      <About />
      <hr className="divider"/>
      <br />
      <HowToUse />
      <div className="bottom-container">
      </div>
    </div>
  );
}

export default Handwrite;
