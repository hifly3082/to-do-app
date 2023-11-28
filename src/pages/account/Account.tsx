import {
  Avatar,
  Col,
  Typography,
  Descriptions,
  Row,
  Flex,
  Progress,
  Space
} from 'antd'
import type { DescriptionsProps } from 'antd'

const { Title } = Typography

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
    children: <Progress percent={50} status='active' />
  }
]

const Account: React.FC = () => (
  <Row justify='left' align='middle'>
    <Col span={4} offset={1}>
      <Title level={2}>Username</Title>
      <Avatar
        src={placeholder}
        size={200}
        style={{ border: '1px solid #ddd' }}
      />
    </Col>
    <Col span={8}>
      <Descriptions bordered column={1} items={items} />
    </Col>
  </Row>
)

export default Account
