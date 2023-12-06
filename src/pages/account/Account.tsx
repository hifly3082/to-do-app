import {
  Avatar,
  Col,
  Typography,
  Descriptions,
  Row,
  Progress,
  Card,
  Grid
} from 'antd'
import type { DescriptionsProps } from 'antd'

const placeholder = 'https://avatar.iran.liara.run/public'
const items: DescriptionsProps['items'] = [
  {
    label: 'User Name',
    children: 'User Name'
  },
  {
    label: 'Time',
    children: '18:00:00'
  },
  {
    label: 'Tasks',
    children: <Progress percent={67} status='active' />
  }
]

const { useBreakpoint } = Grid

const Account: React.FC = () => {
  if (useBreakpoint().md)
    return (
      <>
        <Col span={8}>
          <Avatar
            src={placeholder}
            size={150}
            style={{ border: '1px solid #ddd' }}
          />
        </Col>
        <Col span={16}>
          <Descriptions bordered column={1} items={items} />
        </Col>
      </>
    )

  return (
    <Row justify='space-evenly'>
      <Col span={8}>
        <Avatar
          src={placeholder}
          size={100}
          style={{ border: '1px solid #ddd' }}
        />
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
