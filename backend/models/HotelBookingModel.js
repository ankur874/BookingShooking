const mongoose = require('mongoose');


const hotelBookingSchema = mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    // user_id
    // number_of_tables
    // types of tables
    hotel_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    booked_rooms: {
        type: Number,
        required: true
    }
})
const HotelBooking = mongoose.model('HotelBooking', hotelBookingSchema)

module.exports = HotelBooking;