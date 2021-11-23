const mongoose = require('mongoose');


const Restraunt_Booking = mongoose.Schema({
     user_id:{ 
        id: mongoose.Schema.Types.ObjectId,
        required:true
     },
     type1:{
        name:String,
        count:Number,
        required:true
     },
     type2:{
        name:String,
        count:Number,
        required:true
     },
     type3:{
        name:String,
        count:Number,
        required:true
     },
     type4:{
        name:String,
        count:Number,
        required:true
     },
     // user_id
     // number_of_tables
     // types of tables
     restraunt_id:{
         type:mongoose.Schema.Types.ObjectId,
         required:true
     }
})

module.exports = Restraunt_Booking;
