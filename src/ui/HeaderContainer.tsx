import { Header } from 'antd/es/layout/layout'
import { Button, Grid } from 'antd'
import { MenuOutlined } from '@ant-design/icons'

import UserInfo from '../pages/account/components/UserInfo'
import { useStoreState } from '../store'

const { useBreakpoint } = Grid

const HeaderContainer = ({ setOpen }) => {
  const isAuthenticated = useStoreState((state) => state.isAuthenticated)

  return useBreakpoint().lg ? (
    <Header
      style={{
        backgroundColor: '#fefefe',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
      <div></div>
      <UserInfo />
    </Header>
  ) : (
    <Header
      style={{
        backgroundColor: '#fefefe',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
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
