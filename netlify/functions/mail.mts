import { createTransport } from 'nodemailer'

export default async function sendEmail(req) {
  // Const
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD } = Netlify.env.get

  // Check .env vars
  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASSWORD) {
    return new Response('SMTP configuration missing in environment variables.')
  }

  // Check req method
  if (req.method === 'POST') {
    const transporter = createTransport({
      service: 'gmail',
      port: Number(SMTP_PORT),
      host: SMTP_HOST,
      secure: false,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASSWORD,
      },
    })

    // Access the parsed form data
    const MAIL_CONFIG = {
      from: req.body.email,
      to: SMTP_USER,
      subject: req.body.subject,
      text: req.body.message,
    }

    try {
      // Try send mail
      await transporter.sendMail(MAIL_CONFIG)

      return new Response('Email sent successfully')
    } catch (error: any) {
      return new Response('Error sending email')
    }
  } else {
    return new Response('Method Not POST')
  }
}
