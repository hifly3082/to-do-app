import { Layout, Typography, Card, Col, Grid } from 'antd'

import { features } from './features'
import styles from './about.module.scss'

const { Content } = Layout

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
