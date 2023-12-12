import { Tabs, Col } from 'antd'
import type { TabsProps } from 'antd'

import LogIn from './components/LogIn'
import SignUp from './components/SignUp'
import styles from './login.module.scss'

const items: TabsProps['items'] = [
  {
    key: '1',
    label: 'Log In',
    children: <LogIn />
  },
  {
    key: '2',
    label: 'Sign Up',
    children: <SignUp />
  }
]

const LoginPage = () => {
  return (
    <Col className={styles.col}>
      <Tabs centered defaultActiveKey='1' items={items} />
    </Col>
  )
}
export default LoginPage
