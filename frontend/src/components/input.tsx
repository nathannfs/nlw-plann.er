import type { ComponentProps, ReactNode } from 'react'

interface InputProps extends ComponentProps<'input'> {
  icon: ReactNode
}

export function Input({ icon, ...props }: InputProps) {
  return (
    <div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
      {icon}
      <input
        {...props}
        className="bg-transparent text-lg placeholder:zinc-400 outline-none flex-1"
      />
    </div>
  )
}
