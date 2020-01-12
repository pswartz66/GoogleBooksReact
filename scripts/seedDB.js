const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks");

// to start app run npm run bookSeed to load initial data into db
const bookSeed = [
    {
        title: "To Kill a Mockingbird 40th",
        author: ["Harper Lee"],
        description: "The explosion of racial hate and violence in a small Alabama town is viewed by a little girl whose father defends a Black man accused of rape",
        image: "http://books.google.com/books/content?id=ayJpGQeyxgkC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        infoLink: "http://books.google.com/books?id=ayJpGQeyxgkC&dq=to+kill+a+mockingbird&hl=&source=gbs_api"
    }
]

db.Book
    .remove({})
    .then(() => db.Book.collection.insertMany(bookSeed))
    .then(data => {
        console.log(data.result.n + " records inserted");
        process.exit(0)
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    })

