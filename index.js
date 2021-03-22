const express = require("express");
const app = express();
const mongoose = require("mongoose");
require ('dotenv').config()
const bookingRouter = require("./controllers/booking");
const cors = require("cors");
port=8000


app.use(cors());
app.use(express.json());



mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/YOUR_DB_NAME', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // socketTimeoutMS: 600000,
    // keepAlive: true,
    // reconnectTries: 1000,
  
  },)
  .then(() => {
    console.log("Successfully connected to MongoDB");
  })
  .catch((err) => {
    console.log("Some problem occurred", err);
  });
  



app.use(bookingRouter);





app.listen(port,()=>{
    console.log(`Application is running on port ${port}`)
})




