import { Avatar, Col, Typography, Row, Progress, Grid } from 'antd'
import styles from './account.module.scss'

const placeholder = 'https://avatar.iran.liara.run/public'

const Account: React.FC = () => {
  const { useBreakpoint } = Grid
  const { md } = useBreakpoint()

  return (
    <Row justify='space-evenly'>
      <Col span={8}>
        <Avatar src={placeholder} size={100} className={styles.avatar} />
      </Col>
      <Col span={4}>
        <Typography.Text strong>Username</Typography.Text>
        <Typography.Text strong>Progress</Typography.Text>
        <Progress percent={67} status='active' />
      </Col>
    </Row>
  )
}

export default Account
