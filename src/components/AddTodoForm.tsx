import { Card, Space, Button, Input, DatePicker, Form } from 'antd'
import { useStoreActions } from 'easy-peasy'

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8 }
}

const AddTodoForm = () => {
  const addTodo = useStoreActions((actions) => actions.addTodo)
  const [form] = Form.useForm()

  const onFinish = (values) => {
    addTodo(values)
  }

  return (
    <Space direction='vertical' size='middle' style={{ display: 'flex' }}>
      <Card title='Add task' size='small'>
        <Form {...layout} form={form} onFinish={onFinish}>
          <Form.Item
            label='Name'
            name='name'
            rules={[{ required: true, message: 'Please input the name' }]}>
            <Input />
          </Form.Item>

          <Form.Item
            label='Description'
            name='description'
            rules={[
              { required: true, message: 'Please input the description' }
            ]}>
            <Input />
          </Form.Item>

          <Form.Item
            label='Due Date'
            name='dueDate'
            rules={[
              { required: false, message: 'Please select the due date' }
            ]}>
            <DatePicker />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 4, span: 18 }}>
            <Button type='primary' htmlType='submit'>
              Add task
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </Space>
  )
}

export default AddTodoForm

// <input onChange={(e) => setTodoText(e.target.value)} value={todoText} />
// <button onClick={() => addTodo(todoText)}>Add Todo</button>
