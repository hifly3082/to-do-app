import { Link, useLocation } from 'react-router-dom'

import { Menu, MenuProps } from 'antd'
import {
  UnorderedListOutlined,
  UserOutlined,
  SecurityScanOutlined
} from '@ant-design/icons'
import { RouteNames } from '../../types'
import styles from '../ui.module.scss'

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

const NavMenu = () => {
  const location = useLocation()

  return (
    <Menu
      theme='light'
      mode='inline'
      defaultSelectedKeys={[RouteNames.Todo]}
      selectedKeys={[location.pathname]}
      items={items}
      className={styles.menu}
    />
  )
}
export default NavMenu
