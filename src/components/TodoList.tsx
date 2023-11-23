import { Flex, Table, Button, Checkbox, Popconfirm } from 'antd'
import {
  CopyOutlined,
  EditOutlined,
  DeleteOutlined,
  CheckOutlined,
  CloseOutlined
} from '@ant-design/icons'
import { Todo } from '../types'
import { useStoreState, useStoreActions } from '../store'
// import { CheckboxChangeEvent } from 'antd/es/checkbox'

interface TodoListProps {
  onEdit: (id: string) => void
  // onChange: (e: CheckboxChangeEvent, id: string) => void
}

const TodoList: React.FC<TodoListProps> = ({ onEdit }) => {
  const todos = useStoreState((state) => state.todos)
  const deleteTodo = useStoreActions((actions) => actions.deleteTodo)
  const copyTodo = useStoreActions((actions) => actions.copyTodo)
  const toggleStatus = useStoreActions((actions) => actions.toggleStatus)

  const handleDelete = (id: string) => {
    deleteTodo(id)
  }
  const handleDuplicate = (id: string) => {
    copyTodo(id)
  }
  const handleEdit = (id: string) => {
    onEdit(id)
  }
  const handleToggleCompleted = (id: string) => {
    toggleStatus(id)
  }

  const columns = [
    {
      title: 'Completed',
      dataIndex: 'completed',
      key: 'completed',
      width: '5%',
      render: (todo: boolean) => <Checkbox checked={todo} />
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      width: '15%',
      render: (text: string, todo: Todo) => ({
        props: {
          style: {
            color: todo.completed === true ? '#c0c0c0' : 'inherit',
            textDecoration: todo.completed === true ? 'line-through' : 'none'
          }
        },
        children: <div>{text}</div>
      })
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
      width: '40%',
      render: (text: string, todo: Todo) => ({
        props: {
          style: {
            color: todo.completed === true ? '#c0c0c0' : 'inherit',
            textDecoration: todo.completed === true ? 'line-through' : 'none'
          }
        },
        children: <div>{text}</div>
      })
    },
    {
      title: 'Due Date',
      dataIndex: 'dueDate',
      key: 'dueDate',
      width: '10%',
      render: (text: string, todo: Todo) => ({
        props: {
          style: {
            color: todo.completed === true ? '#c0c0c0' : 'inherit',
            textDecoration: todo.completed === true ? 'line-through' : 'none'
          }
        },
        children: <div>{text}</div>
      })
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (todo: Todo) => (
        <>
          <Flex gap='small'>
            {/* <Tooltip title='Edit task'> */}
            <Button onClick={() => handleEdit(todo.id)}>
              <EditOutlined />
            </Button>
            {/* </Tooltip> */}
            {/* <Tooltip title='Duplicate task'> */}
            <Button onClick={() => handleDuplicate(todo.id)}>
              <CopyOutlined />
            </Button>
            {/* </Tooltip> */}
            <Popconfirm
              title='Sure to delete?'
              placement='bottom'
              onConfirm={() => handleDelete(todo.id)}>
              {/* <Tooltip title='Delete task'> */}
              <Button>
                <DeleteOutlined />
              </Button>
              {/* </Tooltip> */}
            </Popconfirm>
            <Button
              type='dashed'
              onClick={() => {
                handleToggleCompleted(todo.id)
              }}>
              {todo.completed === false ? <CheckOutlined /> : <CloseOutlined />}
            </Button>
          </Flex>
        </>
      )
    }
  ]

  return (
    <Table
      // rowSelection={{
      //   type: 'checkbox',
      //   onSelect: (record) => {
      //     handleToggleCompleted(record.id)
      //   }
      // }}
      columns={columns}
      dataSource={todos}
      rowKey='id'
    />
  )
}

export default TodoList
