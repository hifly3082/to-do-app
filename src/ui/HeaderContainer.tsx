import { Header } from 'antd/es/layout/layout'
import { Button, Grid } from 'antd'
import { MenuOutlined } from '@ant-design/icons'

import { useStoreActions, useStoreState } from '../store'
import UserInfo from './components/UserInfo'
import styles from './ui.module.scss'

interface HeaderContainerProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const { useBreakpoint } = Grid

const HeaderContainer: React.FC<HeaderContainerProps> = ({ setOpen }) => {
  const { md } = useBreakpoint()
  const isAuthenticated = useStoreState((state) => state.isAuthenticated)
  const logout = useStoreActions((actions) => actions.logout)

  const handleClick = () => {
    setOpen((prev) => !prev)
  }

  return md ? (
    <Header data-testid='header' className={styles.header}>
      <div></div>
      <UserInfo isAuthenticated={isAuthenticated} logout={logout} />
    </Header>
  ) : (
    <Header data-testid='header' className={styles.header}>
      {isAuthenticated && (
        <Button onClick={handleClick}>
          <MenuOutlined />
        </Button>
      )}
      <UserInfo isAuthenticated={isAuthenticated} logout={logout} />
    </Header>
  )
}
export default HeaderContainer
