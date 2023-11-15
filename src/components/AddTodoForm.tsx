import { Space, Button, Input, DatePicker, Form } from 'antd'
import { useStoreActions } from 'easy-peasy'
import { Todo } from '../types'

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8 }
}

const AddTodoForm = () => {
  const [form] = Form.useForm()
  const addTodo = useStoreActions((actions) => actions.addTodo)
  const toggleModal = useStoreActions((actions) => actions.modal.toggleModal)

  const handleSubmit = (values: Todo) => {
    addTodo(values)
    form.resetFields()
    toggleModal()
  }

  return (
    <Space direction='vertical' size='middle' style={{ display: 'flex' }}>
      <Form {...layout} form={form} onFinish={handleSubmit}>
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
          <DatePicker />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 4, span: 18 }}>
          <Button type='primary' htmlType='submit'>
            Add task
          </Button>
        </Form.Item>
      </Form>
    </Space>
  )
}

export default AddTodoForm
