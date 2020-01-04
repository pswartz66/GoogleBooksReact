import React from 'react';

const Jumbotron = ({ children }) => {

    return (
        <div style={{ height: 200, clear: "both", paddingTop: 120, textAlign: "center" }}
            className="jumbotron"
        >
            (React) Google Books Search
            Search for and Save Books of Interest
            {children}
        </div>
    )

}

export default Jumbotron;