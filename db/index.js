const mongoose = require('mongoose');

// Q: localhost can be changed? using this as starter code
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/thecollector', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('successfully connected to mongoDB')
).catch( e => console.error('does not fucking work!', e.message));



// use this to log mongo queries being executed!
mongoose.set('debug', true);

const db = mongoose.connection;

module.exports = db;

// node seed/figure.js