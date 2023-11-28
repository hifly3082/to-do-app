import { Avatar, Typography } from 'antd'
import { Link } from 'react-router-dom'
import { RouteNames } from '../types'

const placeholder = 'https://avatar.iran.liara.run/public'
const styles = {
  container: {
    display: 'flex'
  },
  username: {
    marginLeft: 8,
    color: 'white'
  }
}

const UserInfo = () => {
  return (
    <Link to={`/${RouteNames.Account}`}>
      <Avatar size='small' src={placeholder} />
      <Typography.Text style={styles.username}>Username</Typography.Text>
    </Link>
  )
}

export default UserInfo
