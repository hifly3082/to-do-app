import { UnorderedListOutlined, UserOutlined } from '@ant-design/icons'
import { Layout, Menu, theme } from 'antd'
import type { MenuProps } from 'antd'

import SearchBar from '../components/SearchBar'

const { Header, Content, Sider } = Layout

type MenuItem = Required<MenuProps>['items'][number]

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group'
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type
  } as MenuItem
}

const items: MenuItem[] = [
  getItem('User lists', '1', <UnorderedListOutlined />, [
    getItem('To do', '3')
  ]),
  getItem('Account', '2', <UserOutlined />)
]

const AppLayout: React.FC = ({ children }) => {
  const {
    token: { colorBgContainer }
  } = theme.useToken()

  return (
    <Layout style={{ height: '100vh' }}>
      <Header
        style={{
          display: 'flex',
          justifyContent: 'center',
          position: 'relative'
        }}>
        <SearchBar />
      </Header>
      <Layout>
        <Sider width={200} style={{ background: colorBgContainer }}>
          <Menu
            mode='inline'
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
            items={items}
          />
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer
            }}>
            {children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}

export default AppLayout
