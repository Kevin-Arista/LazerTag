/**
 * This file creates our server
 */

// import modules
const express =require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');

// import routes
const appointmentRouter = require('./routes/appointments.js');
const dbConnection = require('./config/db-connection.js');

// setting port number
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// middleware
app.use(express.json());
app.use(cors());

// set routes
app.use('/appointments', appointmentRouter);

// connet to db
mongoose.set('strictQuery', true);
mongoose.connect(dbConnection.url)
    .then(()=>{
        console.log("connected to mongodb");
    }, 
    err=>{
        console.log("connection failed");
    }
);

// running the server
app.listen(PORT, ()=>{
    console.log(`Server listening on PORT: ${PORT}`);
});