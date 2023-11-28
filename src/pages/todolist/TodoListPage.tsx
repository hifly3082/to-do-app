import { useState } from 'react'
import { Button, Form } from 'antd'

import { Todo } from '../../types'
import { useStoreActions, useStoreState } from '../../store'
import TodoList from '../../components/TodoList'
import AddEditFormContainer from '../../components/AddEditFormContainer'

const TodoListPage: React.FC = () => {
  const [form] = Form.useForm()
  const [openModal, setOpenModal] = useState(false)
  const [todoToEdit, setTodoToEdit] = useState<Todo | undefined>(undefined)

  const todos = useStoreState((state) => state.todos)
  const addTodo = useStoreActions((actions) => actions.addTodo)
  const editTodo = useStoreActions((actions) => actions.editTodo)

  const handleOpenModal = () => {
    setOpenModal(true)
  }

  const handleCancel = () => {
    setOpenModal(false)
    setTodoToEdit(undefined)
    form.resetFields()
  }

  const handleEdit = (id: string) => {
    const selectedTodo = todos.find((todo) => todo.id === id) || ({} as Todo)
    setTodoToEdit(selectedTodo)
    setOpenModal(true)
  }

  const handleOk = () => {
    form.submit()
  }

  const handleFormFinish = (_name: string, { values }: { values: Todo }) => {
    if (todoToEdit?.id) {
      editTodo({ ...values, id: todoToEdit.id })
    } else {
      addTodo(values)
    }
    setOpenModal(false)
    setTodoToEdit(undefined)
    form.resetFields()
  }

  return (
    <>
      <TodoList onEdit={handleEdit} />
      <Form.Provider onFormFinish={handleFormFinish}>
        <AddEditFormContainer
          openModal={openModal}
          onCancel={handleCancel}
          onOk={handleOk}
          todoToEdit={todoToEdit}
          form={form}
        />
      </Form.Provider>
      <Button type='primary' onClick={handleOpenModal}>
        Add new task
      </Button>
    </>
  )
}
export default TodoListPage
