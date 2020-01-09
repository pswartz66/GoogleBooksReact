const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const app = express();
const PORT = process.env.PORT || 3001;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve static files
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}
// Add routes for API and views
app.use(routes);

// Connect to Mongo
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks");


// Start the Server
app.listen(PORT, function () {
    console.log(`Listening on PORT ${PORT}`);
})