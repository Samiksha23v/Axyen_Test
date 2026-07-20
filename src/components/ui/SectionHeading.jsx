export default function SectionHeading({ eyebrow, title, subtitle, center }) {
  return (
    <div className={center ? 'text-center max-w-2xl mx-auto' : 'max-w-2xl'}>
      {eyebrow && (
        <span className="inline-block text-orange-600 dark:text-orange-400 font-semibold text-sm uppercase tracking-wider mb-2">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
      {subtitle && <p className="mt-3 text-gray-600 dark:text-gray-400">{subtitle}</p>}
    </div>
  )
}
