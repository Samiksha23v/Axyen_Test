import Button from '../components/ui/Button.jsx'

export default function NotFoundPage() {
  return (
    <div className="pt-32 pb-24 px-4 text-center min-h-[60vh] flex flex-col items-center justify-center">
      <div className="text-6xl mb-4">🎨</div>
      <h1 className="text-4xl font-bold">404 — Blank Canvas</h1>
      <p className="mt-3 text-gray-600 dark:text-gray-400">This page hasn't been painted yet.</p>
      <div className="mt-8">
        <Button to="/">Back Home</Button>
      </div>
    </div>
  )
}
