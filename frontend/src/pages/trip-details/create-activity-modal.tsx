/* eslint-disable camelcase */
import { Calendar, Tag } from 'lucide-react'
import type { FormEvent } from 'react'
import { useParams } from 'react-router-dom'
import { Button } from '../../components/button'
import { Input } from '../../components/input'
import { Modal } from '../../components/modal'
import { api } from '../../lib/axios'

interface CreateActivityModalProps {
  closeCreateActivityModal: () => void
}

export function CreateActivityModal({
  closeCreateActivityModal,
}: CreateActivityModalProps) {
  const { tripId } = useParams()

  async function createActivity(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const data = new FormData(event.currentTarget)

    const title = data.get('title')?.toString()
    const occurs_at = data.get('occurs_at')?.valueOf()

    await api.post(`/trips/${tripId}/activities`, {
      title,
      occurs_at,
    })

    window.document.location.reload()
  }

  return (
    <Modal
      onSubmit={createActivity}
      closeModal={closeCreateActivityModal}
      title="Cadastrar atividade"
      subtitle={
        <p className="text-sm text-zinc-400">
          Todos convidados podem visualizar as atividades.
        </p>
      }
    >
      <Input
        icon={<Tag className="text-zinc-400 size-5" />}
        name="title"
        placeholder="Qual a atividade?"
      />

      <Input
        icon={<Calendar className="text-zinc-400 size-5" />}
        type="datetime-local"
        name="occurs_at"
        placeholder="Data e horário da atividade"
      />

      <Button variant="primary" size="full">
        Salvar atividade
      </Button>
    </Modal>
  )
}
