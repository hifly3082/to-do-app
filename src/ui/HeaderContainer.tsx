import { Header } from 'antd/es/layout/layout'
import SearchBar from '../components/SearchBar'

const HeaderContainer = () => {
  return (
    <Header
      style={{
        display: 'flex',
        justifyContent: 'center',
        position: 'relative'
      }}>
      <SearchBar />
    </Header>
  )
}
export default HeaderContainer
