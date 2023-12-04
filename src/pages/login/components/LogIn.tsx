import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button, Checkbox, Col, Form, Input, Row, message } from 'antd'
import { LoginOutlined } from '@ant-design/icons'

import { useStoreActions } from '../../../store'

const LogIn = () => {
  const [email, setEmail] = useState('example@gmail.com')
  const [password, setPassword] = useState('Example@gmai1')
  const [form] = Form.useForm()
  const navigate = useNavigate()

  const login = useStoreActions((actions) => actions.login)

  const onFinish = async (values) => {
    try {
      form.resetFields()
      navigate('/')
      login()
    } catch (error) {
      message.error('Login failed!')
    }
  }

  const handleClick = () => {
    form.submit()
  }

  return (
    <Form
      name='login'
      form={form}
      initialValues={{
        remember: false
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
            // rules={[
            //   {
            //     required: true,
            //     message: 'Please input your email.'
            //   },
            //   {
            //     type: 'email',
            //     message: 'Your email is invalid.'
            //   }
            // ]}
          >
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
            // rules={[
            //   {
            //     required: true,
            //     message: 'Please input your password.'
            //   },
            //   { min: 6, message: 'Password must be minimum 6 characters.' }
            // ]}
          >
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
  )
}
export default LogIn
