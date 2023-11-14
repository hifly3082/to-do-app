import { Avatar, Typography } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  username: {
    marginLeft: 8,
    color: 'white'
  }
}

const UserInfo = () => {
  return (
    <div style={styles.container}>
      <Link to='/account'>
        <Avatar size='small' icon={<UserOutlined />} />
        <Typography.Text style={styles.username}>Username</Typography.Text>
      </Link>
    </div>
  )
}

export default UserInfo
