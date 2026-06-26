import { useState } from 'react'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import SectionHeading from '../components/ui/SectionHeading'
import client from '../api/client'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', goal: 'mild_weight_loss', message: '' })
  const [status, setStatus] = useState('idle')

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('submitting')
    try {
      await client.post('/contact', form)
      setStatus('success')
      setForm({ name: '', email: '', goal: 'mild_weight_loss', message: '' })
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-16 md:py-24">
      <div className="grid gap-12 lg:grid-cols-2 items-start">
        <div>
          <SectionHeading
            eyebrow="Get Started"
            title="Let's build your plan"
            subtitle="Share your goals and we'll tailor a sustainable, budget-aware nutrition plan around your schedule."
          />
          <div className="mt-8 space-y-4 text-gray-600">
            <p><span className="font-semibold text-gray-900">Email:</span> hello@nourish.example.com</p>
            <p><span className="font-semibold text-gray-900">Hours:</span> Mon–Fri, 9am–6pm IST</p>
            <p><span className="font-semibold text-gray-900">Response:</span> Within 1 business day</p>
          </div>
          <img
            src="https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Healthy meal preparation"
            loading="lazy"
            className="mt-8 rounded-2xl object-cover h-64 w-full"
          />
        </div>

        <Card>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
              />
            </div>
            <div>
              <label htmlFor="goal" className="block text-sm font-medium text-gray-700">Primary Goal</label>
              <select
                id="goal"
                name="goal"
                value={form.goal}
                onChange={handleChange}
                className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
              >
                <option value="mild_weight_loss">Mild weight loss / toning</option>
                <option value="maintenance">Maintenance</option>
                <option value="energy">Improve energy</option>
                <option value="gut_health">Gut health</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={form.message}
                onChange={handleChange}
                className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
              />
            </div>
            <Button type="submit" className="w-full" disabled={status === 'submitting'}>
              {status === 'submitting' ? 'Sending…' : 'Send Message'}
            </Button>
            {status === 'success' && (
              <p className="text-sm text-green-700">Thanks! We'll be in touch within 1 business day.</p>
            )}
            {status === 'error' && (
              <p className="text-sm text-orange-600">Something went wrong. Please try again or email us directly.</p>
            )}
          </form>
        </Card>
      </div>
    </section>
  )
}
