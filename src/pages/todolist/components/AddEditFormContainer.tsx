import { FormInstance, Modal } from 'antd'
import AddEditTodoForm from './AddEditTodoForm'
import { Todo } from '../../../types'

interface AddEditTodoFormProps {
  form: FormInstance<Todo> // not sure
  openModal: boolean
  onCancel: () => void
  onOk: () => void
  todoToEdit: Todo | undefined
}

const AddEditFormContainer: React.FC<AddEditTodoFormProps> = ({
  form,
  openModal,
  onCancel,
  onOk,
  todoToEdit
}) => {
  const formTitle = todoToEdit?.id ? 'Edit task' : 'Add new task'
  const okText = todoToEdit?.id ? 'Confirm' : 'Add'

  return (
    <Modal
      destroyOnClose
      open={openModal}
      onCancel={onCancel}
      onOk={onOk}
      title={formTitle}
      okText={okText}>
      <AddEditTodoForm form={form} todoToEdit={todoToEdit} />
    </Modal>
  )
}
export default AddEditFormContainer
