import Button from '../components/ui/Button'

export default function NotFoundPage() {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-24 md:py-32 text-center">
      <p className="text-sm font-semibold uppercase tracking-wider text-green-600">Error 404</p>
      <h1 className="mt-4 text-5xl md:text-7xl font-bold text-gray-900">Page not found</h1>
      <p className="mt-6 text-lg text-gray-600 max-w-xl mx-auto">
        The page you're looking for doesn't exist or has moved. Let's get you back to your nutrition journey.
      </p>
      <div className="mt-10 flex justify-center gap-4">
        <Button to="/">Back Home</Button>
        <Button to="/meal-plans" variant="secondary">View Meal Plans</Button>
      </div>
    </section>
  )
}
