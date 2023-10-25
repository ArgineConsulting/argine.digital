import { createTransport } from 'nodemailer'

export default async function handler(req: Request) {
  try {
    // Retrieve SMTP configuration from environment variables
    const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD } = process.env

    if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASSWORD) {
      throw new Error('SMTP configuration missing in environment variables.')
    }

    // Check request method
    if (req.method !== 'POST') {
      return new Response('Method Not Allowed', { status: 405 })
    }

    // Read and parse the request body
    const bodyText = await req.text() // Use await to read the entire stream
    const requestBody = JSON.parse(bodyText) // Assuming the body is in JSON format

    // Extract data from the parsed request body
    const { email, subject, message } = requestBody

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

    // Define email configuration
    const mailConfig = {
      from: email,
      to: SMTP_USER,
      subject: subject || 'From argine.digital site contact form',
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
