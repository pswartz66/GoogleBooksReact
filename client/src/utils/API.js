
import dotenv from 'dotenv';
import axios from 'axios';
const BookSearchURL = 'https://www.googleapis.com/books/v1/volumes?q='
const key = dotenv.key;


export default {
    // Search for books
    searchBooks: (query) => {
        console.log(BookSearchURL + query + key)
        return axios.get(BookSearchURL + query + key);
    },

    // Get all books
    getBooks: () => {
        return axios.get(BookSearchURL + "/api/books");
    },
    // Saves a book to the database
    saveBook: (bookData) => {
        return axios.post("/api/books", bookData);
  }
};