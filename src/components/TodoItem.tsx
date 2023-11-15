import { useStoreState, useStoreActions } from 'easy-peasy'
import { Table, Button, Checkbox } from 'antd'
import { CopyOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons'
import { Todo } from '../types'

function TodoItem() {
  const columns = [
    {
      title: 'Check Status',
      dataIndex: 'status',
      key: 'status',
      width: '5%',
      render: (status: boolean) => <Checkbox checked={status} />
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      width: '15%'
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
      width: '40%'
    },
    {
      title: 'Due Date',
      dataIndex: 'dueDate',
      key: 'dueDate',
      width: '10%'
    },
    {
      title: 'Action',
      key: 'action',
      render: (record: Todo) => (
        <span>
          <Button type='link' onClick={() => handleEdit(record.key)}>
            <EditOutlined />
          </Button>
          <Button type='link' onClick={() => handleDuplicate(record.id)}>
            <CopyOutlined />
          </Button>
          <Button type='link' onClick={() => handleDelete(record.id)}>
            <DeleteOutlined />
          </Button>
        </span>
      )
    }
  ]
  const todos = useStoreState((state) => state.todos)
  const deleteTodo = useStoreActions((actions) => actions.deleteTodo)
  const copyTodo = useStoreActions((actions) => actions.copyTodo)

  const handleDelete = (id: string) => {
    deleteTodo(id)
  }
  const handleDuplicate = (id: string) => {
    copyTodo(id)
  }

  return <Table columns={columns} dataSource={todos} rowKey='id' />
}

export default TodoItem
