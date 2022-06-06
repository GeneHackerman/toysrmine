const express = require('express');
const db = require('./db');
const routes = require('./routes/api');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/api', routes);

db.on('error', console.error.bind(console, 'mongoDB connection error:'));


app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));
