const mongoose = require('mongoose');

const pinSchema = new mongoose.Schema({
    user: {
        type: String,
        required: true
    },
    isViolent: Boolean,
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
    address: String //We may use a third party to convert lat and long to an address if leaflet doesn't include addresses.
    //We may convert address to an object containing more information such as state, city, etc. to allow more refined filtering.
});

module.exports = {
    Pin: mongoose.model('pins', pinSchema),
    pinSchema
};