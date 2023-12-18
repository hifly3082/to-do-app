import { Drawer, Grid } from 'antd'
import Sider from 'antd/es/layout/Sider'

import NavMenu from './components/NavMenu'

const { useBreakpoint } = Grid

interface SiderContainerProps {
  open: boolean
  setOpen: (arg0: boolean) => void
}

const SiderContainer: React.FC<SiderContainerProps> = ({ open, setOpen }) => {
  const { md } = useBreakpoint()

  const closeMenu = () => {
    setOpen(false)
  }

  return md ? (
    <Sider
      theme='light'
      collapsible
      collapsed={open}
      onCollapse={(value) => setOpen(value)}>
      <NavMenu />
    </Sider>
  ) : (
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
