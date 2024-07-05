// routes/bookingRoutes.js
const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');

// Book a hotel
router.post('/book', bookingController.bookHotel);

module.exports = router;
