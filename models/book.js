const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

// our bookSchema, --> what the mongo db will look like
const bookSchema = new Schema ({
    title: {
        type: String,
        required: true
    },
    author: { 
        type: String,
        required: true
    },
    description: {
        type: String
    },
    image: {
        type: String
    },
    infoLink: {
        type: String
    }
})

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
