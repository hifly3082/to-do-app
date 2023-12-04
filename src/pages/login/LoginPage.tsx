import { Tabs, Card, Row } from 'antd'
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
  return <Tabs centered defaultActiveKey='1' items={items} />
}
export default LoginPage
