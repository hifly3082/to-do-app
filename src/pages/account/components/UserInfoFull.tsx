import { Link } from 'react-router-dom'
import { Avatar, Button, Menu, Popover, Space, Typography } from 'antd'
import { LogoutOutlined, UserOutlined } from '@ant-design/icons'

import { placeholder } from './UserInfoContainer'

const UserInfoFull = ({ onLogout }) => {
  return (
    <Popover
      content={
        <Menu style={{ border: 'none' }}>
          <Menu.Item key='0' icon={<UserOutlined />}>
            <Link to='/account'>Account</Link>
          </Menu.Item>

          <Menu.Item key='1' icon={<LogoutOutlined />} onClick={onLogout}>
            Logout
          </Menu.Item>
        </Menu>
      }
      title={
        <Space align='center'>
          <Avatar size={56} src={placeholder} />
          <div>
            <Typography.Title level={5}>John Doe</Typography.Title>
            <Typography.Text type='secondary'>Developer</Typography.Text>
          </div>
        </Space>
      }
      trigger='click'
      placement='bottomRight'>
      <Button type='link'>
        <Space align='center'>
          <Avatar size='small' src={placeholder} /> John Doe
        </Space>
      </Button>
    </Popover>
  )
}
export default UserInfoFull
