import { useState } from 'react'
import { Popover } from 'antd'

const PopoverBox: React.FC = ({ children }) => {
  const [open, setOpen] = useState(false)

  const hide = () => {
    setOpen(false)
  }

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen)
  }

  return (
    <Popover
      title='Title'
      trigger='click'
      open={open}
      onOpenChange={handleOpenChange}>
      {children}
    </Popover>
  )
}

export default PopoverBox
