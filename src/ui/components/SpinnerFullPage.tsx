import { LoadingOutlined } from '@ant-design/icons'
import { Spin } from 'antd'

const Spinner: React.FC = () => (
  <Spin
    tip='Loading'
    size='large'
    fullscreen
    indicator={<LoadingOutlined style={{ fontSize: 96 }} spin />}
  />
)

export default Spinner