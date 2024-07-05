// controllers/bookingController.js
// bookingController.js
const Booking = require('../models/Booking.model');

exports.bookHotel = async (req, res) => {
    const { name, email, checkInDate, checkOutDate, roomType, numberOfGuests } = req.body;
    
    try {
        // Logic to calculate price and assign room number
        const price = calculatePrice(roomType, checkInDate, checkOutDate);
        const roomNumber = assignRoomNumber(roomType);
        const location = getHotelLocation(roomType);

        const booking = new Booking({ name, email, checkInDate, checkOutDate, roomType, numberOfGuests, price, roomNumber, location });
        await booking.save();
        
        res.status(201).json({ msg: 'Booking confirmed', booking: { roomNumber, price, location } });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

// Helper functions for calculating price, assigning room number, and getting location
function calculatePrice(roomType, checkInDate, checkOutDate) {
    // Implement your price calculation logic based on room type and booking dates
    return 150; // Example price
}

function assignRoomNumber(roomType) {
    // Implement logic to assign a room number based on availability or other criteria
    return 'A101'; // Example room number
}

function getHotelLocation(roomType) {
    // Implement logic to get the hotel location based on room type or other criteria
    return 'City Center'; // Example location
}
