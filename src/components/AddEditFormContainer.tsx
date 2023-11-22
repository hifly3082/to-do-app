import { FormInstance, Modal } from 'antd'
import AddEditTodoForm from './AddEditTodoForm'
import { BaseTodo, ExtendedTodo } from '../types'

interface AddEditTodoFormProps {
  form: FormInstance<BaseTodo> // not sure
  openModal: boolean
  onCancel: () => void
  onOk: () => void
  todoToEdit: ExtendedTodo
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
