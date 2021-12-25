import React, { useState, useRef } from 'react';
import { API } from './config.js'
import { useDropzone } from 'react-dropzone';
import { CloudUploadOutlined } from '@material-ui/icons';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import Switch from '@material-ui/core/Switch';
import { HighlightOffOutlined } from '@material-ui/icons';

function Home(props) {
  const [image, setImage] = useState(["", null]);
  const [font, setFont] = useState("");
  const [currentState, setCurrentState] = useState(0);
  var state = {
    0: "Not doing anything",
    1: "Image uploaded.",
    2: "Sending image...",
    3: "Generating your font...",
    4: "Fetching your font...",
    5: "Fetched!",
    6: "Error"
  }

  var error = useRef("");

  function validateImage(image) {
    var allowedTypes = ['jpeg', 'jpg', 'png'];
    var message = '';
    if (image.size / 1024 / 1024 > 2) {
      message += 'File size exceeds 2 MiB! ';
    }
    if (!allowedTypes.includes(image.type.split("/")[1])) {
      message += 'File type not supported! Allowed file extensions - ' + allowedTypes.join(", ");
    }
    if (message){
      alert(message);
      return false;
    }
    return true;
  }

  const {
    getRootProps,
    getInputProps,
    open
  } = useDropzone({
    accept: 'image/*',
    noClick: true,
    noKeyboard: true,
    maxFiles: 1,
    onDrop: acceptedFiles => {
      console.log(acceptedFiles[0]);
      if(acceptedFiles[0] && validateImage(acceptedFiles[0])) {
        setImage([URL.createObjectURL(acceptedFiles[0]), acceptedFiles[0]]);
        setCurrentState(1);
      }
    }
  });

  const removeFile = () => {
    setImage(["", null]);
    setCurrentState(0);
  }

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  function sendImage(event) {
    event.preventDefault();
    if (!image[1]) {
      return
    }
    let formData = new FormData();
    var researchOption = document.getElementById("researchOption").checked;
    formData.append("image", image[1]);
    formData.append("research", researchOption);
    var response;
    var status;
    var stat = -1;
    var path;
    var font_url;
    setCurrentState(2);
    fetch(
      API + "/handwrite/input",
      {
        method: 'POST',
        body: formData
      }
    ).then((r) => r.json()).then(async (data) => {
      const response_code = data.response_code
      const message = data.message
      error.current = message;
      if (response_code === 1) {
        setCurrentState(6);
        console.log(message)
      }
      else if (response_code === 2) {
        setCurrentState(6);
        console.log(message)
      }
      else if (response_code === 3) {
        setCurrentState(6);
        console.log(message)
      }
      else if (response_code === 0) {
        setCurrentState(3);
        path = data.path;
        for (let i = 0; i < 10; i++) {
          response = await fetch(API + "/handwrite/status/" + path);
          status = await response.json();
          const status_response = status.status;
          console.log(status_response);
          if (status_response === 0) {
            console.log("Font file ready!");
            stat = 0;
            setCurrentState(4);
          }
          else if (status_response === 1) {
            console.log("Still Processing!");
            stat = -1;
          }
          else if (status_response === 2) {
            console.log("Unable to Process!");
            stat = 2;
            error.current = "Unable to Process!";
            setCurrentState(6);
          }
          else if (status_response === 3) {
            console.log("Not Found!");
            stat = 3;
            error.current = "Not Found!";
            setCurrentState(6);
          }
          await sleep(5000);
          if (stat !== -1) {
            break;
          }
        }
      }
    }).then(() => {
      if (stat === 0) {
        fetch(
          API + "/handwrite/fetch/" + path,
          {
            method: 'POST'
          }
        ).then((r) => r.blob()).then(data => {
          console.log(data);
          font_url = URL.createObjectURL(data);
          console.log(font_url);
          setFont(font_url);
          setCurrentState(5);
        });
      }
    });
  }

  function loading() {
    return [2, 3, 4].includes(currentState);
  }

  return (
    <div>
      <div className="loader" style={{ display: loading() ? "" : "none" }}>
        {state[currentState]}
        <div className="spinner"></div>
      </div>
      <div className="loader" style={{ display: currentState === 6 ? "" : "none" }}>
        <font color="red"> {error.current} </font>
      </div>
      <div className="grid">
        <form onSubmit={(e) => sendImage(e)}>
          <Grid container direction="row" justify="space-around" alignItems="center">
            <div><br />
              <div {...getRootProps({ className: 'dropzone' })} className="image-container"> <input {...getInputProps()} />
                {image[0] ?
                  <div className="input-image">
                    <img src={image[0]} alt="Selected Form" />
                  </div> :
                  <div>
                    <h3>Drag 'n' drop your handwritten sample</h3>
                    <h2>OR</h2>
                    <center><button type="button" onClick={open}><CloudUploadOutlined />
                      ‎ ‎ ‎Choose file
                    </button></center>
                  </div>
                }
              </div>
              {image[1] ?
                <center><h6>{image[1].path}<IconButton aria-label="delete" color="secondary" size="small" onClick={removeFile} disabled={loading()}>
                  <HighlightOffOutlined />
                </IconButton></h6></center> : ""}
            </div>
            <div className="settings-wrap">
              <h2>Font Settings</h2>
              <form>
                <div className="input-wrap">
                  <label className="form-label" for="file-name">File name</label>
                  <input className="form-input" type="text" id="file-name" placeholder="" autoComplete='off' />
                </div>
                <div className="input-wrap">
                  <label className="form-label" for="font-family">Font family</label>
                  <input className="form-input" type="text" id="font-family" autoComplete='off' />
                </div>
                <div className="input-wrap">
                  <label className="form-label" for="font-style">Font style</label>
                  <input className="form-input" type="text" id="font-style" autoComplete='off' />
                </div>
                <br />
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="researchOption" defaultChecked></input>
                  <label className="form-check-label" htmlFor="flexCheckChecked">
                    Opt-in for research use.
                  </label>
                </div>
                <br /><br />
                <div className="submit-button">
                  <Button variant="outlined" href="https://github.com/cod-ed/handwrite/raw/dev/handwrite_sample.pdf">Download Sample Form</Button><br /><br />
                  <Button type="submit" variant="outlined" disabled={loading() || currentState === 0}>
                    CREATE FONT
                  </Button>
                  <br /><br />
                  <Button variant="outlined" href={font} download="font.ttf" style={{ display: Boolean(font) ? "" : "none" }}>Download your font</Button>
                </div>
              </form>
            </div>
          </Grid>
        </form>
      </div>
    </div>
  );
}

export default Home;