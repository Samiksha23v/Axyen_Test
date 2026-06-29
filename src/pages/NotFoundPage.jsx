import Button from '../components/ui/Button'

export default function NotFoundPage() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="text-center">
        <p className="text-6xl font-bold text-blue-600">404</p>
        <h1 className="mt-4 text-3xl font-bold text-gray-900">Page not found</h1>
        <p className="mt-2 text-gray-600">The page you're looking for doesn't exist or has moved.</p>
        <div className="mt-8"><Button to="/">Back to Home</Button></div>
      </div>
    </section>
  )
}
