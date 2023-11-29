import { Avatar, Button, Typography } from 'antd'
import { Link } from 'react-router-dom'
import { RouteNames } from '../types'
import { useStoreActions, useStoreState } from '../store'

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
  const isAuthenticated = useStoreState((state) => state.isAuthenticated)
  const logout = useStoreActions((actions) => actions.logout)
  const handleLogout = () => {
    logout()
  }

  return isAuthenticated ? (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <Link to={`/${RouteNames.Account}`}>
        <Avatar size='small' src={placeholder} />
        <Typography.Text style={styles.username}>Username</Typography.Text>
      </Link>
      <Button onClick={handleLogout}>Log out</Button>
    </div>
  ) : (
    <Link to={`/${RouteNames.Login}`}>Log in or Sign up</Link>
  )
}

export default UserInfo
