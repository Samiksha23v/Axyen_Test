import { useState } from 'react'
import Card from '../components/ui/Card.jsx'
import Input from '../components/ui/Input.jsx'
import Button from '../components/ui/Button.jsx'
import SectionHeading from '../components/ui/SectionHeading.jsx'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handle = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))
  const submit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div className="pt-24 pb-20 px-4 md:px-8 lg:px-16 max-w-2xl mx-auto">
      <SectionHeading center eyebrow="Contact" title="Say hello to Bloom" subtitle="Booking a group easel table or planning an event? Drop us a line." />
      <Card className="mt-10 p-8">
        {sent ? (
          <div className="text-center py-8">
            <div className="text-4xl mb-3">🌸</div>
            <h3 className="text-xl font-semibold">Thanks, {form.name || 'friend'}!</h3>
            <p className="text-gray-600 dark:text-gray-400 mt-2">We'll get back to you before the coffee cools.</p>
          </div>
        ) : (
          <form onSubmit={submit} className="space-y-5">
            <Input id="name" label="Name" value={form.name} onChange={handle('name')} placeholder="Your name" required />
            <Input id="email" type="email" label="Email" value={form.email} onChange={handle('email')} placeholder="you@example.com" required />
            <Input id="message" label="Message" value={form.message} onChange={handle('message')} placeholder="How can we help?" textarea required />
            <Button type="submit" className="w-full">Send Message</Button>
          </form>
        )}
      </Card>
    </div>
  )
}
