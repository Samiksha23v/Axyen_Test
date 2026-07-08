import { Link } from 'react-router-dom'

export default function Button({ children, to, href, variant = 'primary', className = '', ...props }) {
  const base = 'inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold text-sm transition-colors'
  const variants = {
    primary: 'bg-orange-500 hover:bg-orange-600 text-white',
    secondary: 'bg-white hover:bg-orange-50 text-orange-600 border border-orange-200 dark:bg-gray-800 dark:text-orange-300 dark:border-gray-700 dark:hover:bg-gray-700',
    ghost: 'text-orange-600 hover:bg-orange-100 dark:text-orange-300 dark:hover:bg-gray-800',
  }
  const cls = `${base} ${variants[variant]} ${className}`

  if (to) return <Link to={to} className={cls} {...props}>{children}</Link>
  if (href) return <a href={href} className={cls} {...props}>{children}</a>
  return <button className={cls} {...props}>{children}</button>
}
