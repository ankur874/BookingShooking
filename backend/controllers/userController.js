const User = require('../models/userModel.js');
const Hotel = require('../models/hotelModel.js');
const asyncHandler = require('express-async-handler');
const generateToken = require('../utils/generateTokens.js');
const Hotel_Bookings = require('../models/HotelBookingModel.js');
const Restraunt_Booking = require('../models/RestrauntBookingModel.js');
const Restraunt = require('../models/restrauntModels.js');

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    const token = generateToken(user._id);
    res.cookie('jwt', token, {
      expires: new Date(
        Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
      ),
      httpOnly: false,
      secure: req.secure || req.headers['x-forwarded-proto'] === 'https'
    });
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: token,
    });
  } else {
    res.status(401);
    throw new Error('Invalid email or password');
  }
});

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error('User Email already Exists');
  }

  const user = await User.create({
    name,
    email,
    password,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error('Invalid credentials. Unable to register.');
  }
});

const getUserprofile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(404);
    throw new Error('User Not Found');
  }
});

const updateUserprofile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    if (req.body.password) {
      user.password = req.body.password;
    }

    const updatedUser = await user.save();

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
      token: generateToken(updatedUser._id),
    });
  } else {
    res.status(404);
    throw new Error('User Not Found');
  }
});

const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find({});
  res.json(users);
});

const getUsersById = asyncHandler(async (req, res) => {
  const users = await User.findById(req.params.id).select('-password');
  res.json(users);
});

const deleteUser = asyncHandler(async (req, res) => {
  const UserDeleted = await User.findOneAndDelete({ _id: req.params.id });

  if (UserDeleted) {
    res.json({ message: 'User deleted' });
  } else {
    res.status(404);
    throw new Error('User Not Found');
  }
});

const updateUserbyAdmin = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    user.isAdmin = req.body.isAdmin;

    const updatedUser = await user.save();

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
    });
  } else {
    res.status(404);
    throw new Error('User Not Found');
  }
});

const hotel_bookings = asyncHandler(async(req,res) => {
    
    const user = await User.findById(req.body.user_id);
    const hotel = await Hotel.findById(req.body.hotel_id);

    if(user && hotel){
      const {user_id,hotel_id,booked_rooms} = req.body;

      user.hotel_bookings.push(hotel_id);            
      hotel.rooms -= booked_rooms;
      hotel.booked_by.push(user_id);

      const updatedUser = await user.save();
      const updatedHotel = await hotel.save();

      const booking = await Hotel_Bookings.create({
        user_id,
        hotel_id,
        booked_rooms,
      });

      res.status(201).json({
          user_id: booking.user_id,
          hotel_id: booking.hotel_id,
          booked_rooms: booking.booked_rooms,
      });

      }else{
        res.status(404);
        if(user)throw new Error('Hotel Not Found');
        else throw new Error('User Not Found');
      }

});


const restraunt_bookings = asyncHandler(async(req,res) => {
  
  const {user_id,type1,type2,type3,type4,hotel_id,restraunt_id} = req.body;

  const user = await User.findById(user_id);
  const restraunt = await Restraunt.findById(restraunt_id);

    if(user && restraunt){

      if((type1+type2+type3+type4)<=restraunt.Tables){
            user.restraunt_bookings.push(restraunt_id);            
            restraunt.Tables -= (type1+type2+type3+type4);
            restraunt.booked_by.push(user_id);

            const updatedUser = await user.save();
            const updatedRestraunt = await restraunt.save();

            const booking = await Restraunt_Booking.create({
               user_id,
               type1,
               type2,
               type3,
               type4,
               restraunt_id
            });

            res.status(201).json({
                user_id: booking._id,
                restraunt_id: booking.restraunt_id,
                type1: booking.type1,
                type2:booking.type2,
                type3: booking.type3,
                type4:booking.type4
            });
      }else{
          res.status(404);
          throw new Error('Sorry! You exceeded the Maximum Number Of Available Tables');
      }
    
    }else{
      res.status(404);
      if(user)throw new Error('Restraunt Not Found');
      else throw new Error('User Not Found');
    }

});



module.exports = { authUser, getUserprofile, registerUser, updateUserprofile, getUsers, deleteUser, updateUserbyAdmin, getUsersById,hotel_bookings,restraunt_bookings };
