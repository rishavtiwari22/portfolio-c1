const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;

  // Configure your transporter (example uses Gmail)
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.SMTP_USER, // your email
      pass: process.env.SMTP_PASS, // your email password or app password
    },
  });

  console.log(process.env.SMTP_USER, process.env.SMTP_PASS);

  const mailOptions = {
    from: email,
    to: 'rishav22@navgurukul.org',
    subject: subject || 'New Contact Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Nodemailer error:', error);
    res.status(500).json({ message: 'Failed to send email', error });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 