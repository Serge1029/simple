const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const locationSchema = new Schema({
    coordinates: {
        lat: {
            type: String,
            required: true
        },
        long: {
            type: String,
            required: true
        }
    },
    address: String
});

module.exports = mongoose.model('locations', locationSchema);