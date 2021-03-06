const Booking = require("../models/booking");
const bookingRouter = require("express").Router();

///create a booking
bookingRouter.post("/create",  function (request, response) {
  console.log("creating");
  const studentID = request.body.studentID;
  const goingDate = request.body.goingDate;
  const returnDate = request.body.returnDate;
  const reason = request.body.reason;

  const newBooking = new Booking({
    studentID: studentID,
    goingDate: goingDate,
    returnDate: returnDate,
    reason: reason,
  });

  newBooking.save(function (err, savedBooking) {
    if (err) {
      console.log(">>>>>>>>>> working");
      console.log(err);
      response.status(400).json({ msg: "failed" });
      return;
    }

    console.log(savedBooking);
    response.status(200).json({ msg: "Success", data: savedBooking });
  });
});

/// get bookings
bookingRouter.get("/bookings", (request, response) => {
  Booking.find({}).then((res) => {
    response.status(200).send(res);
  });
});
module.exports = bookingRouter;