import { FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { Button, Checkbox, Col, Form, FormInstance, Input, Row } from 'antd'
import { LoginOutlined } from '@ant-design/icons'

import { User } from '../../../types'

interface LoginFormProps {
  form: FormInstance
  onFinish: (values: User) => void
}

const LogIn: React.FC<LoginFormProps> = ({ form, onFinish }) => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    form.submit()
  }

  return (
    <Form
      name='login'
      form={form}
      initialValues={{
        email: 'mav@example.com',
        password: 'mav@example.com'
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
          onSubmit={handleSubmit}>
          Log In <LoginOutlined />
        </Button>
      </Row>
    </Form>
  )
}
export default LogIn
