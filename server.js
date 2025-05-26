const express = require('express');
const sendSms = require('./smsSender');
const dotenv = require("dotenv").config()

//initialize port variable 
const PORT = process.env.PORT || 3000;

const app = express();

//body parser
app.use(express.json());

// Endpoint to send SMS
app.post('/send-sms', sendSms);


app.listen(PORT, () => {
  console.log(`SMS API server running at http://localhost:${PORT}`);
});
