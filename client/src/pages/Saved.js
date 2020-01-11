import React, { Component } from 'react';
import Jumbotron from '../components/Jumbotron';
import API from '../utils/API';
import SavedResults from '../components/SavedResults';

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

    // load books from "/api/books"
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

    // delete a book from "/api/books/:id" route
    // then reload books from "/api/books"
    deleteBook = (id) => {
        API.deleteBook(id)
            .then(res => this.loadBooks())
            .catch(err => console.log(err))
    }


    render () {
        return (
            <div>
            <Jumbotron />
            {/* Map through books array in state
            and pass props to results component */}
                {this.state.books.map(book => (
                    <SavedResults
                        key={book._id}
                        title={book.title}
                        authors={(!book.authors) ? "No author listed" : book.authors.join(', ')}
                        description={(!book.description) ? "No description available" : book.description}
                        link={(!book.infoLink) ? "No link available" : book.infoLink}
                        image={(!book.image) ? "No image available" : book.image}
                        date={(!book.date) ? "No date available" : book.date}
                        id={book._id}
                    // add an onclick to delete the book from the DB
                        onClick={this.deleteBook(book._id)}
                    // <DeleteBtn onClick={() => this.deleteBook(book._id)} />
                    />
                ))}

            </div>
        )
    }
}

export default Saved;
