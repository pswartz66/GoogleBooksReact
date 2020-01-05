import React from 'react';
// import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

const Results = (id, title, authors, description, link, image, date) => {

    return (
        <Container>
            <div className="card" id={id}>
                <div className="card-header">
                    Featured
                </div>
                <div className="card-body">
                    <h5 className="card-title">Special title treatment</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    
                </div>
            </div>
        </Container>
    )

}

export default Results;
