import { Header } from 'antd/es/layout/layout'
import { Button, Grid } from 'antd'
import { MenuOutlined } from '@ant-design/icons'

import UserInfoContainer from '../pages/account/components/UserInfoContainer'
import { useStoreState } from '../store'

const { useBreakpoint } = Grid

const HeaderContainer = ({ setOpen }) => {
  const isAuthenticated = useStoreState((state) => state.isAuthenticated)
  const { md, lg } = useBreakpoint()

  return md ? (
    <Header
      style={{
        padding: '0 1rem',
        backgroundColor: '#fefefe',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
      <div></div>
      <UserInfoContainer />
    </Header>
  ) : (
    <Header
      style={{
        padding: '0 1rem',
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
      <UserInfoContainer />
    </Header>
  )
}
export default HeaderContainer
