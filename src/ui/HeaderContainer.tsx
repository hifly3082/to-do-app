import { Header } from 'antd/es/layout/layout'
import { Button, Grid } from 'antd'
import { MenuOutlined } from '@ant-design/icons'

import { useStoreActions, useStoreState } from '../store'
import UserInfo from '../pages/account/components/UserInfo'
import styles from './ui.module.scss'

interface HeaderContainerProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const { useBreakpoint } = Grid

const HeaderContainer: React.FC<HeaderContainerProps> = ({ setOpen }) => {
  const { md } = useBreakpoint()
  const isAuthenticated = useStoreState((state) => state.isAuthenticated)
  const logout = useStoreActions((actions) => actions.logout)

  return md ? (
    <Header className={styles.header}>
      <div></div>
      <UserInfo />
    </Header>
  ) : (
    <Header className={styles.header}>
      {isAuthenticated && (
        <Button onClick={() => setOpen((prev) => !prev)}>
          <MenuOutlined />
        </Button>
      )}
      <UserInfo isAuthenticated={isAuthenticated} logout={logout} />
    </Header>
  )
}
export default HeaderContainer
