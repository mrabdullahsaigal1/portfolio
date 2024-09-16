import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  try {
    if (req.method === 'POST') {
      const { email, message } = req.body;  // Correctly access req.body

      // Validate required fields
      if (!email || !message) {
        return res.status(400).json({ error: 'Missing required fields' });
      }

      // Set up your nodemailer transporter with Gmail SMTP settings
      const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        auth: {
          user: "abdullahsaigal@gensols.org", // Ensure this is set correctly
          pass: "yxvh vcoc zbte eida", // Ensure this is set correctly
        },
      });

      // Define your email content
      const mailOptions = {
        from: email, // Sender's email address
        to: 'abdullahsaigal@gensols.org', // Recipient email address
        subject: 'New Contact Form Submission',
        text: `email: ${email}\nmessage: ${message}`, // Assuming message is a plain text string
      };

      await transporter.sendMail(mailOptions);

      // // Send the email
      // await transporter.sendMail({
      //   from: email, // Sender's email address
      //   to: 'abdullahsaigal@gensols.org', // Recipient email address
      //   subject: 'New Contact Form Submission',
      //   text: `email: ${email}\nmessage: ${message}`, // Assuming message is a plain text string
      // });

      return res.status(200).json({ success: true });
    } else {
      return res.status(405).json({ error: 'Method Not Allowed' });
    }
  } catch (error) {
    console.error('Error:', error);
    if (error.message === 'Invalid JSON') {
      return res.status(400).json({ error: 'Invalid JSON input' });
    } else if (error.code === 'EAUTH') {
      return res.status(500).json({ error: 'Authentication failed. Please check your email and password.' });
    } else {
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}
