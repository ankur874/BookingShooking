const mongoose = require('mongoose');


const restrauntBookingSchema = mongoose.Schema({
   user_id: {
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
   },
   type4: {
      type: String,
      count: Number,
      required: true
   },
   // user_id
   // number_of_tables
   // types of tables
   restraunt_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true
   }
})

const RestrauntBooking = mongoose.model('RestrauntBooking', restrauntBookingSchema)
module.exports = RestrauntBooking;
