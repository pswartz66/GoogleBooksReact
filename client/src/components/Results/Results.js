import React from 'react';
// import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import './Results.css'

const Results = (props) => {

    return (
        <Container className="card-container">
            <div className="card" id={props.id}>
                <div className="card-header">
                <img alt={`${props.id} -img`} src={props.image}/>
                    {props.title}
                </div>
                <div className="card-body">
                    <h5 className="card-title">Authors: {props.authors}</h5>
                    <hr></hr>
                    <p className="card-text">{props.description}</p>
                    <a href={props.link} className="book-link">For more info about {props.title} click here</a>
                </div>
            </div>
        </Container>
    )

}

export default Results;
