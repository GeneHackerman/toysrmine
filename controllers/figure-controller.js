const { Figure } = require('../models');

const figureController = {
    // the functions will go in here as methods
    // get all figures
    getAllFigure(req, res) {
        Figure.find({})
            .populate({
                path: 'comments',
                select: '-__v'
            })
            .select('-__v')
            .sort({ _id: -1 })
            .then(dbFigureData => res.json(dbFigureData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },

    // get on Figure by id
    getFigureById({ params }, res) {
        Figure.findOne({ _id: params.id })
            .populate({
                path: 'comments',
                select: '-__v'
            })
            .select('-__v')
            .then(dbFigureData => {
                // if no Figure is found, send 404
                if (!dbFigureData) {
                    res.status(404).json({ message: 'No figure found with this id!' });
                    return;
                }
                res.json(dbFigureData);
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },

    // create Figure
    createFigure({ body }, res) {
        Figure.create(body)
            .then(dbFigureData => res.json(dbFigureData))
            .catch(err => res.status(400).json(err));
    },

    // update Figure by id
    // findOneAndUpdate will find single document to update
    // setting new to true will return new ver of doc
    // validation set for updateFigure
    updateFigure({ params, body }, res) {
        Figure.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true })
            .then(dbFigureData => {
                if (!dbFigureData) {
                    res.status(404).json({ message: 'No figure found with this id!' });
                    return;
                }
                res.json(dbFigureData);
            })
            .catch(err => res.status(400).json(err));
    },

    // delete Figure
    // findOneAndDelete() will retrun doc and delete
    deleteFigure({ params }, res) {
        Figure.findOneAndDelete({ _id: params.id })
            .then(dbFigureData => {
                if (!dbFigureData) {
                    res.status(404).json({ message: 'No figure found with this id!' });
                    return;
                }
                res.json(dbFigureData);
            })
            .catch(err => res.status(400).json(err));
    }
}

module.exports = figureController;