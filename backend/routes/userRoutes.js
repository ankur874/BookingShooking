const express = require("express");
const { authUser, getUserprofile, registerUser, updateUserprofile, getUsers, deleteUser, updateUserbyAdmin, getUsersById,hotel_bookings,restraunt_bookings} = require('../controllers/userController.js');
const { protect, admin } = require('../utils/authUtil');

const router = express.Router();

router.route('/').post(registerUser).get(protect, admin, getUsers);
router.post('/login', authUser);
router.route('/profile').get(protect, getUserprofile).put(protect, updateUserprofile).delete(protect, admin, deleteUser);
router.route('/:id').delete(protect, admin, deleteUser).put(protect, admin, updateUserbyAdmin).get(protect, admin, getUsersById);
router.route('/book_hotels/:id').post(hotel_bookings)
router.route('/booking_restraunt/:id').post(restraunt_bookings);

module.exports = router;