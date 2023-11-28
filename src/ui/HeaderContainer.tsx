import { Header } from 'antd/es/layout/layout'
// import SearchBar from '../components/SearchBar'
import UserInfo from '../components/UserInfo'
import Logo from '../components/Logo'

const HeaderContainer = () => {
  return (
    <Header
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
      {/* <SearchBar /> */}
      <Logo />
      <UserInfo />
    </Header>
  )
}
export default HeaderContainer
