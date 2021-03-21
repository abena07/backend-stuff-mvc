const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  studentID: {
    type: Number,
    required: true,
  },

  goingDate: {
    type: Date,
    required: true,
  },

  returnDate: {
    type: Date,
    required: true,
  },

  reason: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("Booking", bookingSchema);