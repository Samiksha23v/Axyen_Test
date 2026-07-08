import { useState } from 'react'
import SectionHeading from '../components/ui/SectionHeading.jsx'
import Card from '../components/ui/Card.jsx'
import Input from '../components/ui/Input.jsx'
import Button from '../components/ui/Button.jsx'
import { locationInfo } from '../api/mockData.js'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <div className="pt-16">
      <section className="px-4 md:px-8 lg:px-16 py-16 md:py-24 max-w-4xl mx-auto">
        <SectionHeading
          eyebrow="Say Hello"
          title="Get in touch"
          subtitle="Questions, bookings, or just want to chat about paint colors? Drop us a note."
        />

        <div className="grid gap-8 md:grid-cols-2">
          <Card className="p-8">
            {sent && (
              <div className="mb-6 rounded-xl bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300 px-4 py-3 text-sm">
                Thanks! We'll be in touch soon. ☀️
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input label="Name" id="name" name="name" value={form.name} onChange={handleChange} placeholder="Your name" required />
              <Input label="Email" id="email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@email.com" required />
              <Input label="Message" id="message" name="message" as="textarea" rows={4} value={form.message} onChange={handleChange} placeholder="How can we help?" required />
              <Button type="submit" className="w-full">Send Message</Button>
            </form>
          </Card>

          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">📧 Email</h3>
              <a href={`mailto:${locationInfo.email}`} className="text-orange-600 dark:text-orange-400">{locationInfo.email}</a>
            </Card>
            <Card className="p-6">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">📞 Phone</h3>
              <p className="text-gray-700 dark:text-gray-300">{locationInfo.phone}</p>
            </Card>
            <Card className="p-6">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">📍 Visit</h3>
              <p className="text-gray-700 dark:text-gray-300">{locationInfo.address}</p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
