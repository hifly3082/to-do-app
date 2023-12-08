import { Tabs, Card, Row, Col } from 'antd'
import type { TabsProps } from 'antd'

import LogIn from './components/LogIn'
import SignUp from './components/SignUp'

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
    <Col style={{ padding: '24px 24px' }}>
      <Tabs centered defaultActiveKey='1' items={items} />
    </Col>
  )
}
export default LoginPage
