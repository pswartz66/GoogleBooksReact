import React from 'react';

const Jumbotron = ({ children }) => {

    return (
        <div style={{ height: 200, paddingTop: 60, textAlign: "center"}}
            className="jumbotron"
        >
            <h3>(React) Google Books Search</h3>
            Search for and Save Books of Interest
            {children}
        </div>
    )
}

export default Jumbotron;