import { Table, Button, Checkbox } from 'antd'
import { CopyOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons'
import { ExtendedTodo } from '../types'
import { useStoreState, useStoreActions } from '../store'

interface TodoListProps {
  onEdit: (id: string) => void
}

const TodoList: React.FC<TodoListProps> = ({ onEdit }) => {
  const todos = useStoreState((state) => state.todos)
  const deleteTodo = useStoreActions((actions) => actions.deleteTodo)
  const copyTodo = useStoreActions((actions) => actions.copyTodo)
  // const toggleStatus = useStoreActions((actions) => actions.toggleStatus)

  const handleDelete = (id: string) => {
    deleteTodo(id)
  }
  const handleDuplicate = (id: string) => {
    copyTodo(id)
  }
  const handleEdit = (id: string) => {
    onEdit(id)
  }

  // const handleToggleCompleted = (id: string, completed: boolean) => {
  //   toggleStatus(id, completed)
  // }

  const columns = [
    {
      title: 'Check Status',
      dataIndex: 'completed',
      key: 'completed',
      width: '5%',
      render: (todo: ExtendedTodo) => (
        <Checkbox
          // onChange={(e) => handleToggleCompleted(todo.id, e.target.checked)}
          checked={todo.completed} // doesn't work
        />
      )
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
      title: 'Actions',
      key: 'actions',
      render: (todo: ExtendedTodo) => (
        <span>
          <Button onClick={() => handleEdit(todo.id)}>
            <EditOutlined />
          </Button>
          <Button onClick={() => handleDuplicate(todo.id)}>
            <CopyOutlined />
          </Button>
          <Button onClick={() => handleDelete(todo.id)}>
            <DeleteOutlined />
          </Button>
        </span>
      )
    }
  ]

  return <Table columns={columns} dataSource={todos} rowKey='id' />
}

export default TodoList
