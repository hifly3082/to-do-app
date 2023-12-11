import { Flex, Button, Checkbox, Popconfirm, Typography, Tooltip } from 'antd'
import { CopyOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons'
import dayjs from 'dayjs'

import { Todo } from '../../../types'
import { dateFormat } from './AddEditTodoForm'
import PopoverActionMenu from './PopoverActionMenu'

import './todo.scss'
interface GetColumnsProps {
  handleDelete: (id?: string) => () => void
  handleDuplicate: (id?: string) => () => void
  handleEdit: (id?: string) => () => void
  handleToggleCompleted: (id?: string) => () => void
  md?: boolean
}

const { Title, Text, Paragraph } = Typography

const getColumns = ({
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
          title: 'Completed',
          dataIndex: '',
          key: 'completed',
          width: '5%',
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
          width: '10%',
          sorter: (a: Todo, b: Todo) => {
            const dateA = a.dueDate && dayjs(a.dueDate)
            const dateB = b.dueDate && dayjs(b.dueDate)

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
              <Title level={4} delete={todo.completed} className='ellipsis'>
                {todo.name}
              </Title>
              <Paragraph delete={todo.completed} className='ellipsis'>
                {todo.description}
              </Paragraph>
            </>
          )
        },

        {
          title: 'Actions',
          key: 'actions',
          width: '10%',
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
          title: '',
          key: 'name',
          width: '85%',
          render: (todo: Todo) => (
            <div>
              <Title level={3} delete={todo.completed} className='ellipsis'>
                {todo.name}
              </Title>
              <Paragraph delete={todo.completed} className='ellipsis'>
                {todo.description}
              </Paragraph>
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
          )
        }
      ]
}

export default getColumns

//  <ReactMarkdown
//         className={styles.description}
//         children={isActive ? description : setEllipsis(descriptionPreview)}
//   />
