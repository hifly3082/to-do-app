import { Drawer, Grid } from 'antd'
import Sider from 'antd/es/layout/Sider'

import NavMenu from './components/NavMenu'

const { useBreakpoint } = Grid

const SiderContainer = ({ open, setOpen }) => {
  const showMenu = () => {
    setOpen(true)
  }

  const closeMenu = () => {
    setOpen(false)
  }

  return useBreakpoint().lg ? (
    <Sider
      theme='light'
      collapsible
      collapsed={open}
      onCollapse={(value) => setOpen(value)}>
      <NavMenu />
    </Sider>
  ) : (
    <Drawer title='Navigation' placement='left' onClose={closeMenu} open={open}>
      <NavMenu />
    </Drawer>
  )
}

export default SiderContainer
