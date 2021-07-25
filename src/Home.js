import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { CloudUploadOutlined } from '@material-ui/icons';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import { HighlightOffOutlined } from '@material-ui/icons';
import sample from './assets/handwrite_sample.pdf';


function Home(props) {
  const [image, setImage] = useState(["", null]);
  const [font, setFont] = useState("");
  const [fetching, setFetching] = useState(true);
  const {
    getInputProps,
    open
  } = useDropzone({
    accept: 'image/*',
    noClick: true,
    noKeyboard: true,
    maxFiles: 1,
    onDrop: acceptedFiles => {
      console.log(acceptedFiles[0]);
      setImage([URL.createObjectURL(acceptedFiles[0]), acceptedFiles[0]]);
      setFetching(false);
    }
  });

  const removeFile = () => {
    setImage(["", null]);
    setFetching(true);
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
    formData.append("image", image[1]);
    var stat = -1;
    var path;
    var font_url;
    setFetching(true);
    fetch(
      "http://handwritetest.herokuapp.com/handwrite/input",
      {
        method: 'POST',
        body: formData
      }
    ).then((r) => r.json()).then(async (data) => {

      const response_code = data.response_code
      const message = data.message
      if (response_code === 1) {
        setFetching(false);
        console.log(message)
      }
      else if (response_code === 2) {
        setFetching(false);
        console.log(message)
      }
      else if (response_code === 3) {
        setFetching(false);
        console.log(message)
      }
      else if (response_code === 0) {
        path = data.path;
        for (let i = 0; i < 10; i++) {
          fetch("http://handwritetest.herokuapp.com/handwrite/status/" + path).then((r) => r.json()).then((status) => {
            const status_response = status.status
            console.log(status_response)
            if (status_response === 0) {
              console.log("Font file ready!");
              stat = 0;
            }
            else if (status_response === 1) {
              stat = -1;
              console.log("Still Processing!");
            }
            else if (status_response === 2) {
              stat = 2;
              console.log("Unable to Process!");
              setFetching(false)
            }
            else if (status_response === 3) {
              stat = 3;
              setFetching(false)
              console.log("Not Found!")
            }
          })
          await sleep(5000);
          if (stat !== -1) {
            break;
          }
        }
      }
    }).then(() => {
      if (stat === 0) {
        fetch(
          "http://handwritetest.herokuapp.com/handwrite/fetch/" + path,
          {
            method: 'POST'
          }
        ).then((r) => r.blob()).then(data => {
          console.log(data);
          font_url = URL.createObjectURL(data);
          console.log(font_url);
          setFont(font_url);
          setFetching(false);
        });
      }
    });
  }

  return (
    <div className="grid">
      <form onSubmit={(e) => sendImage(e)}>
        <Grid container direction="row" justify="space-around" alignItems="center">
          <div><br />
            <div className="image-container"> <input {...getInputProps()} />
              {image[0] ?
                <div className="input-image">
                  <img src={image[0]} />
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
              <center><h6>{image[1].path}<IconButton aria-label="delete" color="secondary" size="small" onClick={removeFile}>
                <HighlightOffOutlined />
              </IconButton></h6></center> : ""}
          </div>
          <div className="submit-button">
            <Button variant="outlined" href={sample} download="https://github.com/cod-ed/handwrite/blob/dev/handwrite_sample.pdf">Download Sample Form</Button><br /><br />
            <Button type="submit" variant="outlined" disabled={fetching}>
              CREATE FONT
            </Button>
            &emsp;&emsp;&emsp;
            <Button variant="outlined" href={font} download="font.ttf" style={{ display: Boolean(font) ? "" : "none" }}>Download your font</Button>
          </div>
        </Grid>
      </form>
    </div>
  );
}

export default Home;