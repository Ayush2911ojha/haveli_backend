// routes/hotelRoutes.js
const express = require('express');
const router = express.Router();
const hotelController = require('../controllers/hotelController');

// Add a new hotel
router.post('/', hotelController.addHotel);

// Get all hotels
router.get('/', hotelController.getHotels);

// Update a hotel
router.put('/:id', hotelController.updateHotel);

// Delete a hotel
router.delete('/:id', hotelController.deleteHotel);

module.exports = router;
