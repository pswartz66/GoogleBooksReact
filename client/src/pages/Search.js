import React, { Component } from 'react';
import Jumbotron from '../components/Jumbotron';
import SearchBar from '../components/SearchBar';
import SearchBtn from '../components/SearchBtn';
import API from '../utils/API';

// Book Search Page
// Holds axios function calls
class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            books: [],
            searchInput: ""
        }
    }

    componentDidMount = () => {
        this.loadBooks();
    }

    handleInputChange = event => {
        const { searchInput, value } = event.target;
        this.setState({ 
            searchInput: value
        })

        console.log(value);
    }

    handleSubmit = event => {
        event.preventDefault();
        console.log('this is full search input' + this.state.searchInput);
        API.searchBooks(this.state.searchInput)
            
            .then(res => this.setState({
                books: res
            })
            .catch(err => {
                if(err){
                    console.log(err);
                }
            })
        )
    }

    loadBooks = () => {
        API.getBooks()
            .then(res => this.setState({ books: res.data })
            ).catch(err => {
                if(err){
                    console.log(err);
                }
            }
        )
    }
    

    render = () => {
        return (
            <div>
            <Jumbotron />
            <SearchBar 
                name="searchInput"
                value={this.state.searchInput}
                onChange={this.handleInputChange}
                onClick={this.handleSubmit}
                />

            {/* <SearchBtn /> */}
            {/* Results component here */}
            </div>
        )
    }
}

export default Search;

