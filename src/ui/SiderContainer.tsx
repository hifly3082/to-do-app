import { useState } from 'react'
import Sider from 'antd/es/layout/Sider'

import NavMenu from './components/NavMenu'
import { useStoreState } from '../store'

const SiderContainer = () => {
  const [collapsed, setCollapsed] = useState(false)
  const isAuthenticated = useStoreState((state) => state.isAuthenticated)

  return (
    isAuthenticated && (
      <Sider
        theme='light'
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}>
        <NavMenu />
      </Sider>
    )
  )
}
export default SiderContainer
