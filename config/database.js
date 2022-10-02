const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/flights');

// mongoose.connection object
const db = mongoose.connection;

db.on('connected', function() {
    console.log(`Connected to MondoDB at ${db.host}:${db.port}`);
});