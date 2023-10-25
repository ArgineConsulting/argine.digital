import { createTransport } from 'nodemailer'

export default async function handler(req: Request) {
  try {
    // Retrieve SMTP configuration from environment variables
    const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD } = process.env

    if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASSWORD) {
      throw new Error('SMTP configuration missing in environment variables.')
    }
    console.log(SMTP_USER)
    console.log(req.method)
    console.log(req.body)

    // Check request method
    if (req.method !== 'POST') {
      return new Response('Method Not Allowed', { status: 405 })
    }

    // Create a Nodemailer transporter
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
    const { email, subject, message } = req.body

    // Define email configuration
    const mailConfig = {
      from: email,
      to: SMTP_USER,
      subject: subject,
      text: message,
    }

    // Try to send the email
    await transporter.sendMail(mailConfig)

    // Email sent successfully
    return new Response('Email sent successfully', { status: 200 })
  } catch (error) {
    console.error(error)
    return new Response('Error sending email', { status: 500 })
  }
}
