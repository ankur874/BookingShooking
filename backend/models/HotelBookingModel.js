const mongoose = require('mongoose');


const Hotel_Bookings = mongoose.Schema({
    user_id:{ 
       id: mongoose.Schema.Types.ObjectId,
       required:true
    },
    // user_id
    // number_of_tables
    // types of tables
    hotel_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
    booked_rooms:{
        type:Number,
        required:true
    }
})

module.exports = Hotel_Bookings;