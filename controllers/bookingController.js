// controllers/bookingController.js
const Booking = require('../models/Booking.model');

exports.bookHotel = async (req, res) => {
    const { user, hotel, checkInDate, checkOutDate, roomType, numberOfGuests, price, roomNumber, location } = req.body;
    try {
        const booking = new Booking({ user, hotel, checkInDate, checkOutDate, roomType, numberOfGuests, price, roomNumber, location });
        await booking.save();
        res.status(201).json({ msg: 'Booking confirmed', booking });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};
