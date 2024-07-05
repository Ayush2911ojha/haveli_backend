// models/Hotel.js
const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({
    id: Number,
    name: String,
    mainImage: String,
    details: String,
    facilities: {
        rooms: String,
        washroom: String
    },
    moreImages: [String],
    pricing: Number
});

module.exports = mongoose.model('Hotel', hotelSchema);
