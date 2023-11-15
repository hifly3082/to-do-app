import { useStoreState } from 'easy-peasy'
import { Table, Button, Checkbox } from 'antd'
import { CopyOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons'

const columns = [
  {
    title: 'Check Status',
    dataIndex: 'status',
    key: 'status',
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
    render: (record) => (
      <span>
        <Button type='link' onClick={() => handleEdit(record.key)}>
          <EditOutlined />
        </Button>
        <Button type='link' onClick={() => handleDuplicate(record.key)}>
          <CopyOutlined />
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
