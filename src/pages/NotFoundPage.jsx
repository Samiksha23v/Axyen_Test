import Button from '../components/ui/Button'

export default function NotFoundPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <p className="text-sm font-semibold uppercase tracking-wide text-green-600">404</p>
      <h1 className="mt-2 text-4xl font-bold text-gray-900 md:text-5xl">Page not found</h1>
      <p className="mt-4 max-w-md text-gray-600">
        The page you are looking for has wandered off the meal plan. Let us get you back on track.
      </p>
      <div className="mt-8">
        <Button to="/">Back to Home</Button>
      </div>
    </div>
  )
}
