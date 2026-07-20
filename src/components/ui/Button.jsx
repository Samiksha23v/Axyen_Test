import { Link } from 'react-router-dom'

export default function Button({ children, to, onClick, variant = 'primary', type = 'button', className = '' }) {
  const base = 'inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold text-sm transition-colors'
  const variants = {
    primary: 'bg-orange-500 text-white hover:bg-orange-600',
    outline: 'border-2 border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white dark:text-orange-400',
    ghost: 'text-orange-600 hover:bg-orange-100 dark:text-orange-400 dark:hover:bg-gray-800',
  }
  const cls = `${base} ${variants[variant]} ${className}`
  if (to) return <Link to={to} className={cls}>{children}</Link>
  return <button type={type} onClick={onClick} className={cls}>{children}</button>
}
