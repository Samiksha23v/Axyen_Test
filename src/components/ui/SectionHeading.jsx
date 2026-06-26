export default function SectionHeading({ eyebrow, title, subtitle, center = false }) {
  return (
    <div className={`max-w-2xl ${center ? 'mx-auto text-center' : ''}`}>
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-wider text-green-600">{eyebrow}</p>
      )}
      <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">{title}</h2>
      {subtitle && <p className="mt-4 text-lg text-gray-600">{subtitle}</p>}
    </div>
  )
}
