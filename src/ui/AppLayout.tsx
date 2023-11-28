import { Layout } from 'antd'

import SiderContainer from './SiderContainer'
import HeaderContainer from './HeaderContainer'

const AppLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Layout style={{ height: '100vh' }}>
      <HeaderContainer />
      <Layout>
        <SiderContainer />
        <Layout
          style={{
            padding: '24px 24px',
            background:
              'linear-gradient(0deg, rgba(35, 115, 195, 1) 0%, rgba(45, 255, 165, 1) 100%)'
          }}>
          {children}
        </Layout>
      </Layout>
    </Layout>
  )
}

export default AppLayout
