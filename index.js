const express = require('express');
const connectDB = require('./config/db');

const app = express();
const port = 8080;

// Connect to database
connectDB();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/bookings', require('./routes/bookingRoute'));
app.use('/api/hotels', require('./routes/hotelRoute'));

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});