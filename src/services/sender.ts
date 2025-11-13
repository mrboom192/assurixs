import { ContactFormData } from '@/components/ContactForm'

export async function sendQuoteEmail(formData: ContactFormData) {
  const res = await fetch(process.env.NEXT_PUBLIC_SST_EMAIL_API!, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  })

  if (!res.ok) {
    throw new Error('Failed to send quote email')
  }

  return res.json()
}
