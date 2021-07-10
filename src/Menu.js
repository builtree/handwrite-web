import { Button } from '@material-ui/core';
import { useState } from 'react';
import Grid from '@material-ui/core/Grid'
import React from 'react';

// gunicorn "app:create_app()" --log-level debug --timeout 90 --workers 2 --max-requests 10 --config config.py

const Menu = () => {
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [font, setFont] = useState("");
    const [fetching, setFetching] = useState(false);

    function sendImage(event) {
        event.preventDefault();
        let formData = new FormData();
        formData.append("image", event.target.inputfile.files[0]);
        var stat = -1;
        var path;
        var font_url;
        setFetching(true);
        fetch(
            "http://localhost:8000/handwrite/input",
            {
                method: 'POST',
                body: formData
            }
        ).then((r) => r.json()).then(async (data) => {
            path = data.path;
            for (let i = 0; i < 10; i++) {
                fetch("http://localhost:8000/handwrite/status/" + path).then((r) => r.json()).then((status) => {
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
                    "http://localhost:8000/handwrite/fetch/" + path,
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
        <div className="menu">
            <form onSubmit={(e) => sendImage(e)}>
                <Grid container direction="row" justify="space-around" alignItems="center">
                    <div className="input-image">
                        <img src={image} />
                    </div>
                    <div>
                        <label id="image">Upload Image: </label>
                        <input name="inputfile" id="contained-button-file" type="file" value={name} onChange={(e) => {
                            setName(e.target.value);
                            setImage(URL.createObjectURL(e.target.files[0]));
                        }} accept="image/*" ></input>
                        <br/>
                        <br/>
                        <br/>
                        <Button type="submit" variant="outlined" disabled={fetching}>Create Font!</Button>
                        &emsp;&emsp;&emsp;
                        <Button variant="outlined" href={font} download="font.ttf" style={{display: Boolean(font) ? "" : "none"}}>Download your font</Button>
                    </div>
                </Grid>
            </form>
            <br/>
            <br/>
        </div>
    );
}

export default Menu;