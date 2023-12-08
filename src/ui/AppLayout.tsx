import { useState } from 'react'
import { Layout, Grid } from 'antd'

import SiderContainer from './SiderContainer'
import HeaderContainer from './HeaderContainer'
import { useStoreState } from '../store'

const { useBreakpoint } = Grid

const AppLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [open, setOpen] = useState(false)
  const isAuthenticated = useStoreState((state) => state.isAuthenticated)
  const { md } = useBreakpoint()

  return (
    <Layout theme='light' style={{ height: '100vh' }}>
      {isAuthenticated && <HeaderContainer setOpen={setOpen} />}
      <Layout>
        {isAuthenticated && <SiderContainer open={open} setOpen={setOpen} />}
        <Layout
          style={
            md
              ? {
                  padding: '1.5rem 1.5rem'
                }
              : { padding: '0 0.8rem' }
          }>
          {children}
        </Layout>
      </Layout>
    </Layout>
  )
}

export default AppLayout
