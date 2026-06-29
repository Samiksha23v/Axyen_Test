export default function Card({ children, className = '' }) {
  return (
    <div className={`rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md ${className}`}>
      {children}
    </div>
  )
}
