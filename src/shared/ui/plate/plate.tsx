import { ReactNode } from 'react'
import clsx from 'clsx'

interface Props {
  className?: string
  children: ReactNode
}

export const Plate = ({ className, children }: Props) => {
  return (
    <div
      className={clsx(
        'cursor-pointer rounded-md border border-gray-200 shadow-md transition-transform hover:translate-y-2',
        className,
      )}
    >
      {children}
    </div>
  )
}
