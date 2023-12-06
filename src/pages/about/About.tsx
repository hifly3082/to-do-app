import { Layout, Typography, Button, Card, Row, Col, Grid } from 'antd'
import {
  BellOutlined,
  AntDesignOutlined,
  SlidersOutlined,
  MobileOutlined
} from '@ant-design/icons'

const { Content } = Layout

const features = [
  {
    title: 'User-Friendly Interface',
    icon: <AntDesignOutlined />,
    description:
      "We've designed our app with you in mind. Choose from various themes, categorize your tasks, and personalize your experience for optimal efficiency."
  },
  {
    title: 'Feature-Rich Functionality',
    subheader: 'Most popular',
    icon: <SlidersOutlined />,
    description:
      'From simple task lists to advanced project management, Todo app caters to all your organizational needs. Set due dates, create subtasks, and prioritize your to-dos with ease'
  },
  {
    title: 'Cross-Platform Accessibility',
    icon: <MobileOutlined />,
    description:
      "Your tasks should be where you are. That's why Todo app seamlessly syncs across all your devices, be it your smartphone, tablet, or computer."
  },
  {
    title: 'Smart Reminders',
    icon: <BellOutlined />,
    description:
      'Never miss a deadline again. Todo app sends you timely reminders, ensuring that you stay on top of your tasks and commitments.'
  }
]

const { useBreakpoint } = Grid

const About = () => {
  const { sm, md, lg } = useBreakpoint()
  return (
    <Layout>
      <Content>
        <div style={{ padding: '1rem 0' }}>
          <Typography.Title level={2} align='center'>
            Your Todo App
          </Typography.Title>
          <Typography.Paragraph align='center' style={{ padding: '1rem' }}>
            <Col xs={24} sm={20}>
              We understand the hustle of daily life and the constant challenge
              of managing tasks, deadlines, and personal goals.
              <br />
              That's why we created this powerful yet simple todo app - to
              empower you to take control of your day and make the most out of
              every moment.
            </Col>
          </Typography.Paragraph>
        </div>

        <Row gutter={[16, 16]} justify='center'>
          {features.map((feature) => (
            <Col key={feature.title} span={6} xs={24} sm={12}>
              <Card
                title={
                  <Typography.Title level={5}>{feature.title}</Typography.Title>
                }
                extra={feature.icon}>
                <Typography.Text>{feature.description}</Typography.Text>
              </Card>
            </Col>
          ))}
        </Row>
      </Content>
    </Layout>
  )
}

export default About
