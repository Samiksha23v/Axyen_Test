import Button from '../components/ui/Button.jsx'

export default function NotFoundPage() {
  return (
    <div className="pt-16 min-h-[70vh] flex items-center justify-center px-4">
      <div className="text-center">
        <div className="text-6xl mb-4">🎨</div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">404</h1>
        <p className="mt-3 text-gray-600 dark:text-gray-400">This canvas is still blank. Let's get you back home.</p>
        <div className="mt-6">
          <Button to="/">Back to Home</Button>
        </div>
      </div>
    </div>
  )
}
