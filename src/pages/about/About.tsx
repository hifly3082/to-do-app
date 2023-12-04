import { Typography, Row, Col, Card, Button, Divider, Image } from 'antd'
import { ArrowRightOutlined } from '@ant-design/icons'
import HomeImg from '../../assets/home.png'
import { Link } from 'react-router-dom'
const { Title, Paragraph } = Typography

const About = () => {
  return (
    <Col xs={{ span: 20 }}>
      <Row justify='center'>
        <Image preview={false} src={HomeImg} />
      </Row>
      <Row justify='center'>
        <Title level={1}>
          Manage your <br /> daily tasks
        </Title>
      </Row>
      <Divider />
      <Row justify='center'>
        <Paragraph>
          This is your ultimate companion in the journey to productivity and
          organization. <br />
          Boost your productivity today! Start organizing your tasks with our
          intuitive ToDo app.
        </Paragraph>
      </Row>
      <Row justify='center'>
        <Button type='primary' size='large' style={{ marginTop: '1rem' }}>
          <Link to='/login'>
            Get Started <ArrowRightOutlined />
          </Link>
        </Button>
      </Row>
    </Col>
  )
}
export default About
