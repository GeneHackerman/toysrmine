const router = require('express').Router();
const {
    getAllFigure,
    getFigureById,
    createFigure,
    updateFigure,
    deleteFigure
} = require('../../controllers/figure-controller');

// set up GET all and POST all at /api/figures
router
    .route('/')
    .get(getAllFigure)
    .post(createFigure);


// set up GET one, PUT, and DELETE at /api/figures/:id
router
    .route('/:id')
    .get(getFigureById)
    .put(updateFigure)
    .delete(deleteFigure)


module.exports = router;