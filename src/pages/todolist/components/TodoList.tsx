import { Table, Grid } from 'antd'

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

  return (
    <Table
      columns={getColumns({
        handleDelete,
        handleDuplicate,
        handleEdit,
        handleToggleCompleted,
        md
      })}
      dataSource={todos}
      rowKey='id'
      pagination={{ position: ['bottomLeft'] }}
    />
  )
}

export default TodoList
