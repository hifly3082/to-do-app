import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button, Checkbox, Form, Input, Row } from 'antd'
import { LoginOutlined } from '@ant-design/icons'
import { useStoreActions } from '../../store'

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
    } catch (error) {}
  }

  const handleClick = () => {
    form.submit()
  }

  return (
    <>
      <Form
        name='signin'
        form={form}
        initialValues={{
          remember: false
        }}
        onFinish={onFinish}>
        <Form.Item
          name='email'
          hasFeedback
          label='Email address'
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
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
            icon={<LoginOutlined />}
            size='large'
            onClick={handleClick}>
            Log In
          </Button>
        </Row>
      </Form>
    </>
  )
}
export default LogIn
