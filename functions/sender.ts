// sender.ts
import { Resource } from 'sst'
import { SESv2Client, SendEmailCommand } from '@aws-sdk/client-sesv2'

const client = new SESv2Client()

export const handler = async (event: any) => {
  const data = JSON.parse(event.body || '{}')

  const { name, email, phone, company, industry, message } = data

  const htmlBody = `
  <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6;">
    <h2 style="margin-bottom: 12px;">New Quote Request</h2>

    <p>You received a new quote request from your website:</p>

    <table style="border-collapse: collapse; margin-top: 16px;">
      <tr><td style="padding: 4px 8px; font-weight: 600;">Name:</td><td>${name}</td></tr>
      <tr><td style="padding: 4px 8px; font-weight: 600;">Email:</td><td>${email}</td></tr>
      <tr><td style="padding: 4px 8px; font-weight: 600;">Phone:</td><td>${phone || 'N/A'}</td></tr>
      <tr><td style="padding: 4px 8px; font-weight: 600;">Company:</td><td>${company}</td></tr>
      <tr><td style="padding: 4px 8px; font-weight: 600;">Industry:</td><td>${industry}</td></tr>
    </table>

    <h3 style="margin-top: 20px;">Message</h3>
    <p style="white-space: pre-wrap; background: #f7f7f7; padding: 12px; border-radius: 4px;">
      ${message}
    </p>

    <hr style="margin-top: 20px;" />
    <p style="font-size: 12px; color: #777;">
      This message was automatically generated from the Assurixs website.
    </p>
  </div>
`

  await client.send(
    new SendEmailCommand({
      FromEmailAddress: Resource.AssurixsEmail.sender,
      Destination: { ToAddresses: [Resource.AssurixsEmail.sender] },
      Content: {
        Simple: {
          Subject: { Data: `Quote Request — ${name} (${company})` },
          Body: { Html: { Data: htmlBody } },
        },
      },
    }),
  )

  return {
    statusCode: 200,
    body: JSON.stringify({ ok: true }),
  }
}
