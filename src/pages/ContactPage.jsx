import { useState } from 'react'
import SectionHeading from '../components/ui/SectionHeading'
import Button from '../components/ui/Button'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div>
      <section className="bg-gray-900 text-white py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-300">Get in Touch</p>
          <h1 className="mt-3 text-4xl md:text-5xl font-bold">Let's build your plan together</h1>
          <p className="mt-6 text-lg text-gray-300 max-w-2xl">Tell us about your project and we'll help you set up your five-phase framework.</p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-8 lg:px-16 grid gap-12 md:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Contact" title="We'd love to hear from you" subtitle="Reach out and our team will respond within one business day." />
            <ul className="mt-8 space-y-4 text-gray-700">
              <li><span className="font-semibold">Email:</span> hello@planforge.example.com</li>
              <li><span className="font-semibold">Phone:</span> +1 (555) 012-3456</li>
              <li><span className="font-semibold">Address:</span> 200 Roadmap Ave, Suite 5, Remote</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
            {submitted ? (
              <div className="text-center py-12">
                <h3 className="text-xl font-semibold text-gray-900">Thanks, {form.name || 'there'}!</h3>
                <p className="mt-2 text-gray-600">Your message has been received. We'll be in touch soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                  <input id="name" name="name" value={form.name} onChange={handleChange} required className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:ring-blue-500" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input id="email" name="email" type="email" value={form.email} onChange={handleChange} required className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:ring-blue-500" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea id="message" name="message" rows="4" value={form.message} onChange={handleChange} required className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:ring-blue-500" />
                </div>
                <Button type="submit" className="w-full">Send Message</Button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
