import { Tabs, Card, Row } from 'antd'
import type { TabsProps } from 'antd'

import LogIn from './LogIn'
import SignUp from './SignUp'

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
    <Row justify='center'>
      <Card style={{ width: 600 }}>
        <Tabs centered defaultActiveKey='1' items={items} />
      </Card>
    </Row>
  )
}
export default LoginPage
