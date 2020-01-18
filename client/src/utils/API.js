
/* import dotenv from 'dotenv'; */
import axios from 'axios';
import dotenv from 'dotenv';
const BookSearchURL = 'https://www.googleapis.com/books/v1/volumes?q='
const key = dotenv.key;

export default {
    // Search for books
    searchBooks: function(query) {
        let formatQuery = query.split(' ').join('+');
        console.log(BookSearchURL + formatQuery + key);
        // store in backend after npm run build
        return axios.get(BookSearchURL + formatQuery + key);
    },
    // Get all books
    getBooks: function() {
        return axios.get("/api/books");
    },
    // Get book for a specific id
    getBook: function(id) {
        return axios.get("/api/books/" + id);
    },
    // Saves a book to the database
    saveBook: function(bookData) {
        return axios.post("/api/books", bookData);
    },
    // Delete book from the database
    deleteBook: function(id) {
        return axios.delete("/api/books/" + id);
    }
};