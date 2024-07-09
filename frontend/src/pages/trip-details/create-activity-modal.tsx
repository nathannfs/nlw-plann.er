import { Calendar, Tag } from 'lucide-react'
import { Button } from '../../components/button'
import { Input } from '../../components/input'
import { Modal } from '../../components/modal'

interface CreateActivityModalProps {
  closeCreateActivityModal: () => void
}

export function CreateActivityModal({
  closeCreateActivityModal,
}: CreateActivityModalProps) {
  return (
    <Modal
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
