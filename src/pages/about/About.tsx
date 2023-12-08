import { Layout, Typography, Card, Col, Grid } from 'antd'
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

const About = () => {
  const { useBreakpoint } = Grid
  const { md } = useBreakpoint()

  return (
    <Layout>
      <Content style={{ padding: md ? '1rem' : '0.5rem', textAlign: 'center' }}>
        <Typography.Title level={2}>Your Todo App</Typography.Title>
        <Typography.Paragraph style={{ marginBottom: '1.5rem' }}>
          We understand the hustle of daily life and the constant challenge of
          managing tasks, deadlines, and personal goals.
          <br />
          That's why we created this powerful yet simple todo app - to empower
          you to take control of your day and make the most out of every moment.
        </Typography.Paragraph>

        <div
          style={{
            display: 'grid',
            gap: '1rem',
            gridTemplateColumns: md ? 'repeat(2, 1fr)' : '1fr'
          }}>
          {features.map((feature) => (
            <Col
              key={feature.title}
              style={{
                display: 'grid'
              }}>
              <Card title={feature.title} extra={feature.icon}>
                <Typography.Text>{feature.description}</Typography.Text>
              </Card>
            </Col>
          ))}
        </div>
      </Content>
    </Layout>
  )
}

export default About
