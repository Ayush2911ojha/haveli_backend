// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    id: String,
    username: String,
    email: String,
    password: String
});

module.exports = mongoose.model('User', userSchema);
