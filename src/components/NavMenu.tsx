import { Link, useLocation } from 'react-router-dom'

import { Menu, MenuProps } from 'antd'
import {
  UnorderedListOutlined,
  UserOutlined,
  SecurityScanOutlined
} from '@ant-design/icons'
import { RouteNames } from '../types'

type MenuItem = Required<MenuProps>['items'][number]

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    label,
    key,
    icon,
    children
  } as MenuItem
}

const items: MenuItem[] = [
  getItem(
    <Link to={`/${RouteNames.Lists}`}>User lists</Link>,
    RouteNames.Lists,
    <UnorderedListOutlined />,
    [getItem(<Link to={`/${RouteNames.Todo}`}>To do</Link>, RouteNames.Todo)]
  ),
  getItem(
    <Link to={`/${RouteNames.Account}`}>Account</Link>,
    RouteNames.Account,
    <UserOutlined />
  ),
  getItem(
    <Link to={`/${RouteNames.About}`}>About</Link>,
    RouteNames.About,
    <SecurityScanOutlined />
  )
]

const NavMenu = () => {
  const location = useLocation()

  return (
    <Menu
      theme='dark'
      mode='inline'
      defaultSelectedKeys={[RouteNames.About]}
      selectedKeys={[location.pathname]}
      items={items}
    />
  )
}
export default NavMenu
