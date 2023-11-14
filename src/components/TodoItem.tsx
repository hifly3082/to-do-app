import { useStoreState } from 'easy-peasy'
import { Table, Button } from 'antd'
import { ForkOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons'

const columns = [
  {
    title: 'Check Status',
    dataIndex: 'status',
    key: 'status'
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description'
  },
  {
    title: 'Due Date',
    dataIndex: 'dueDate',
    key: 'dueDate'
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <span>
        <Button type='link' onClick={() => handleEdit(record.key)}>
          <EditOutlined />
        </Button>
        <Button type='link' onClick={() => handleDuplicate(record.key)}>
          <ForkOutlined />
        </Button>
        <Button type='link' onClick={() => handleDelete(record.key)}>
          <DeleteOutlined />
        </Button>
      </span>
    )
  }
]

function TodoItem() {
  const todos = useStoreState((state) => state.todos)

  return <Table columns={columns} dataSource={todos} />
}

export default TodoItem
