import { useState } from 'react'
import Button from '../components/ui/Button'
import SectionHeading from '../components/ui/SectionHeading'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', goal: 'mild_weight_loss', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div>
      <section className="bg-gray-900 text-white py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-green-400">Get Started</p>
          <h1 className="mt-3 text-4xl md:text-5xl font-bold">Tell us about your goals</h1>
          <p className="mt-4 max-w-2xl text-gray-300">
            Share a few details and we'll reach out to build your personalized, sustainable nutrition plan.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-4 md:px-8 lg:px-16 grid gap-12 md:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Contact" title="We'd love to hear from you" />
            <p className="mt-4 text-gray-600">
              Whether you're aiming for mild weight loss, more energy or just a healthier routine, our coaching adapts to you.
            </p>
            <ul className="mt-6 space-y-3 text-gray-700">
              <li>📧 hello@nourishly.app</li>
              <li>🕘 Mon–Fri, 9am–6pm IST</li>
              <li>📍 Remote-first, serving clients across India</li>
            </ul>
          </div>

          {submitted ? (
            <div className="rounded-2xl border border-green-200 bg-green-50 p-8 text-center">
              <h3 className="text-2xl font-bold text-green-700">Thank you!</h3>
              <p className="mt-2 text-gray-600">
                We've received your details and will be in touch soon to start your nutrition profile.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
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
                  <option value="mild_weight_loss">Mild weight loss & toning</option>
                  <option value="more_energy">More energy & less fatigue</option>
                  <option value="gut_health">Better gut health</option>
                  <option value="routine">Consistent eating routine</option>
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
              <Button type="submit" className="w-full">Send Message</Button>
            </form>
          )}
        </div>
      </section>
    </div>
  )
}
