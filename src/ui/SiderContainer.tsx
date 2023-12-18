import { Drawer, Grid } from 'antd'
import Sider from 'antd/es/layout/Sider'

import NavMenu from './components/NavMenu'

const { useBreakpoint } = Grid

const SiderContainer = ({ open, setOpen }) => {
  const closeMenu = () => {
    setOpen(false)
  }

  if (useBreakpoint().md)
    return (
      <Sider
        theme='light'
        collapsible
        collapsed={open}
        onCollapse={(value) => setOpen(value)}>
        <NavMenu />
      </Sider>
    )

  return (
    <Drawer
      title='Navigation'
      placement='left'
      open={open}
      onClose={closeMenu}
      onClick={closeMenu}>
      <NavMenu />
    </Drawer>
  )
}

export default SiderContainer
