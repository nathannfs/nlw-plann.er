import { X } from 'lucide-react'
import type { FormEvent, ReactNode } from 'react'

interface ModalProps {
  closeModal: () => void
  onSubmit?: (event: FormEvent<HTMLFormElement>) => void
  removeList?: (email: string) => void
  list?: string[]
  children: ReactNode
  title: string
  subtitle: ReactNode
  inInput?: boolean
}

export function Modal({
  closeModal,
  onSubmit,
  removeList,
  list,
  children,
  title,
  subtitle,
  inInput,
}: ModalProps) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">{title}</h2>
            <button type="button" onClick={closeModal}>
              <X className="size-5 text-zinc-400" />
            </button>
          </div>

          {subtitle && subtitle}
        </div>

        {list && (
          <>
            <div className="flex flex-wrap gap-2">
              {removeList &&
                list.map((list, i) => {
                  return (
                    <div
                      key={i}
                      className="py-1.5 px-2.5 rounded-md bg-zinc-800 flex items-center gap-2"
                    >
                      <span className="text-zinc-300">{list}</span>
                      <button type="button" onClick={() => removeList(list)}>
                        <X className="size-4 text-zinc-400" />
                      </button>
                    </div>
                  )
                })}
            </div>

            <div className="w-full h-px bg-zinc-800" />
          </>
        )}

        <form
          onSubmit={onSubmit}
          className={
            inInput
              ? 'p-2.5 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2'
              : 'space-y-3'
          }
        >
          {children}
        </form>
      </div>
    </div>
  )
}
