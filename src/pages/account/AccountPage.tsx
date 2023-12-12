import { useState } from 'react'
import {
  Avatar,
  Col,
  Typography,
  Row,
  Progress,
  Grid,
  Modal,
  Form,
  Input,
  Descriptions,
  Button,
  Layout,
  Tooltip,
  Card,
  Divider,
  List
} from 'antd'
import { EditOutlined } from '@ant-design/icons'
import { Content } from 'antd/es/layout/layout'

import { useStoreState } from '../../store'
import { calculateCompletionPercentage } from '../../utilities/helpers'
import styles from './account.module.scss'

const placeholder = 'https://avatar.iran.liara.run/public'

const Account: React.FC = () => {
  const todos = useStoreState((state) => state.todos)
  const { useBreakpoint } = Grid
  const { md } = useBreakpoint()

  const percentage = calculateCompletionPercentage(todos)

  const [username, setUsername] = useState('John Doe')
  const [email, setEmail] = useState('johndoe@example.com')

  return (
    <Layout>
      <Content className={styles.content}>
        <Card>
          <div>
            <Avatar src={placeholder} size={100} className={styles.avatar} />
            <Tooltip title='Edit profile'>
              <Button type='link' className={styles.button}>
                <EditOutlined />
              </Button>
            </Tooltip>

            <List>
              <List.Item>Name: {username}</List.Item>
              <List.Item>E-mail: {email}</List.Item>
              <List.Item>
                Tasks completed:
                <Progress percent={percentage} status='active' />
              </List.Item>
            </List>
          </div>
        </Card>
      </Content>
    </Layout>
  )
}

export default Account
