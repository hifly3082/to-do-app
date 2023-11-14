import { useState } from 'react'
import { Link } from 'react-router-dom'

import Sider from 'antd/es/layout/Sider'
import { Menu, MenuProps } from 'antd'
import {
  UnorderedListOutlined,
  UserOutlined,
  SecurityScanOutlined
} from '@ant-design/icons'

type MenuItem = Required<MenuProps>['items'][number]

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label
  } as MenuItem
}

const items: MenuItem[] = [
  getItem(<Link to='/lists'>User lists</Link>, '1', <UnorderedListOutlined />, [
    getItem(<Link to='/lists/todo'>To do</Link>, '4')
  ]),
  getItem(<Link to='/account'>Account</Link>, '2', <UserOutlined />),
  getItem(<Link to='/about'>About</Link>, '3', <SecurityScanOutlined />)
]

const SiderContainer = () => {
  const [collapsed, setCollapsed] = useState(false)
  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}>
      <Menu
        theme='dark'
        defaultSelectedKeys={['1']}
        mode='inline'
        items={items}
      />
    </Sider>
  )
}
export default SiderContainer
