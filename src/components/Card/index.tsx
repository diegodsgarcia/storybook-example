import style from './style.module.css'

export type CardProps = {
  children: React.ReactNode,
}

export const Card = ({ children }: CardProps) => (
  <div className={style.container}>
    {children}
  </div>
)

export default Card