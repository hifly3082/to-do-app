import { Tabs, Col, Form, message, Row } from 'antd'
import type { TabsProps } from 'antd'

import LogIn from './components/LogIn'
import SignUp from './components/SignUp'
import styles from './login.module.scss'

import { User } from '../../types'
import { useStoreActions } from '../../store'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
  const navigate = useNavigate()
  const [form] = Form.useForm()

  const login = useStoreActions((actions) => actions.login)

  const handleFinish = (values: User) => {
    try {
      login(values)
      form.resetFields()
      navigate('/')
    } catch (error) {
      if (error instanceof Error) {
        message.error(error.message || 'Login failed!')
      }
    }
  }

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: 'Log In',
      children: (
        <Row justify='center'>
          <LogIn form={form} onFinish={handleFinish} />
        </Row>
      )
    },
    {
      key: '2',
      label: 'Sign Up',
      children: (
        <Row justify='center'>
          <SignUp form={form} onFinish={handleFinish} />
        </Row>
      )
    }
  ]

  return (
    <Col className={styles.col}>
      <Tabs centered defaultActiveKey='1' items={items} />
    </Col>
  )
}
export default LoginPage
