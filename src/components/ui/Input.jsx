export default function Input({ label, id, as = 'input', className = '', ...props }) {
  const base =
    'w-full rounded-xl border border-orange-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-4 py-3 text-sm text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-400 placeholder-gray-400'
  return (
    <div className={className}>
      {label && (
        <label htmlFor={id} className="block mb-1.5 text-sm font-medium text-gray-700 dark:text-gray-300">
          {label}
        </label>
      )}
      {as === 'textarea' ? (
        <textarea id={id} className={base} {...props} />
      ) : (
        <input id={id} className={base} {...props} />
      )}
    </div>
  )
}
