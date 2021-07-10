import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { CloudUploadOutlined } from '@material-ui/icons';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import { HighlightOffOutlined } from '@material-ui/icons';
import Container from '@material-ui/core/Container';


function Mainform(props) {
  const [image, setImage] = useState(["", null]);
  const [font, setFont] = useState("");
  const [fetching, setFetching] = useState(true);
  const {
    getInputProps,
    acceptedFiles,
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
      "http://127.0.0.1:8000/handwrite/input",
      {
        method: 'POST',
        body: formData
      }
    ).then((r) => r.json()).then(async (data) => {
      path = data.path;
      for (let i = 0; i < 10; i++) {
        fetch("http://127.0.0.1:8000/handwrite/status/" + path).then((r) => r.json()).then((status) => {
          if (status.status === 0) {
            console.log("Font file ready!");
            stat = 0;
          }
        })
        console.log(stat);
        if (stat === 0) {
          break;
        }
        await new Promise(r => setTimeout(r, 5000));
      }
    }).then(() => {
      if (stat === 0) {
        fetch(
          "http://127.0.0.1:8000/handwrite/fetch/" + path,
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
    <div>
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
          <div className="submit-form">
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

  export default Mainform;