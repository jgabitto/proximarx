/* eslint-disable no-undef */
import sgMail from '@sendgrid/mail';
// import { readFileSync } from 'fs';
// import { join } from 'path';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { firstName, lastName, email, phone, message } = req.body;

    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    // Read the image file as a base64-encoded string
    // const imageFilePath = join(process.cwd(), 'public', 'proximarxpng.png');
    // const imageData = readFileSync(imageFilePath, { encoding: 'base64' });

    const htmlContent = `
    <html>
      <head>
        <style>
          /* Add any custom CSS styles here */
        </style>
      </head>
      <body>
        <h2>Message from ${firstName} ${lastName}</h2>
        <h3>Hi Proxima,</h3>
        <div>${message}</div>
        <h3>Sincerely,</h3>
        <h2>${firstName} ${lastName}</h2>
        <h2>${phone}</h2>
      </body>
    </html>
  `;

    const msg = {
      to: email,
      from: email,
      subject: `Message from ${firstName} ${lastName}`,
      html: htmlContent,
    };

    try {
      await sgMail.send(msg);
      res.status(200).json({ success: true });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'Failed to send email' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
