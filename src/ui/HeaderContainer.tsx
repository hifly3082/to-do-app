import { Header } from 'antd/es/layout/layout'
// import SearchBar from '../components/SearchBar'
import UserInfo from '../components/UserInfo'

const HeaderContainer = () => {
  return (
    <Header
      style={{
        display: 'flex',
        justifyContent: 'flex-end'
      }}>
      {/* <SearchBar /> */}
      <UserInfo />
    </Header>
  )
}
export default HeaderContainer
