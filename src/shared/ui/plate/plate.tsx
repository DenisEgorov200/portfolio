import { ReactNode } from 'react'

interface Props {
  className?: string
  children: ReactNode
}

export const Plate = ({ className, children }: Props) => {
  return <div className={className}>{children}</div>
}
