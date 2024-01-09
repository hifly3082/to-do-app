import { Flex, Button, Checkbox, Popconfirm, Typography, Tooltip } from 'antd'
import { CopyOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons'
import dayjs from 'dayjs'

import { Todo } from '../../../types'
import { dateFormat } from './AddEditTodoForm'
import PopoverActionMenu from './PopoverActionMenu'

interface GetColumnsProps {
  handleDelete: (id?: string) => () => void
  handleDuplicate: (id?: string) => () => void
  handleEdit: (id?: string) => () => void
  handleToggleCompleted: (id?: string) => () => void
  md?: boolean
}

const { Title, Text, Paragraph } = Typography

export const getColumns = ({
  handleDelete,
  handleDuplicate,
  handleEdit,
  handleToggleCompleted,
  md
}: GetColumnsProps) => {
  return md
    ? // desktop version
      [
        {
          title: 'Done',
          dataIndex: '',
          key: 'completed',
          width: '2%',
          render: (todo: Todo) => (
            <Flex justify='center'>
              <Checkbox
                checked={todo.completed}
                onClick={handleToggleCompleted(todo.id)}
              />
            </Flex>
          )
        },
        {
          title: 'Due Date',
          dataIndex: '',
          key: 'dueDate',
          width: '15%',

          sorter: (a: Todo, b: Todo) => {
            const dateA = a.dueDate && dayjs(a.dueDate)
            const dateB = b.dueDate && dayjs(b.dueDate)

            return dateA && dateB
              ? dateA.isBefore(dateB)
                ? -1
                : dateA.isAfter(dateB)
                ? 1
                : 0
              : dateA
              ? 1
              : dateB
              ? -1
              : 0
          },
          render: (todo: Todo) => (
            <Text delete={todo.completed}>
              {todo.dueDate && dayjs(todo.dueDate).format(dateFormat)}
            </Text>
          )
        },
        {
          title: 'Name',
          dataIndex: '',
          key: 'name',
          width: '65%',

          render: (todo: Todo) => (
            <>
              <Title level={4} delete={todo.completed}>
                {todo.name}
              </Title>
              <Paragraph delete={todo.completed}>{todo.description}</Paragraph>
            </>
          )
        },
        {
          title: 'Actions',
          key: 'actions',
          width: '8%',
          render: (todo: Todo) => (
            <Flex gap='small'>
              <Tooltip title='Edit task'>
                <Button onClick={handleEdit(todo.id)}>
                  <EditOutlined />
                </Button>
              </Tooltip>
              <Tooltip title='Duplicate task'>
                <Button onClick={handleDuplicate(todo.id)}>
                  <CopyOutlined />
                </Button>
              </Tooltip>
              <Tooltip title='Delete task'>
                <Popconfirm
                  title='Confirm delete?'
                  placement='bottom'
                  onConfirm={handleDelete(todo.id)}>
                  <Button>
                    <DeleteOutlined />
                  </Button>
                </Popconfirm>
              </Tooltip>
            </Flex>
          )
        }
      ]
    : // mobile version
      [
        {
          key: 'name',
          render: (todo: Todo) => (
            <div>
              <Title level={4} delete={todo.completed}>
                {todo.name}
              </Title>
              {todo.description && (
                <Paragraph delete={todo.completed}>
                  {todo.description}
                </Paragraph>
              )}
              <Text type='secondary' delete={todo.completed}>
                {todo.dueDate && `by ${dayjs(todo.dueDate).format(dateFormat)}`}
              </Text>
            </div>
          )
        },
        {
          key: 'actions',
          render: (todo: Todo) => (
            <PopoverActionMenu
              todo={todo}
              onDelete={handleDelete(todo.id)}
              onDuplicate={handleDuplicate(todo.id)}
              onEdit={handleEdit(todo.id)}
              onToggleCompleted={handleToggleCompleted(todo.id)}
            />
          ),
          sorter: (a: Todo, b: Todo) => {
            const dateA = a.dueDate && dayjs(a.dueDate)
            const dateB = b.dueDate && dayjs(b.dueDate)

            return dateA && dateB
              ? dateA.isBefore(dateB)
                ? -1
                : dateA.isAfter(dateB)
                ? 1
                : 0
              : dateA
              ? 1
              : dateB
              ? -1
              : 0
          }
        }
      ]
}
