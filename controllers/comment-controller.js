const Comment = require('../models/Comment');
const db = require('../db');

db.on('error', console.error.bind(console, 'mongoDB connection error'));

const getComments = async(req, res) => {
    try {
        const comments = await Comment.find();
        res.json(comments);
    } catch(error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { getComments };