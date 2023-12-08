import { Table, Descriptions, Grid } from 'antd'

import { Todo } from '../../../types'
import { useStoreState, useStoreActions } from '../../../store'

import getColumns from './Columns'

interface TodoListProps {
  onEdit: (id: string) => void
}

const TodoList: React.FC<TodoListProps> = ({ onEdit }) => {
  const todos = useStoreState((state) => state.todos)
  const deleteTodo = useStoreActions((actions) => actions.deleteTodo)
  const copyTodo = useStoreActions((actions) => actions.copyTodo)
  const toggleStatus = useStoreActions((actions) => actions.toggleStatus)

  const { useBreakpoint } = Grid
  const { md } = useBreakpoint()

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
      expandable={md ? expandable : false}
      columns={getColumns(
        handleDelete,
        handleDuplicate,
        handleEdit,
        handleToggleCompleted,
        md
      )}
      dataSource={todos}
      rowKey='id'
    />
  )
}

export default TodoList
