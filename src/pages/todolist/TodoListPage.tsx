import { useState } from 'react'
import { Button, Form } from 'antd'

import { Todo } from '../../types'
import { useStoreActions, useStoreState } from '../../store'
import TodoList from '../../components/TodoList'
import AddEditFormContainer from '../../components/AddEditFormContainer'

const TodoListPage: React.FC = () => {
  const [form] = Form.useForm()
  const [openModal, setOpenModal] = useState(false)
  const [todoToEdit, setTodoToEdit] = useState({} as Todo)

  const todos = useStoreState((state) => state.todos)
  const addTodo = useStoreActions((actions) => actions.addTodo)
  const editTodo = useStoreActions((actions) => actions.editTodo)
  // const toggleStatus = useStoreActions((actions) => actions.toggleStatus)

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

  // const handleCheckboxClick = (id: string) => {
  //   const selectedTodo =
  //     todos.find((todo) => todo.id === id) || ({} as Todo)
  //   setTodoToEdit(selectedTodo)
  // }

  const handleOk = () => {
    form.submit()
  }

  const handleFormFinish = (name: string, { values }: { values: Todo }) => {
    if (todoToEdit?.id) {
      editTodo({ ...values, id: todoToEdit.id })
    } else {
      addTodo(values)
    }
    form.resetFields()
    setOpenModal(false)
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
        Add Task
      </Button>
    </>
  )
}
export default TodoListPage
