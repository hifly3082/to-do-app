import { useStoreActions, useStoreState } from 'easy-peasy'
import { Modal } from 'antd'
import { Todo } from '../types'

interface ModalProps {
  title: string
  visible: boolean
  onCancel: () => void
  onOk: () => void
  onReset: () => void
  children: React.ReactNode
  onFinish: (values: Todo) => void
}

const ModalContainer: React.FC<ModalProps> = ({ children }) => {
  const isModalOpen = useStoreState((state) => state.modal.isModalOpen)
  const toggleModal = useStoreActions((actions) => actions.modal.toggleModal)

  return (
    <Modal open={isModalOpen} onCancel={toggleModal} title='Add task'>
      {children}
    </Modal>
  )
}
export default ModalContainer
