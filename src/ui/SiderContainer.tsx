import { useState } from 'react'

import Sider from 'antd/es/layout/Sider'
import NavMenu from '../components/NavMenu'

const SiderContainer = () => {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}>
      <NavMenu />
    </Sider>
  )
}
export default SiderContainer
