import { useStoreActions } from 'easy-peasy'
import { Button } from 'antd'

import AddTodoForm from '../../components/AddTodoForm'
import ModalContainer from '../../components/ModalContainer'
import TodoItem from '../../components/TodoItem'

const TodoList = () => {
  const toggleModal = useStoreActions((actions) => actions.modal.toggleModal)

  return (
    <>
      <ModalContainer>
        <AddTodoForm />
      </ModalContainer>

      <TodoItem />

      <Button type='primary' onClick={toggleModal}>
        Add Task
      </Button>
    </>
  )
}
export default TodoList
