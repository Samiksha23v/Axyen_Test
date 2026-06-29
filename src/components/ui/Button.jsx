import { Link } from 'react-router-dom'

export default function Button({ children, to, href, variant = 'primary', className = '', ...props }) {
  const base =
    'inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold transition-colors focus:outline-none'
  const variants = {
    primary: 'bg-green-600 text-white hover:bg-green-700',
    outline: 'border border-green-600 text-green-700 hover:bg-green-50',
    light: 'bg-white text-green-700 hover:bg-green-50',
  }
  const classes = `${base} ${variants[variant] || variants.primary} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    )
  }
  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes} {...props}>
        {children}
      </a>
    )
  }
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
