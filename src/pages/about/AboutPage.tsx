import { Layout, Typography, Card, Col, Grid } from 'antd'
import {
  BellOutlined,
  AntDesignOutlined,
  SlidersOutlined,
  MobileOutlined
} from '@ant-design/icons'

import styles from './about.module.scss'

const { Content } = Layout

const features = [
  {
    title: 'User-friendly interface',
    icon: <AntDesignOutlined />,
    description:
      "We've designed our app with you in mind. Choose from various themes, categorize your tasks, and personalize your experience for optimal efficiency."
  },
  {
    title: 'Extensive features',
    subheader: 'Most popular',
    icon: <SlidersOutlined />,
    description:
      'From simple task lists to advanced project management, Todo app caters to all your organizational needs. Set due dates, create subtasks, and prioritize your to-dos with ease'
  },
  {
    title: 'Universal platform access',
    icon: <MobileOutlined />,
    description:
      "Your tasks should be where you are. That's why Todo app seamlessly syncs across all your devices, be it your smartphone, tablet, or computer."
  },
  {
    title: 'Smart reminders',
    icon: <BellOutlined />,
    description:
      'Never miss a deadline again. Todo app sends you timely reminders, ensuring that you stay on top of your tasks and commitments.'
  }
]
const { useBreakpoint } = Grid

const About: React.FC = () => {
  const { md } = useBreakpoint()

  return (
    <Layout>
      <Content className={styles.content}>
        <Typography.Title level={2}>Your Todo App</Typography.Title>
        <Typography.Paragraph className={styles.paragraph}>
          We understand the hustle of daily life and the challenge of managing
          tasks, deadlines, and personal goals.
          <br />
          That's why we created this powerful yet simple todo app - to take
          control of your day and make the most out of every moment.
        </Typography.Paragraph>

        <div className={md ? styles.desktop_grid : styles.mobile_grid}>
          {features.map((feature) => (
            <Col key={feature.title} className={styles.grid}>
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
