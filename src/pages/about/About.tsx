import { Typography, Row, Col, Card, Button, Divider } from 'antd'
import { DownloadOutlined } from '@ant-design/icons'

const { Title, Paragraph } = Typography

const About = () => {
  return (
    <div>
      <Row>
        <Col span={8}>
          <Card>
            <Title level={2}>Welcome to Todo app!</Title>
            <Paragraph>
              This is your ultimate companion in the journey to productivity and
              organization. <br />
              We understand the hustle of daily life and the constant challenge
              of managing tasks, deadlines, and personal goals. That's why we
              created this powerful yet simple todo app - to empower you to take
              control of your day and make the most out of every moment.
            </Paragraph>
            <Button type='primary' icon={<DownloadOutlined />} size='large'>
              Get Started
            </Button>
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Title level={2}>Our Mission</Title>
            <Paragraph>
              At Todo app, our mission is clear: to empower individuals to
              achieve their goals and dreams by providing a seamless and
              intuitive platform for task management. We believe that a
              well-organized life leads to increased productivity, reduced
              stress, and a happier, more fulfilled you.
            </Paragraph>
          </Card>
        </Col>
      </Row>

      <Divider />

      <Row>
        <Col span={8}>
          <Card>
            <Title level={2}>Why Todo app?</Title>
            <Paragraph>
              <ul>
                <li>
                  <strong>User-Friendly Interface:</strong> We've designed our
                  app with you in mind. The user-friendly interface ensures that
                  you can start organizing your tasks right away, without the
                  need for a learning curve.
                </li>
                <li>
                  <strong>Feature-Rich Functionality:</strong> From simple task
                  lists to advanced project management, Todo app caters to all
                  your organizational needs. Set due dates, create subtasks, and
                  prioritize your to-dos with ease.
                </li>
                <li>
                  <strong>Cross-Platform Accessibility:</strong> Your tasks
                  should be where you are. That's why Your Todo app seamlessly
                  syncs across all your devices, be it your smartphone, tablet,
                  or computer.
                </li>
                <li>
                  <strong>Smart Reminders:</strong> Never miss a deadline again.
                  Todo app sends you timely reminders, ensuring that you stay on
                  top of your tasks and commitments.
                </li>
                <li>
                  <strong>Customization at Your Fingertips:</strong> Tailor Todo
                  app to fit your unique workflow. Choose from various themes,
                  categorize your tasks, and personalize your experience for
                  optimal efficiency.
                </li>
              </ul>
            </Paragraph>
          </Card>
        </Col>

        <Col span={8}>
          <Card>
            <Title level={2}>Who We Are</Title>
            <Paragraph>
              Todo app is more than just a product; it's a reflection of the
              passion and dedication of our team. Comprising a diverse group of
              individuals with a shared commitment to simplifying your life, we
              work tirelessly to enhance and refine the app based on your
              feedback and evolving needs.
            </Paragraph>
          </Card>
        </Col>
      </Row>
    </div>
  )
}
export default About
