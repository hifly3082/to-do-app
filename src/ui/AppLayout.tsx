import { Layout } from 'antd'

import SiderContainer from './SiderContainer'
import HeaderContainer from './HeaderContainer'

const AppLayout: React.FC = ({ children }) => {
  return (
    <Layout style={{ height: '100vh' }}>
      <HeaderContainer />
      <Layout>
        <SiderContainer />
        <Layout style={{ padding: '0 24px 24px' }}>{children}</Layout>
      </Layout>
    </Layout>
  )
}

export default AppLayout
