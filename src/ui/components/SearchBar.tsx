import { Input, Space } from 'antd'

import styles from '../ui.module.scss'

const { Search } = Input

const onSearch = (value, _e, info) => console.log(info?.source, value)

const SearchBar: React.FC = () => (
  <Space direction='vertical'>
    <Search
      placeholder='input search text'
      allowClear
      onSearch={onSearch}
      className={styles.searchbar}
    />
  </Space>
)

export default SearchBar
