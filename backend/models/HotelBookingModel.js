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
     type1: {
        type: String,
        count: Number,
        required: true
     },
     type2: {
        type: String,
        count: Number,
        required: true
     },
     type3: {
        type: String,
        count: Number,
        required: true
     }
})
const HotelBooking = mongoose.model('HotelBooking', hotelBookingSchema)

module.exports = HotelBooking;