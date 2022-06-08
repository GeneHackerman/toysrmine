const db = require('../db');

const Figure = require('../models/Figure');

//turns db on and connects
db.on('error', console.error.bind(console, 'mongoDB connection error:'));

const createFigure = async() => {
    const figures = [
        {
            "writtenBy": "ComicBookGuy",
            "FigureBody": "Worst figure ever."
        }
    ]
    await Figure.insertMany(figures);

    console.log('successfully added figure');
};

const run = async() => {
    await createFigure();
    db.close();
}; 

run();
