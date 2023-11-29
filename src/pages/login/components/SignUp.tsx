import { useState } from 'react'
import { Row, Col, Form, Input, Button, Checkbox, message } from 'antd'
import { UserAddOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'

export default function SignUp() {
  const [checked, setChecked] = useState(false)
  const [form] = Form.useForm()

  const onFinish = async () => {
    try {
      form.resetFields()
    } catch (error) {
      message.error('Something went wrong!')
    }
  }

  const onCheckboxChange = (e) => {
    setChecked(e.target.checked)
  }

  const validation = (rule, value, callback) => {
    if (checked) {
      return callback()
    }
    return callback('Please agree Terms of Use & Privacy policy')
  }

  return (
    <Form name='signup' initialValues={{}} onFinish={onFinish} form={form}>
      <Row gutter={{ xs: 8, sm: 16 }}>
        <Col xs={{ span: 24 }} md={{ span: 12 }}>
          <Form.Item
            hasFeedback
            name='firstName'
            label='First name'
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
            rules={[
              {
                required: true,
                message: 'Please input your first name.'
              },
              {
                min: 2,
                message: 'Your first name must be at least 2 characters long.'
              }
            ]}>
            <Input placeholder='First name' size='large' autoComplete='off' />
          </Form.Item>
        </Col>
        <Col xs={{ span: 24 }} md={{ span: 12 }}>
          <Form.Item
            hasFeedback
            name='lastName'
            label='Last name'
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
            rules={[
              {
                required: true,
                message: 'Please input your last name.'
              },
              {
                min: 2,
                message: 'Your last name must be at least 2 characters long.'
              }
            ]}>
            <Input placeholder='Last name' size='large' autoComplete='off' />
          </Form.Item>
        </Col>
      </Row>

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

      <Row gutter={{ xs: 8, sm: 16 }}>
        <Col xs={{ span: 24 }} md={{ span: 12 }}>
          <Form.Item
            name='password'
            label='Password'
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
            hasFeedback
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

        <Col xs={{ span: 24 }} md={{ span: 12 }}>
          <Form.Item
            name='confirm'
            label='Confirm Password'
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
            dependencies={['password']}
            hasFeedback
            rules={[
              {
                required: true,
                message: 'Confirm your password.'
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve()
                  }
                  return Promise.reject(
                    new Error('The password does not match')
                  )
                }
              })
            ]}>
            <Input.Password
              placeholder='Confirm password'
              size='large'
              autoComplete='off'
            />
          </Form.Item>
        </Col>
      </Row>

      <Form.Item>
        <Form.Item
          name='agree'
          valuePropName='checked'
          noStyle
          rules={[{ validator: validation }]}>
          <Checkbox checked={checked} onChange={onCheckboxChange}>
            I agree to <Link to='#'>Terms of Use & Privacy policy</Link>.
          </Checkbox>
        </Form.Item>
      </Form.Item>

      <Row justify='center'>
        <Button
          type='primary'
          htmlType='submit'
          icon={<UserAddOutlined />}
          size='large'>
          Sign Up
        </Button>
      </Row>
    </Form>
  )
}
