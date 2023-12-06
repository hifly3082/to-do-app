import { Typography, Row, Col, Card, Button, Divider, Image, Grid } from 'antd'
import { ArrowRightOutlined } from '@ant-design/icons'
import HomeImg from '../../assets/about.png'
import { Link } from 'react-router-dom'
const { Title, Paragraph } = Typography

const { useBreakpoint } = Grid

const Home = () => {
  return (
    <Col>
      <Row justify='center'>
        <Image preview={false} src={HomeImg} width={450} />
      </Row>
      <Row justify='center'>
        <Title level={2}>
          Manage your {useBreakpoint().xs && <br />} daily tasks
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
export default Home
