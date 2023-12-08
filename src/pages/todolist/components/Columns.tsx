import {
  Flex,
  Button,
  Checkbox,
  Popconfirm,
  Typography,
  Popover,
  Menu,
  Space,
  List
} from 'antd'
import {
  CopyOutlined,
  EditOutlined,
  DeleteOutlined,
  MoreOutlined,
  CheckOutlined,
  CloseOutlined,
  ArrowUpOutlined
} from '@ant-design/icons'
import type { MenuProps } from 'antd'
import dayjs from 'dayjs'

import { Todo } from '../../../types'
import { dateFormat } from './AddEditTodoForm'
import { setEllipsis } from './helpers'

const { Title, Text, Paragraph } = Typography

const getColumns = (
  onDelete,
  handleDuplicate,
  handleEdit,
  handleToggleCompleted,
  md
) => {
  return md
    ? [
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
          // onCell: (todo: Todo) => ({
          //   style: {
          //     color: todo.completed ? '#c0c0c0' : 'inherit',
          //     textDecoration: todo.completed ? 'line-through' : 'none'
          //   }
          // }),
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
                onConfirm={onDelete(todo.id)}>
                <Button>
                  <DeleteOutlined />
                </Button>
              </Popconfirm>
            </Flex>
          )
        }
      ]
    : [
        {
          // title: (
          //   <Space>
          //     <Button>{<ArrowUpOutlined />}</Button>
          //     <Button>{`All`}</Button>
          //   </Space>
          // ),
          key: 'name',
          render: (todo: Todo) => (
            <div>
              <Title level={4} delete={todo.completed} color='#fff'>
                {todo.name}
              </Title>
              <Paragraph delete={todo.completed}>
                {setEllipsis(todo.description)}
              </Paragraph>
              <Text
                type='secondary'
                style={{ color: '#c0c0c0' }}
                delete={todo.completed}>
                {todo.dueDate && `by ${dayjs(todo.dueDate).format(dateFormat)}`}
              </Text>
            </div>
          )
        },
        {
          key: 'actions',
          render: (todo: Todo) => (
            <Popover
              content={
                <Menu style={{ border: 'none' }}>
                  <Menu.Item
                    key='0'
                    onClick={handleToggleCompleted(todo.id)}
                    icon={
                      todo.completed ? <CloseOutlined /> : <CheckOutlined />
                    }>
                    {`Mark as ${todo.completed ? 'incomplete' : 'completed'}`}
                  </Menu.Item>

                  <Menu.Item
                    key='1'
                    onClick={handleEdit(todo.id)}
                    icon={<EditOutlined />}>
                    Edit task
                  </Menu.Item>

                  <Menu.Item
                    key='2'
                    onClick={handleDuplicate(todo.id)}
                    icon={<CopyOutlined />}>
                    Duplicate task
                  </Menu.Item>

                  <Menu.Item key='3'>
                    <Popconfirm
                      title='Confirm delete?'
                      placement='top'
                      onConfirm={onDelete(todo.id)}>
                      <span onClick={(e) => e.preventDefault()}>
                        <DeleteOutlined /> Delete task
                      </span>
                    </Popconfirm>
                  </Menu.Item>
                </Menu>
              }
              trigger='click'
              placement='left'>
              <Button type='text'>
                <MoreOutlined />
              </Button>
            </Popover>
          )
        }
      ]
}

export default getColumns

//  <ReactMarkdown
//         className={styles.description}
//         children={isActive ? description : setEllipsis(descriptionPreview)}
//   />
