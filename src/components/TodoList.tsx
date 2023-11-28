import { Flex, Table, Button, Checkbox, Popconfirm, Descriptions } from 'antd'
import {
  CopyOutlined,
  EditOutlined,
  DeleteOutlined,
  CheckOutlined,
  CloseOutlined
} from '@ant-design/icons'

import { Todo } from '../types'
import { useStoreState, useStoreActions } from '../store'
import dayjs from 'dayjs'
import moment from 'moment'
import { dateFormat } from './AddEditTodoForm'

interface TodoListProps {
  onEdit: (id: string) => void
}

const TodoList: React.FC<TodoListProps> = ({ onEdit }) => {
  const todos = useStoreState((state) => state.todos)
  const deleteTodo = useStoreActions((actions) => actions.deleteTodo)
  const copyTodo = useStoreActions((actions) => actions.copyTodo)
  const toggleStatus = useStoreActions((actions) => actions.toggleStatus)

  const handleDelete = (id?: string) => () => {
    id && deleteTodo(id)
  }
  const handleDuplicate = (id?: string) => () => {
    id && copyTodo(id)
  }
  const handleEdit = (id?: string) => () => {
    id && onEdit(id)
  }
  const handleToggleCompleted = (id?: string) => () => {
    id && toggleStatus(id)
  }

  const columns = [
    {
      title: 'Completed',
      dataIndex: '',
      key: 'completed',
      width: '5%',
      onCell: (todo: Todo) => ({
        onClick: handleToggleCompleted(todo.id)
      }),
      render: (todo: Todo) => (
        <Flex justify='center'>
          <Checkbox checked={todo.completed} />
        </Flex>
      )
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      width: '50%',
      onCell: (todo: Todo) => ({
        style: {
          color: todo.completed ? '#c0c0c0' : 'inherit',
          textDecoration: todo.completed ? 'line-through' : 'none'
        }
      }),
      render: (text: string) => <div>{text}</div>
    },
    {
      title: 'Due Date',
      dataIndex: 'dueDate',
      key: 'dueDate',
      width: '20%',
      sorter: (a: Todo, b: Todo) => {
        const dateA = a.dueDate ? dayjs(a.dueDate).$d : null
        const dateB = b.dueDate ? dayjs(b.dueDate).$d : null

        if (dateA === null && dateB === null) {
          return 0
        }
        if (dateA === null) {
          return 1
        }
        if (dateB === null) {
          return -1
        }
        return dateA - dateB
      },
      onCell: (todo: Todo) => ({
        style: {
          color: todo.completed ? '#c0c0c0' : 'inherit',
          textDecoration: todo.completed ? 'line-through' : 'none'
        }
      }),
      render: (text: string) => (
        <div>{text && dayjs(text).format(dateFormat)}</div>
      )
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (todo: Todo) => (
        <Flex gap='small'>
          <Button onClick={handleEdit(todo.id)}>
            <EditOutlined />
          </Button>
          <Button onClick={handleDuplicate(todo.id)}>
            <CopyOutlined />
          </Button>
          <Popconfirm
            title='Confirm delete?'
            placement='bottom'
            onConfirm={handleDelete(todo.id)}>
            <Button>
              <DeleteOutlined />
            </Button>
          </Popconfirm>
        </Flex>
      )
    }
  ]

  const expandable = {
    expandedRowRender: (todo: Todo) => (
      <Descriptions
        style={{
          marginLeft: '5rem',
          color: todo.completed ? '#c0c0c0' : 'inherit',
          textDecoration: todo.completed ? 'line-through' : 'none'
        }}>
        <Descriptions.Item label='Description'>
          {todo.description}
        </Descriptions.Item>
      </Descriptions>
    ),
    rowExpandable: (todo: Todo) => todo.description
  }

  return (
    <Table
      // rowSelection={{
      //   type: 'checkbox',
      //   onSelect: (record) => {
      //     handleToggleCompleted(record.id)
      //   }
      // }}
      expandable={expandable}
      columns={columns}
      dataSource={todos}
      rowKey='id'
    />
  )
}

export default TodoList
