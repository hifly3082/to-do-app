import { Input, Space } from 'antd'

const { Search } = Input

const onSearch = (value, _e, info) => console.log(info?.source, value)

const SearchBar: React.FC = () => (
  <Space direction='vertical'>
    <Search
      placeholder='input search text'
      allowClear
      onSearch={onSearch}
      style={{ width: 'auto', position: 'absolute', top: '25%' }}
    />
  </Space>
)

export default SearchBar
