const express = require("express")
const {BookingController}= require("../../controllers/index")
const router = express.Router();
const bookingController = new BookingController();

router.post('/bookings' , bookingController.create)
module.exports=router