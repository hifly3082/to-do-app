import { Link, useNavigate } from 'react-router-dom'
import { Button, Checkbox, Col, Form, Input, Row, message } from 'antd'
import { LoginOutlined } from '@ant-design/icons'

import { useStoreActions } from '../../../store'
import { User } from '../../../types'

const LogIn = () => {
  const navigate = useNavigate()
  const [form] = Form.useForm()

  const login = useStoreActions((actions) => actions.login)

  const onFinish = async (values: User) => {
    try {
      login(values)
      navigate('/')
      form.resetFields()
    } catch (error) {
      message.error('Login failed!')
    }
  }

  const handleClick = () => {
    form.submit()
  }

  return (
    <Row justify='center'>
      <Form
        name='login'
        form={form}
        initialValues={{
          email: 'johndoe@example.com',
          password: 'johndoe@example.com'
        }}
        onFinish={onFinish}>
        <Row gutter={{ xs: 8, sm: 16 }}>
          <Col xs={{ span: 24 }}>
            <Form.Item
              name='email'
              label='Email address'
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: 'Please input your email.'
                },
                {
                  type: 'email',
                  message: 'Your email is invalid.'
                }
              ]}>
              <Input placeholder='Email' size='large' autoComplete='off' />
            </Form.Item>
          </Col>

          <Col xs={{ span: 24 }}>
            <Form.Item
              name='password'
              hasFeedback
              label='Password'
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
              rules={[
                {
                  required: true,
                  message: 'Please input your password.'
                },
                { min: 6, message: 'Password must be minimum 6 characters.' }
              ]}>
              <Input.Password
                placeholder='Password'
                size='large'
                autoComplete='off'
              />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item>
          <Form.Item name='remember' valuePropName='checked' noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
          <Link to='#'>Forgot password?</Link>
        </Form.Item>

        <Row justify='center'>
          <Button
            type='primary'
            htmlType='submit'
            size='large'
            onClick={handleClick}>
            Log In <LoginOutlined />
          </Button>
        </Row>
      </Form>
    </Row>
  )
}
export default LogIn
