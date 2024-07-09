import { User } from 'lucide-react'
import type { FormEvent } from 'react'
import { Button } from '../../components/button'
import { Input } from '../../components/input'
import { Modal } from '../../components/modal'

interface ConfirmTripModalProps {
  closeConfirmTripModal: () => void
  createTrip: (event: FormEvent<HTMLFormElement>) => void
}

export function ConfirmTripModal({
  closeConfirmTripModal,
  createTrip,
}: ConfirmTripModalProps) {
  return (
    <Modal
      closeModal={closeConfirmTripModal}
      onSubmit={createTrip}
      title="Confirmar criação de viagem"
      subtitle={
        <p className="text-sm text-zinc-400">
          Para concluir a criação da viagem para{' '}
          <span className="front-semibold text-zinc-100">
            Florianópolis, Brasil
          </span>{' '}
          nas datas de{' '}
          <span className="front-semibold text-zinc-100">
            16 a 27 de Agosto de 2024
          </span>{' '}
          preencha seus dados abaixo:
        </p>
      }
    >
      <Input
        icon={<User className="text-zinc-400 size-5" />}
        name="name"
        placeholder="Seu nome completo"
      />
      <Input
        icon={<User className="text-zinc-400 size-5" />}
        type="email"
        name="email"
        placeholder="Seu e-mail pessoal"
      />

      <Button type="submit" variant="primary" size="full">
        Confirmar criação da viagem
      </Button>
    </Modal>
  )
}
