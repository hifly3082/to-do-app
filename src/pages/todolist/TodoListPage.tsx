import { useState } from 'react'
import { Button, Divider, Form } from 'antd'

import { Todo } from '../../types'
import { useStoreActions, useStoreState } from '../../store'
import TodoList from './components/TodoList'
import AddEditFormContainer from './components/AddEditFormContainer'
import { generateId } from '../../utilities/helpers'

const TodoListPage: React.FC = () => {
  const [form] = Form.useForm()
  const [openModal, setOpenModal] = useState(false)
  const [todoToEdit, setTodoToEdit] = useState<Todo | undefined>(undefined)

  const todos = useStoreState((state) => state.todos)
  const addTodo = useStoreActions((actions) => actions.addTodo)
  const editTodo = useStoreActions((actions) => actions.editTodo)
  const loadData = useStoreActions((actions) => actions.loadData)

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

  const handleLoadData = () => {
    loadData([
      {
        id: generateId(),
        completed: false,
        name: '3. Now task',
        dueDate: '2023-11-30T04:00:00.000Z'
      },
      {
        id: generateId(),
        completed: true,
        name: '0. Empty',
        dueDate: ''
      },
      {
        id: generateId(),
        completed: false,
        name: '1. The oldest task',
        description: 'This is truly old',
        dueDate: '1965-01-01T03:00:00.000Z'
      },
      {
        id: generateId(),
        completed: false,
        name: '5. Future task',
        dueDate: '2030-12-01T04:00:00.000Z'
      },
      {
        id: generateId(),
        completed: true,
        name: '2. Old task',
        dueDate: '2021-01-01T16:00:00.000Z'
      },
      {
        id: generateId(),
        completed: false,
        name: 'Test',
        description: 'Sample description',
        dueDate: ''
      },
      {
        id: generateId(),
        completed: false,
        name: '4. Tomorrow task',
        dueDate: '2023-12-01T02:00:00.000Z'
      }
    ])
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
      <Divider />
      <Button type='primary' onClick={handleLoadData}>
        Load sample data
      </Button>
    </>
  )
}
export default TodoListPage
