import {
  Avatar,
  Progress,
  Button,
  Layout,
  Tooltip,
  Card,
  List,
  Typography
} from 'antd'
import { EditOutlined } from '@ant-design/icons'
import { Content } from 'antd/es/layout/layout'

import { useStoreState } from '../../store'
import { calculateCompletionPercentage } from '../../utilities/helpers'
import styles from './account.module.scss'

const placeholder = 'https://avatar.iran.liara.run/public'

const Account: React.FC = () => {
  const todos = useStoreState((state) => state.todos)
  const percentage = calculateCompletionPercentage(todos)

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
              <Typography.Paragraph>Name: Mark Avvakumov</Typography.Paragraph>
              <Typography.Paragraph>
                E-mail: mav@example.com
              </Typography.Paragraph>

              <Typography.Paragraph>
                Tasks completed:
                <Progress percent={percentage} status='active' />
              </Typography.Paragraph>
            </List>
          </div>
        </Card>
      </Content>
    </Layout>
  )
}

export default Account
