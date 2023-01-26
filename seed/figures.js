const db = require('../db');

const Figure = require('../models/Figure');

//turns db on and connects
db.on('error', console.error.bind(console, 'mongoDB connection error:'));

// async will allow for data input 
const createFigure = async() => {
    const figures = [
        {
            "figureName": "The Mandalorian",
            "releaseDate": "07/29/2021",
            "figureScale": "1/12",
            "category": "Action Figures",
            "manufacturer": "Medicom",
            "createdBy": "DS"
        },
        {
            "figureName": "Boba Fett(Return of the Jedi Ver.)",
            "releaseDate": "11/25/2016",
            "figureScale": "1/12",
            "category": "Action Figures",
            "manufacturer": "Medicom",
            "createdBy": "BobaFettish"
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

// node seed figures.js 
