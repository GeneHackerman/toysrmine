const router = require('express').Router();
const commentRoutes = require('./comment-routes');
const figureRoutes = require('./figure-routes');

// add prefix of `/figures` to routes created in `figure-routes.js`
router.use('/comments', commentRoutes);
router.use('/figures', figureRoutes);

module.exports = router;