import { Avatar, Col, Typography, Row, Progress, Grid } from 'antd'
import './account.module.scss'

const placeholder = 'https://avatar.iran.liara.run/public'

const Account: React.FC = () => {
  const { useBreakpoint } = Grid
  const { md } = useBreakpoint()

  return md ? (
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
  ) : (
    <>
      <h1>text-overflow on a fluid width container</h1>
      <div style={{ display: 'flex', width: '100%' }} className='wrapper'>
        <div className='fluid' style={{ flex: '1 1 100%', minWidth: '0' }}>
          <div
            className='fluid-content'
            style={{
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap'
            }}>
            This div does not have a fixed width. Its content will not wrap. If
            the content does not fit it will be truncated with ellipses.
          </div>
        </div>
        <div className='static'>
          <div className='static-content' style={{ width: '200px' }}>
            fixed width
          </div>
        </div>
      </div>
    </>
  )
}

export default Account
