import emailjs from '@emailjs/browser';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { user_name, user_email, message } = req.body;

  if (!user_name || !user_email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const response = await emailjs.send(
      process.env.EMAILJS_SERVICE_ID,
      process.env.EMAILJS_TEMPLATE_ID,
      {
        user_name,
        user_email,
        message,
      },
      process.env.EMAILJS_PUBLIC_KEY
    );

    return res.status(200).json({ message: 'Email sent successfully!', response });
  } catch (error) {
    console.error('Email sending failed:', error);
    return res.status(500).json({ error: 'Failed to send email', details: error });
  }
}
