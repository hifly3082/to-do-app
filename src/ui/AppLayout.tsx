import { useState } from 'react'
import { Layout, Row } from 'antd'

import SiderContainer from './SiderContainer'
import HeaderContainer from './HeaderContainer'
import { useStoreState } from '../store'

const AppLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [open, setOpen] = useState(false)
  const isAuthenticated = useStoreState((state) => state.isAuthenticated)

  return (
    <Layout theme='light' style={{ height: '100vh' }}>
      <HeaderContainer setOpen={setOpen} />
      <Layout>
        {isAuthenticated && <SiderContainer open={open} setOpen={setOpen} />}
        <Layout
          style={{
            padding: '24px 24px'
          }}>
          <Row justify='center'>{children}</Row>
        </Layout>
      </Layout>
    </Layout>
  )
}

export default AppLayout
