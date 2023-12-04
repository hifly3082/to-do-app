import { Avatar, Button, Space, Typography } from 'antd'
import { LogoutOutlined, LoginOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import { RouteNames } from '../../../types'
import { useStoreActions, useStoreState } from '../../../store'

const placeholder = 'https://avatar.iran.liara.run/public'
const styles = {
  container: {
    display: 'flex'
  },
  username: {
    marginLeft: 8,
    color: 'black'
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
      <Button shape='round' onClick={handleLogout}>
        <LogoutOutlined />
      </Button>
    </div>
  ) : null
  //   (
  //   location.pathname !== '/login' && (
  //     <Button
  //       size='large'
  //       shape='round'
  //       // type='link'
  //       style={{ marginRight: '-2rem' }}>
  //       <Link to={`/${RouteNames.Login}`}>
  //         <LoginOutlined />
  //       </Link>
  //     </Button>
  //   )
  // )
}

export default UserInfo
