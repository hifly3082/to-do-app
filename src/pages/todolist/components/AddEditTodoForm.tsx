import { useEffect } from 'react'
import { Input, DatePicker, Form, FormInstance } from 'antd'
import dayjs from 'dayjs'

import { Todo } from '../../../types'
import styles from './todo.module.scss'

interface AddEditTodoFormProps {
  todoToEdit?: Todo
  form: FormInstance
}

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 14 }
}

export const dateFormat = 'MMM D, YYYY HH:mm'

const AddEditTodoForm: React.FC<AddEditTodoFormProps> = ({
  form,
  todoToEdit
}) => {
  useEffect(() => {
    form.setFieldsValue({
      name: todoToEdit?.name,
      description: todoToEdit?.description,
      dueDate: todoToEdit?.dueDate ? dayjs(todoToEdit?.dueDate) : null
    })
  }, [todoToEdit, form])

  return (
    <Form {...layout} form={form}>
      <Form.Item
        label='Name'
        name='name'
        rules={[{ required: true, message: 'Please input the task name' }]}>
        <Input />
      </Form.Item>

      <Form.Item label='Description' name='description'>
        <Input />
      </Form.Item>

      <Form.Item label='Due Date' name='dueDate'>
        <DatePicker
          showTime
          format={dateFormat}
          className={styles.full_width}
        />
      </Form.Item>
    </Form>
  )
}

export default AddEditTodoForm
