import { Layout } from 'antd'

import SiderContainer from './SiderContainer'
import HeaderContainer from './HeaderContainer'

const AppLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Layout theme='light' style={{ height: '100vh' }}>
      <HeaderContainer />
      <Layout>
        <SiderContainer />
        <Layout
          style={{
            padding: '24px 24px',
            background: 'linear-gradient(0deg, #ffffff 0%, #969696 100%)'
          }}>
          {children}
        </Layout>
      </Layout>
    </Layout>
  )
}

export default AppLayout
