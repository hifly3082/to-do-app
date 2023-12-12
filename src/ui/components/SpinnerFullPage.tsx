import { LoadingOutlined } from '@ant-design/icons'
import { Spin } from 'antd'

import styles from '../ui.module.scss'

const Spinner: React.FC = () => (
  <Spin
    size='large'
    fullscreen
    indicator={<LoadingOutlined className={styles.spinner_fp} spin />}
  />
)

export default Spinner
