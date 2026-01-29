import { Webhook } from 'svix'
import { headers } from 'next/headers'
import { WebhookEvent } from '@clerk/nextjs/server'
import nodemailer from 'nodemailer'

export async function POST(req) {
  const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET

  if (!WEBHOOK_SECRET) {
    throw new Error('Please add WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local')
  }

  // Get the headers
  const headerPayload = await headers()
  const svix_id = headerPayload.get('svix-id')
  const svix_timestamp = headerPayload.get('svix-timestamp')
  const svix_signature = headerPayload.get('svix-signature')

  // If there are no headers, error out
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response('Error occured -- no svix headers', {
      status: 400
    })
  }

  // Get the body
  const payload = await req.json()
  const body = JSON.stringify(payload)

  // Create a new Svix instance with your secret.
  const wh = new Webhook(WEBHOOK_SECRET)

  let evt

  // Verify the payload with the headers
  try {
    evt = wh.verify(body, {
      'svix-id': svix_id,
      'svix-timestamp': svix_timestamp,
      'svix-signature': svix_signature,
    })
  } catch (err) {
    console.error('Error verifying webhook:', err)
    return new Response('Error occured', {
      status: 400
    })
  }

  // Handle the webhook
  const { id } = evt.data
  const eventType = evt.type

  if (eventType === 'user.created') {
    const { email_addresses, first_name, last_name } = evt.data
    const email = email_addresses[0]?.email_address
    const name = `${first_name || ''} ${last_name || ''}`.trim() || 'A new user'

    // Send email notification
    try {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS, // App Password
        },
      })

      await transporter.sendMail({
        from: '"Portfolio Auth" <' + process.env.EMAIL_USER + '>',
        to: "kumararahul795@gmail.com",
        subject: "New User Signup: " + email,
        text: `Hello,\n\nA new user has signed up on your portfolio!\n\nName: ${name}\nEmail: ${email}\nTime: ${new Date().toLocaleString()}\n\nBest regards,\nPortfolio System`,
      })
      
      console.log('Notification email sent for user:', email)
    } catch (mailErr) {
      console.error('Error sending notification email:', mailErr)
    }
  }

  return new Response('', { status: 200 })
}
