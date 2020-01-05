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

    componentDidMount = () => {
        this.loadBooks();
    }

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

    handleInputChange = (event) => {
        const value = event.target.value
        this.setState({
            searchInput: value
        })

        console.log(value);
    }

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

            
                    {this.state.books.map(book => (

                        <Results
                            key={book.id}
                            title={book.volumeInfo.title}
                            authors={(!book.volumeInfo.authors) ? "" : book.volumeInfo.authors.join(' ')}
                            description={(!book.volumeInfo.description) ? "No description available" : book.volumeInfo.description}
                            link={(!book.volumeInfo.infoLink) ? "No link available" : book.volumeInfo.infoLink}
                            image={(!book.volumeInfo.imageLinks) ? "No image available" : book.volumeInfo.imageLinks.thumbnail} 
                            date={(!book.volumeInfo.publishedDate) ? "No date available" : book.volumeInfo.publishedDate}
                        // add an onclick to save the book to the DB
                        />

                    ))}

            </div>
        )
    }
}

export default Search;

