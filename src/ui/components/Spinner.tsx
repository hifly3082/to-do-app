import { LoadingOutlined } from '@ant-design/icons'
import { Spin } from 'antd'

const Spinner: React.FC = () => (
  <Spin
    size='large'
    indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />}
  />
)

export default Spinner
