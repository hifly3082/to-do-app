import { useState } from 'react'
import { Layout, Grid } from 'antd'

import SiderContainer from './SiderContainer'
import HeaderContainer from './HeaderContainer'
import { useStoreState } from '../store'
import styles from './ui.module.scss'

const { useBreakpoint } = Grid

const AppLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [open, setOpen] = useState(false)
  const isAuthenticated = useStoreState((state) => state.isAuthenticated)
  const { md } = useBreakpoint()

  return (
    <Layout theme='light' className={styles.fullheight}>
      {isAuthenticated && <HeaderContainer setOpen={setOpen} />}
      <Layout>
        {isAuthenticated && <SiderContainer open={open} setOpen={setOpen} />}
        <Layout className={md ? styles.desktop_layout : styles.mobile_layout}>
          {children}
        </Layout>
      </Layout>
    </Layout>
  )
}

export default AppLayout
