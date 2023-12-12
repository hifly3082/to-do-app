import { Header } from 'antd/es/layout/layout'
import { Button, Grid } from 'antd'
import { MenuOutlined } from '@ant-design/icons'

import UserInfo from '../pages/account/components/UserInfo'
import { useStoreState } from '../store'
import styles from './ui.module.scss'

const { useBreakpoint } = Grid

const HeaderContainer = ({ setOpen }) => {
  const isAuthenticated = useStoreState((state) => state.isAuthenticated)
  const { md } = useBreakpoint()

  return md ? (
    <Header className={styles.header}>
      <div></div>
      <UserInfo />
    </Header>
  ) : (
    <Header className={styles.header}>
      {isAuthenticated && (
        <Button onClick={setOpen}>
          <MenuOutlined />
        </Button>
      )}
      <UserInfo />
    </Header>
  )
}
export default HeaderContainer
