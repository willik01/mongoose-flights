const mongoose = require('mongoose');
//shortcut to mongoose.Schema class
const Schema = mongoose.Schema;

const flightSchema = new Schema ({
    airline: {
        type: String, 
        // required: true, 
        enum: ['American', 'Southwest', 'United'],
    },
    airport: {
        type: String, 
        // required: true, 
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
    },
    flightNo: {
        type: Number, 
        required: true,
        min: 10, 
        max: 9999,
    },
    departs: {
        type: Date, 
        default: function(){
            // return doc.createdAt  //how to use 'create date'?
            var d = new Date()
            d = d.setFullYear(d.getFullYear() + 1);
            return d;
        },
    }
}, {
   timestamps: true  
});

module.exports = mongoose.model('Flight', flightSchema);