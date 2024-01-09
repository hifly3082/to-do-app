import { Link, useLocation } from 'react-router-dom'

import { Menu, MenuProps } from 'antd'
import {
  UnorderedListOutlined,
  UserOutlined,
  SecurityScanOutlined
} from '@ant-design/icons'
import { RouteNames } from '../../types'

type MenuItem = Required<MenuProps>['items'][number]

interface NavMenuProps {
  items?: MenuItem[]
}

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

const menuItems: MenuItem[] = [
  getItem(
    <Link to={`/${RouteNames.Todo}`}>To do list</Link>,
    `/${RouteNames.Todo}`,
    <UnorderedListOutlined />
  ),
  getItem(
    <Link to={`/${RouteNames.Account}`}>Account</Link>,
    `/${RouteNames.Account}`,
    <UserOutlined />
  ),
  getItem(
    <Link to={`/${RouteNames.About}`}>About</Link>,
    `/${RouteNames.About}`,
    <SecurityScanOutlined />
  )
]

const NavMenu: React.FC<NavMenuProps> = ({ items = menuItems }) => {
  const location = useLocation()

  return (
    <Menu
      data-testid='menu'
      theme='light'
      mode='inline'
      defaultSelectedKeys={[RouteNames.Todo]}
      selectedKeys={[location.pathname]}
      items={items}
      style={{ border: 'none' }}
    />
  )
}
export default NavMenu
