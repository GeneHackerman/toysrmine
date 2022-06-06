const { Schema, model, Types, trusted } = require('mongoose');

const ReplySchema = new Schema (
{
    // set custom ID to avoid confusion with parent comment's _id field
    replyId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
    },
    replyBody: {
        type: String,
        required: true,
        trim: true
    },
    writtenBy: {
        type: String,
        required: true
    },
    },
    {
        timeStamps: true
    },
    {
        toJSON: {
            getters: true
        }
    }
    
);

const CommentSchema = new Schema (
{
    writtenBy: {
        type: String,
        required: true
    },
    commentBody: {
        type: String,
        required: true,
        trim: true
    },
    // use ReplySchema to validate data for a reply
    replies: [ReplySchema],
   },
   {
    timeStamps: true
   },
   {
    toJSON: {
        virtuals: true,
        getters: true
    },
    id: false
   }
);

CommentSchema.virtual('replyCount').get(function() {
    return this.replies.length;
});

const Comment = model('Comment', CommentSchema);

module.exports = Comment;