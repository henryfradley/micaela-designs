const sgMail = require('@sendgrid/mail')

export default async function(req, res) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)

  const { name, email, text } = req.body

  const content = {
    to: 'micaela.rob@gmail.com',
    from: 'micaela.rob@gmail.com',
    subject: `${name} emailed you!! from ${email}`,
    text: `${name} - ${text}`,
    html: `<p>${text}</p><p>${name}</p><p>${email}</p>`
  }

  try {
    await sgMail.send(content)
    res.status(200).send('Message sent successfully.')
  } catch (error) {
    console.log('ERROR', error)
    res.status(400).send('Message not sent.')
  }
}