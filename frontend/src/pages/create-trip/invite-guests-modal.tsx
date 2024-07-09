import { AtSign, Plus } from 'lucide-react'
import type { FormEvent } from 'react'
import { Button } from '../../components/button'
import { Modal } from '../../components/modal'

interface InviteGuestsModalProps {
  closeGuestsModal: () => void
  emailsToInvite: string[]
  addNewEmailToInvite: (event: FormEvent<HTMLFormElement>) => void
  removeEmailFromInvites: (email: string) => void
}

export function InviteGuestsModal({
  addNewEmailToInvite,
  closeGuestsModal,
  emailsToInvite,
  removeEmailFromInvites,
}: InviteGuestsModalProps) {
  return (
    <Modal
      inInput
      closeModal={closeGuestsModal}
      onSubmit={addNewEmailToInvite}
      title="Selecionar convidados"
      subtitle={
        <p className="text-sm text-zinc-400">
          Os convidados irão receber e-mails para confirmar a participação na
          viagem.
        </p>
      }
      list={emailsToInvite}
      removeList={removeEmailFromInvites}
    >
      <div className="px-2 flex items-center flex-1 gap-2">
        <AtSign className="text-zinc-400 size-5" />
        <input
          type="email"
          name="email"
          placeholder="Digite o e-mail do convidado"
          className="bg-transparent text-lg placeholder:zinc-400 outline-none flex-1"
        />
      </div>

      <Button type="submit" variant="primary">
        Convidar
        <Plus className="size-5" />
      </Button>
    </Modal>
  )
}
