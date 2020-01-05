import React, { Component } from 'react';
import Jumbotron from '../components/Jumbotron';
import SearchBar from '../components/SearchBar';

// Book Search Page
// Holds axios function calls
class Search extends Component {

    render () {
        return (
            <div>
            <Jumbotron />
            <SearchBar />
            </div>
        )
    }
}

export default Search;

