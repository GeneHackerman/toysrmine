const { Router } = require('express');
const router = Router();
const controllers = require('../../controllers/comment-controller');

// /api/comments/<figureId>
router.get('/comments', controllers.getComments);
// router.route('/:figureId').post(addComment);

// // /api/comments/<figureId>/<commentId>
// router
//     .route('/:figureId/:commentId')
//     .put(addReply)
//     .delete(removeComment);

// // /api/comments/<pizzaId>/<commentId>/<replyId>
// router.route('/:figureId/:commentId/:replyId').delete(removeReply);


module.exports = router;

// add middelware for app.use() 