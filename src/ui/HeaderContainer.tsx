import { Header } from 'antd/es/layout/layout'
import { Button, Grid } from 'antd'
import { MenuOutlined } from '@ant-design/icons'

import { useStoreState } from '../store'
import UserInfo from '../pages/account/components/UserInfo'
import styles from './ui.module.scss'

interface HeaderContainerProps {
  setOpen: () => void
}

const { useBreakpoint } = Grid

const HeaderContainer: React.FC<HeaderContainerProps> = ({ setOpen }) => {
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
