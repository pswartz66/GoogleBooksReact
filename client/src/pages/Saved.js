import React, { Component } from 'react';
import Jumbotron from '../components/Jumbotron';
import API from '../utils/API';

// Saved Books Page
// Displays results
class Saved extends Component {
    constructor(props){
        super(props);
        this.state = {
            books: [],
            searchInput: ""
        }
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({ 
            [name]: value
        })

        console.log(value);
    }

    handleSearchSubmit = event => {
        event.preventDefault();
        API.searchBooks(this.state.searchInput)
            .then((req, res) => this.setState({
                books: res.data.items
            })
            .catch(err => {
                if(err){
                    console.log(err);
                }
            })
        )
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
