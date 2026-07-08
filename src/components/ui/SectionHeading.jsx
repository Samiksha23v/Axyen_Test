export default function SectionHeading({ eyebrow, title, subtitle, center = true }) {
  return (
    <div className={`mb-10 md:mb-14 ${center ? 'text-center max-w-2xl mx-auto' : ''}`}>
      {eyebrow && (
        <span className="inline-block mb-3 px-3 py-1 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300 text-xs font-semibold uppercase tracking-wide">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">{title}</h2>
      {subtitle && <p className="mt-4 text-gray-600 dark:text-gray-400 text-lg">{subtitle}</p>}
    </div>
  )
}
