const db = require('../db');

const Comment = require('../models/Comment');

//turns db on and connects
db.on('error', console.error.bind(console, 'mongoDB connection error:'));

const createComment = async() => {
    const comments = [
        {
            "writtenBy": "ComicBookGuy",
            "commentBody": "Worst figure ever."
        }
    ]
    await Comment.insertMany(comments);

    console.log('successfully added comment');
};

const run = async() => {
    await createComment();
    db.close();
}; 

run();

// node seed comments.js 