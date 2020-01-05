import React, { Component } from 'react';
import Jumbotron from '../components/Jumbotron';
import API from '../utils/API';

// Saved Books Page
// Displays results
class Saved extends Component {
    constructor(props){
        super(props);
        this.state = {
            books: []
        }
    }

    componentDidMount = () => {
        this.loadBooks();
    }

    loadBooks = () => {
        API.getBooks()
            .then(res => 
                this.setState({ books: res.data }
            )
        ).catch(err => {
            if(err) {
                console.log(err);
            }
        })
    }


    render () {
        return (
            <div>
            <Jumbotron />

            </div>
        )
    }
}

export default Saved;
