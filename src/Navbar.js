import React, { useState } from 'react';
import Popup from './Popup';
import navdata from './navdata';
const Navbar = () => {
    const [popup, setPopup] = useState(false);
    const handlePopup = () => {
        return setPopup(true);
    }
    return (
        // <nav className="navbar">
        <div className="flexbox-container">
            <div><button onClick={() => handlePopup()}>‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎About ‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎</button></div>
            <div><button onClick={() => handlePopup()}>How To Use?</button></div>
            <div><button onClick={() => handlePopup()}>Documentation</button></div>
            {
                popup === true ? <Popup hide={() => setPopup(false)} /> : ''
            }
        </div>
        // </nav>

    );
}

export default Navbar;