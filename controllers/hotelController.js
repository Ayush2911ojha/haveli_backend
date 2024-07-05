// controllers/hotelController.js
const Hotel = require('../models/Hotel.model');

exports.addHotel = async (req, res) => {
    const { name, location, rooms, pricePerNight } = req.body;
    try {
        const hotel = new Hotel({ name, location, rooms, pricePerNight });
        await hotel.save();
        res.status(201).json({ msg: 'Hotel added', hotel });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.getHotels = async (req, res) => {
    try {
        const hotels = await Hotel.find();
        res.json(hotels);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.updateHotel = async (req, res) => {
    const { name, location, rooms, pricePerNight } = req.body;
    try {
        let hotel = await Hotel.findById(req.params.id);
        if (!hotel) {
            return res.status(404).json({ msg: 'Hotel not found' });
        }
        hotel.name = name || hotel.name;
        hotel.location = location || hotel.location;
        hotel.rooms = rooms || hotel.rooms;
        hotel.pricePerNight = pricePerNight || hotel.pricePerNight;
        await hotel.save();
        res.json({ msg: 'Hotel updated', hotel });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.deleteHotel = async (req, res) => {
    try {
        await Hotel.findByIdAndRemove(req.params.id);
        res.json({ msg: 'Hotel removed' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};
