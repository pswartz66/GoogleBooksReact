import React from 'react';
// import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import './SavedResults.css'
import API from '../../utils/API';

const SavedResults = (props) => {

    const deleteBookDB = (id) => {
        API.deleteBook(id)
            .then(res => this.loadBooks())
            .catch(err => console.log(err))
    }


    return (
        <Container className="card-container">
            <div className="card" id={props.id}>
                <div className="card-header">
                    <img alt={`${props.id}-img`} src={props.image} />
                    {props.title}
                </div>
                <div className="card-body">
                    <h6 className="card-title">Authors: {props.authors}</h6>
                    <h6 className="card-title">Date: {props.date}</h6>
                    <hr></hr>
                    <p className="card-text">{props.description}</p>
                    <div className="buttonsDiv">
                        {/* <Button className="btn btn-success viewBtn">
                            <a className="link-text" href={props.link}>
                                View</a>
                        </Button> */}

                        {/* on Save button click, save book to DB */}
                        <Button onClick={() => deleteBookDB(props.id)} variant="danger" className="deleteBtn">
                            Delete
                        </Button>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default SavedResults;
