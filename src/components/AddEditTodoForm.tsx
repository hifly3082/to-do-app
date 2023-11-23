import { useEffect } from 'react'
import { Input, DatePicker, Form, FormInstance } from 'antd'

import { Todo } from '../types'
import dayjs from 'dayjs'

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 14 }
}

interface AddEditTodoFormProps {
  initialValues?: Todo
  form: FormInstance
}

const AddEditTodoForm: React.FC<AddEditTodoFormProps> = ({
  form,
  initialValues
}) => {
  useEffect(() => {
    form.setFieldsValue({
      name: initialValues?.name,
      description: initialValues?.description,
      dueDate: initialValues?.dueDate
        ? dayjs(initialValues?.dueDate, 'MMM D, YYYY | hh:mm')
        : ''
    })
  }, [initialValues, form])

  return (
    <Form
      {...layout}
      form={form}
      initialValues={{
        ...initialValues,
        dueDate: dayjs(initialValues?.dueDate, 'MMM D, YYYY | hh:mm')
      }}>
      <Form.Item
        label='Name'
        name='name'
        rules={[{ required: true, message: 'Please input the name' }]}>
        <Input />
      </Form.Item>

      <Form.Item
        label='Description'
        name='description'
        rules={[{ required: true, message: 'Please input the description' }]}>
        <Input />
      </Form.Item>

      <Form.Item
        label='Due Date'
        name='dueDate'
        rules={[{ required: false, message: 'Please select the due date' }]}>
        <DatePicker
          showTime
          format='DD-MM-YYYY, HH:mm'
          style={{ width: '100%' }}
        />
      </Form.Item>
    </Form>
  )
}

export default AddEditTodoForm
