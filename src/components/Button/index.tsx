import style from './style.module.css'

export type ButtonProps = {
  color: 'primary' | 'secondary'
  children: React.ReactNode,
  disabled?: boolean
}

export const Button = ({ children, color = 'primary', disabled }: ButtonProps) => (
  <button className={`${style.container} ${style[color]}`} disabled={disabled}>
    {children}
  </button>
)

export default Button