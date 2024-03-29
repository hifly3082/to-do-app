import { useState } from 'react'
import { Button, Form, Row, Space, Spin } from 'antd'

import { Todo } from '../../types'
import { useStoreActions, useStoreState } from '../../store'

import TodoList from './TodoList'
import AddEditFormContainer from '../../ui/components/todolist/AddEditFormContainer'
import { createSampleData } from '../../ui/components/todolist/sampleData'
import styles from './todo.module.scss'

const TodoListPage: React.FC = () => {
  const [form] = Form.useForm()
  const [openModal, setOpenModal] = useState(false)
  const [todoToEdit, setTodoToEdit] = useState<Todo | undefined>(undefined)
  const [loading, setLoading] = useState(false)

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

  const handleFormFinish = (_name: string, { values }) => {
    setLoading(true)
    if (todoToEdit?.id) {
      editTodo({ ...values, id: todoToEdit.id })
      setLoading(false)
    } else {
      addTodo(values)
      setLoading(false)
    }
    setOpenModal(false)
    setTodoToEdit(undefined)
    form.resetFields()
  }

  const handleLoadData = () => {
    setLoading(true)
    const sampleData = createSampleData(6)
    const loadDataFunction = () => {
      loadData(sampleData)
      setLoading(false)
    }
    setTimeout(loadDataFunction, 1500)
  }

  return (
    <>
      <Spin spinning={loading}>
        <TodoList onEdit={handleEdit} />
      </Spin>
      <Form.Provider onFormFinish={handleFormFinish}>
        <AddEditFormContainer
          openModal={openModal}
          onCancel={handleCancel}
          onOk={handleOk}
          todoToEdit={todoToEdit}
          form={form}
        />
      </Form.Provider>

      <Row justify='center'>
        <Space className={styles.buttons}>
          <Button disabled={loading} type='primary' onClick={handleOpenModal}>
            Add new task
          </Button>
          <Button disabled={loading} type='primary' onClick={handleLoadData}>
            Load sample data
          </Button>
        </Space>
      </Row>
    </>
  )
}
export default TodoListPage
