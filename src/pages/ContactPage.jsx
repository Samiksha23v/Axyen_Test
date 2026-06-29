import { useState } from 'react'
import SectionHeading from '../components/ui/SectionHeading'
import Button from '../components/ui/Button'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', goal: 'mild_weight_loss', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="pt-20">
      <section className="bg-green-50">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20 lg:px-16">
          <SectionHeading
            eyebrow="Get Started"
            title="Tell us about your goals"
            subtitle="Share a few details and we will reach out to build your first sustainable plan."
          />
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16 md:px-8 md:py-24 lg:px-16">
        {submitted ? (
          <div className="rounded-2xl border border-green-200 bg-green-50 p-8 text-center">
            <h2 className="text-2xl font-semibold text-gray-900">Thank you, {form.name || 'friend'}!</h2>
            <p className="mt-3 text-gray-600">
              We have received your details and will be in touch soon to start your nutrition journey.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-green-600 focus:outline-none focus:ring-1 focus:ring-green-600"
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
                className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-green-600 focus:outline-none focus:ring-1 focus:ring-green-600"
              />
            </div>
            <div>
              <label htmlFor="goal" className="block text-sm font-medium text-gray-700">Primary Goal</label>
              <select
                id="goal"
                name="goal"
                value={form.goal}
                onChange={handleChange}
                className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-green-600 focus:outline-none focus:ring-1 focus:ring-green-600"
              >
                <option value="mild_weight_loss">Mild weight loss / toning</option>
                <option value="maintenance">Maintain weight</option>
                <option value="muscle_gain">Build muscle</option>
                <option value="energy">Improve energy</option>
                <option value="gut_health">Improve gut health</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Anything else?</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={form.message}
                onChange={handleChange}
                className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-green-600 focus:outline-none focus:ring-1 focus:ring-green-600"
                placeholder="Tell us about your preferences, budget, or schedule..."
              />
            </div>
            <Button type="submit">Submit</Button>
          </form>
        )}
      </section>
    </div>
  )
}
