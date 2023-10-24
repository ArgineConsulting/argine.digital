import { VercelRequest, VercelResponse } from '@vercel/node'
import { createTransport } from 'nodemailer'

export default async function sendEmail(req: VercelRequest, res: VercelResponse) {
  // Const
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD } = process.env

  // Check .env vars
  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASSWORD) {
    return res.status(500).json({ message: 'SMTP configuration missing in environment variables.' })
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

      return res.status(200).json({ message: 'Email sent successfully' })
    } catch (error: any) {
      return res.status(500).json({ message: 'Error sending email', error: error.message })
    }
  } else {
    return res.status(405).json({ message: 'Method Not POST' })
  }
}
