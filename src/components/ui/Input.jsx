export default function Input({ label, id, type = 'text', value, onChange, placeholder, required, textarea }) {
  const cls =
    'w-full rounded-xl border border-orange-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-4 py-3 text-sm text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-400'
  return (
    <div>
      {label && (
        <label htmlFor={id} className="block text-sm font-medium mb-1">
          {label}
        </label>
      )}
      {textarea ? (
        <textarea id={id} value={value} onChange={onChange} placeholder={placeholder} required={required} rows={4} className={cls} />
      ) : (
        <input id={id} type={type} value={value} onChange={onChange} placeholder={placeholder} required={required} className={cls} />
      )}
    </div>
  )
}
