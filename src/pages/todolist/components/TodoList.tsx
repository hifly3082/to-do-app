import { Flex, Table, Button, Checkbox, Popconfirm, Descriptions } from 'antd'
import {
  CopyOutlined,
  EditOutlined,
  DeleteOutlined,
  CheckOutlined,
  CloseOutlined
} from '@ant-design/icons'

import { Todo } from '../../../types'
import { useStoreState, useStoreActions } from '../../../store'
import dayjs from 'dayjs'
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
        const dateA = a.dueDate && dayjs(a.dueDate)
        const dateB = b.dueDate && dayjs(b.dueDate)
        // console.log(
        //   dayjs(a.dueDate ?? '1900-01-01T00:00:00.000Z').isBefore(
        //     dayjs(b.dueDate ?? '1900-01-01T00:00:00.000Z')
        //   )
        // )

        // ONLY SHORT TERNARY EXPRESSION WORKS WITHOUT TS PROBLEMS. IT ALSO DOESN'T NEED ANY TYPE CHECKS OVER NULL OR UNDEFINED

        return dateA && dateB // Checks if both dateA and dateB are truthy (not null or undefined). If both dateA and dateB are truthy, it compares them.
          ? dateA.isBefore(dateB)
            ? -1 // If dateA is before dateB, it returns -1
            : dateA.isAfter(dateB)
            ? 1 // If dateA is after dateB, it returns 1
            : 0 // If they are equal, it returns 0
          : dateA // If either dateA or dateB is falsy (but not both), it returns 1 or -1 depending on which one is truthy.
          ? 1 // If dateA is truthy, returns 1
          : dateB // If dateA is falsy, it checks the next condition:
          ? -1 // If dateB is truthy, returns -1
          : 0 // If both conditions are false, returns 0.

        // WORKS INCORRECTLY BECAUSE NULL VALUE IS EVALUEATED BY DATE CONSTRUCTOR AS "1970-01-01T00:00:00.000Z"
        // return new Date(a.dueDate) - new Date(b.dueDate)

        // DOESNT'T WORK
        // return dayjs(a.dueDate ?? '1900-01-01T00:00:00.000Z').isBefore(
        //   dayjs(b.dueDate ?? '1900-01-01T00:00:00.000Z')
        // )
        //   ? -1
        //   : 1

        // NEITHER DAYJS OR DATE CONSTRUCTOR WORKS WITH EMPTY STRINGS OR NULL SO WE NEED TO PERFORM CHECK

        // if (dateA === null && dateB === null) {
        //   return 0
        // } else if (dateA === null) {
        //   return 1
        // } else if (dateB === null) {
        //   return -1
        // }

        // MULTIPLE TS ERRORS, TYPE GUARD DOESN'T FIX THE PROBLEM

        // if (dateA.isBefore(dateB)) {
        //   return -1
        // } else if (dateA.isAfter(dateB)) {
        //   return 1
        // } else {
        //   return 0
        // }

        // WORKS WITH TS ERRORS:    'dateA' is possibly 'null' or 'undefined'.ts(18049)    &     Property 'isBefore' does not exist on type '"" | Dayjs'.
        // if (dateA.isBefore(dateB)) {
        //   return -1
        // } else if (dateA.isAfter(dateB)) {
        //   return 1
        // } else {
        //   return 0
        // }
        // TYPE GUARD AND TYPE ASSERTIONS DOESN'T FIX THE PROBLEM AND ALSO FAILS THE SORTER
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
          marginLeft: '10rem',
          color: todo.completed ? '#c0c0c0' : 'inherit',
          textDecoration: todo.completed ? 'line-through' : 'none'
        }}>
        <Descriptions.Item
          contentStyle={{
            color: todo.completed ? '#c0c0c0' : 'inherit',
            textDecoration: todo.completed ? 'line-through' : 'none'
          }}>
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
