import { Link } from 'react-router-dom'
import { Grid, Avatar, Button, Menu, Popover, Space, Typography } from 'antd'
import { UserOutlined, LogoutOutlined } from '@ant-design/icons'

interface UserInfoProps {
  isAuthenticated: boolean
  logout: () => void
}

const placeholder = 'https://avatar.iran.liara.run/public'

const { useBreakpoint } = Grid

const UserInfo: React.FC<UserInfoProps> = ({ isAuthenticated, logout }) => {
  const { md } = useBreakpoint()

  const handleLogout = () => {
    logout()
  }

  if (!isAuthenticated) return null

  return (
    <Popover
      content={
        <Menu data-testid='content' style={{ border: 'none' }}>
          <Menu.Item key='0' icon={<UserOutlined />}>
            <Link to='/account'>Account</Link>
          </Menu.Item>

          <Menu.Item key='1' onClick={handleLogout} icon={<LogoutOutlined />}>
            Logout
          </Menu.Item>
        </Menu>
      }
      title={
        <Space data-testid='title' align='center'>
          <Avatar size={56} src={placeholder} />
          <div>
            <Typography.Title level={5}>M. Avvakumov</Typography.Title>
            <Typography.Text type='secondary'>Developer</Typography.Text>
          </div>
        </Space>
      }
      trigger='click'
      placement='bottomRight'>
      <Button type='link' data-testid='userinfo'>
        <Space>
          <Avatar data-testid='avatar' size={md ? 30 : 25} src={placeholder} />{' '}
          {md && 'Mark Avvakumov'}
        </Space>
      </Button>
    </Popover>
  )
}

export default UserInfo
