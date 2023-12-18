import { Grid, Avatar, Button, Menu, Popover, Space, Typography } from 'antd'
import { UserOutlined, LogoutOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import { useStoreActions, useStoreState } from '../../../store'

const placeholder = 'https://avatar.iran.liara.run/public'

const { useBreakpoint } = Grid

const UserInfo = () => {
  const { md } = useBreakpoint()
  const isAuthenticated = useStoreState((state) => state.isAuthenticated)
  const logout = useStoreActions((actions) => actions.logout)

  const handleLogout = () => {
    logout()
  }

  if (!isAuthenticated) return null

  return (
    <Popover
      content={
        <Menu style={{ border: 'none' }}>
          <Menu.Item key='0' icon={<UserOutlined />}>
            <Link to='/account'>Account</Link>
          </Menu.Item>

          <Menu.Item key='1' onClick={handleLogout} icon={<LogoutOutlined />}>
            Logout
          </Menu.Item>
        </Menu>
      }
      title={
        <Space align='center'>
          <Avatar size={56} src={placeholder} />
          <div>
            <Typography.Title level={5}>M. Avvakumov</Typography.Title>
            <Typography.Text type='secondary'>Developer</Typography.Text>
          </div>
        </Space>
      }
      trigger='click'
      placement='bottomRight'>
      <Button type='link'>
        <Space>
          <Avatar size={md ? 30 : 25} src={placeholder} />{' '}
          {md && 'Mark Avvakumov'}
        </Space>
      </Button>
    </Popover>
  )
}

export default UserInfo
