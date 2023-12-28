const mongoose = require('mongoose'); // Importing the Mongoose library for MongoDB

const tourSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'A Tour Must Have a Name'],
        unique: true
    },
    rating: {
        type: Number,
        default: 4.5
    },
    price: {
        type: Number,
        required: [true, 'A Tour Must Have a Price']
    }
});

// Create a Mongoose model named 'Tour' based on the defined schema 
const Tour = mongoose.model('Tour', tourSchema);

module.exports= Tour;