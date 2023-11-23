import { FormInstance, Modal } from 'antd'
import AddEditTodoForm from './AddEditTodoForm'
import { Todo } from '../types'

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
  const formTitle = todoToEdit ? 'Edit task' : 'Add new task'
  const okText = todoToEdit ? 'Confirm' : 'Add'

  return (
    <Modal
      open={openModal}
      onCancel={onCancel}
      onOk={onOk}
      title={formTitle}
      okText={okText}
      cancelText='Cancel'>
      <AddEditTodoForm form={form} initialValues={todoToEdit} />
    </Modal>
  )
}
export default AddEditFormContainer
