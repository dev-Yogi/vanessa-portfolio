import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

//escaping characters into harmless text so tags display as plain characters instead of being rendered.

function escapeHtml(str){
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

export async function POST(request) {
  try {
    const { name, email, message } = await request.json()

    if (!name || !email || !message) {
      return Response.json(
        { error: 'All fields are required.' },
        { status: 400 }
      )
    }

    //regular expression to validate email address
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return Response.json(
        { error: 'Please enter a valid email address.' },
        { status: 400 }
      )
    }

    //changes name, email, and message now go through escapeHtml() before being insserted into the emailto prevent XSS attacks
    //.replace(/\n/g, '<br>') keeps the line breaks people type. The old version collapsed multi-line messages into one block.
    //repyToL email is a small bonus: hitting reply in my inbox now goes to the sender instead of onboarding@resend.dev

    const safeName = escapeHtml(name)
    const safeEmail = escapeHtml(email)
    const safeMessage = escapeHtml(message).replace(/\n/g, '<br>')

    const { error: sendError } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: process.env.CONTACT_EMAIL,
      replyTo: email,
      subject: `New message from ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #00e5ff;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p><strong>Message:</strong></p>
          <p style="background: #111827; padding: 16px; border-radius: 8px; color: #f1f5f9;">${safeMessage}</p>
        </div>
      `,
    })

    if (sendError) {
      console.error('Resend email error:', sendError)
      return Response.json(
        { error: 'Message could not be sent. Please email me directly' },
        { status: 502 }
      )
    }

    return Response.json({ success: true })
  } catch (error) {
    console.error('Contact API error:', error)
    return Response.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}