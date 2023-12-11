import { Button, Menu, Popconfirm, Popover } from 'antd'
import { Todo } from '../../../types'
import {
  CopyOutlined,
  EditOutlined,
  DeleteOutlined,
  MoreOutlined,
  CheckOutlined,
  CloseOutlined
} from '@ant-design/icons'
import { useState } from 'react'

interface PopoverActionMenuProps {
  todo: Todo
  onToggleCompleted: () => void
  onEdit: () => void
  onDuplicate: () => void
  onDelete: () => void
}

const PopoverActionMenu: React.FC<PopoverActionMenuProps> = ({
  todo,
  onToggleCompleted,
  onEdit,
  onDuplicate,
  onDelete
}) => {
  const [open, setOpen] = useState(false)

  const hide = () => {
    setOpen(false)
  }
  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen)
  }
  const handleToggleCompleted = () => {
    onToggleCompleted()
    hide()
  }
  const handleEdit = () => {
    onEdit()
    hide()
  }
  const handleDuplicate = () => {
    onDuplicate()
    hide()
  }
  const handleDelete = () => {
    onDelete()
    hide()
  }

  return (
    <Popover
      content={
        <Menu style={{ border: 'none' }}>
          <Menu.Item
            key='0'
            onClick={handleToggleCompleted}
            icon={todo.completed ? <CloseOutlined /> : <CheckOutlined />}>
            {`Mark as ${todo.completed ? 'incomplete' : 'completed'}`}
          </Menu.Item>

          <Menu.Item key='1' onClick={handleEdit} icon={<EditOutlined />}>
            Edit task
          </Menu.Item>

          <Menu.Item key='2' onClick={handleDuplicate} icon={<CopyOutlined />}>
            Duplicate task
          </Menu.Item>

          <Menu.Item key='3'>
            <Popconfirm
              title='Confirm delete?'
              placement='top'
              onConfirm={handleDelete}>
              <DeleteOutlined /> Delete task
            </Popconfirm>
          </Menu.Item>
        </Menu>
      }
      open={open}
      trigger='click'
      onOpenChange={handleOpenChange}
      placement='left'>
      <Button type='text'>
        <MoreOutlined />
      </Button>
    </Popover>
  )
}
export default PopoverActionMenu
