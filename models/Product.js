const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

// required field allows for custom message
const FigureSchema = new Schema(
    {
    figureName: {
        type: String,
        required: 'You need to provide a figure name!',
        trim: true
    },
    createdBy: {
        type: String,
        required: 'Please provide a name!',
        trim: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (createdAtVal) => dateFormat(createdAtVal)
    },
    brand: {
        type: String,
        required: true,
        enum: ['SH Figuarts', 'MAFEX', 'PlayArtsKai'],
        default: 'MAFEX'
    },
    comments: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Comment'
        }
    ]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);

// get total count of comments and replies on retrieval
FigureSchema.virtual('commentCount').get(function() {
    return this.comments.reduce((total, comment) => total + comment.replies.length + 1, 0);
});

// create the pizza model using the PizzaSchema
const Figure = model('Figure', FigureSchema);

// exports the Pizza model
module.exports = Figure;