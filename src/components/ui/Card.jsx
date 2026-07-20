export default function Card({ children, className = '' }) {
  return (
    <div className={`rounded-2xl bg-white dark:bg-gray-900 border border-orange-100 dark:border-gray-800 shadow-sm ${className}`}>
      {children}
    </div>
  )
}
