const express = require('express');
const sendSms = require('./smsSender');
const ussdHandler = require('./ussdHandler');
const dotenv = require("dotenv").config()

//initialize port variable 
const PORT = process.env.PORT;

const app = express();

//body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Endpoint to send SMS
// app.post('/send-sms', sendSms);

//Endpoint for ussd 
app.post('/ussd', ussdHandler)


app.listen(PORT, (req, res) => {
  console.log(`SMS API server running at http://localhost:${PORT}`);
});
