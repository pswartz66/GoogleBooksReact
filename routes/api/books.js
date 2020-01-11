const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// Matches with "/api/books" -> see utils/API.js
router.route("/")
    .get(booksController.findAll)
    .post(booksController.create);

// API route to remove a book by id
// Matches with "/api/books/:id"  -> see utils/API.js
router.route("/:id")
    .get(booksController.remove);

module.exports = router;