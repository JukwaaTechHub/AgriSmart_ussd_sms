const at = require("./africastalking");

const newAt = at.SMS

const sendSms = async (req, res) => {

  const { to, message } = req.body;

  try {
    const response = await newAt.send({
      to,
      message,
      from: 'Jukwaa TechHub' 
    });

    console.log('SMS sent:', response);
    res.status(200).json({ success: true, data: response });
  } catch (error) {
    console.error('Failed to send SMS:', error);
    res.status(500).json({ success: false, error: error.toString() });
  }
}

module.exports = sendSms;