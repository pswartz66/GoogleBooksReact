import React, { Component } from 'react';
import Jumbotron from '../components/Jumbotron';
import SearchBar from '../components/SearchBar';
// import SearchBtn from '../components/SearchBtn';
import Results from '../components/Results';
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

    // call loadBooks fn on DidMount 
    // to display current books in database
    componentDidMount = () => {
        this.loadBooks();
        
    }

    // load books fetches the books from google books API
    // and sets state to the data as an array
    loadBooks = () => {
        API.getBooks()
            .then(res => this.setState({ books: res.data })
            ).catch(err => {
                if (err) {
                    console.log(err);
                }
            }
        )
    }

    logBooks = () => {
        console.log(this.books);
    }
    // event handler for typing a letter into the
    // input form
    handleInputChange = (event) => {
        const value = event.target.value
        this.setState({
            searchInput: value
        })
        console.log(value);
    }

    // event handler for onclik of submit button in form
    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state.searchInput);
        API.searchBooks(this.state.searchInput)
            .then(res => this.setState({
                books: res.data.items
            }))
            .catch(err => console.log(err)
        )
    }

    // function for saving book to the "/api/books" route
    saveBook = (event) => {
        event.preventDefault();
        let booksArr = [];
        const id = event.target.getAttribute('id');
        console.log(id);
        // console.log(this.state.books);
        for (let i = 0; i < this.state.books.length; i++) {
            if (id === this.state.books[i].id) {
                booksArr.push([this.state.books[i].volumeInfo.title,
                               this.state.books[i].volumeInfo.authors,
                               this.state.books[i].volumeInfo.description,
                               this.state.books[i].volumeInfo.infoLink,
                               this.state.books[i].volumeInfo.imageLinks.thumbnail,
                               this.state.books[i].volumeInfo.publishedDate,
                               this.state.books[i].id
                            ]);
                console.log(booksArr);
            }
        }

        API.saveBook({ booksArr })
            .then(res => console.log(res))
            .catch(err => console.log('error code' + err))
    };


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
                {/* Map through books array in state
                    and pass props to results component */}
                {this.state.books.map(book => (
                    <Results
                        key={book.id}
                        title={book.volumeInfo.title}
                        authors={(!book.volumeInfo.authors) ? "No author listed" : book.volumeInfo.authors.join(', ')}
                        description={(!book.volumeInfo.description) ? "No description available" : book.volumeInfo.description}
                        link={(!book.volumeInfo.infoLink) ? "No link available" : book.volumeInfo.infoLink}
                        image={(!book.volumeInfo.imageLinks) ? "No image available" : book.volumeInfo.imageLinks.thumbnail}
                        date={(!book.volumeInfo.publishedDate) ? "No date available" : book.volumeInfo.publishedDate}
                        id={book.id}
                    // add an onclick to save the book to the DB
                        onClick={this.saveBook}
                    />
                ))}
            </div>
        )
    }
}

export default Search;

