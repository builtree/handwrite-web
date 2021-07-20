import React from 'react';

const Navbar = () => {
    return (
        <div className="flexbox-container">
            <div><a href="#home">‎<button>Home</button></a></div>
            <div><a href="#howtouse"><button>How To Use?</button></a></div>
            <div><a href="#about"><button>‏‏‎About‎‏‏‎‎</button></a></div>
            <div><a href="https://cod-ed.github.io/handwrite" target="_blank"><button>Documentation</button></a></div>
        </div>
    );
}

export default Navbar;