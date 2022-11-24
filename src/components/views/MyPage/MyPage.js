import React, { useState } from 'react';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu } from 'antd';
import MainHeader from '../MainHeader/MainHeader';
const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem('예매 내역', '1'),
  getItem('취소 내역', '2'),
  getItem('문의 관련', 'sub1', <></>, [
    getItem('문의 하기', '3'),
    getItem('문의 조회', '4'),
  ]),
  getItem('관리자와 채팅', 'sub2', <></>, [
    getItem('정경수', '5'),
    getItem('김성탁', '6'),
  ])
];
function MyPage() {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div>
    <MainHeader/>
    <Layout>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
      <Layout className="site-layout">
        <Content style={{margin: '0 16px' }}>
          <div className="site-layout-background">
            <div className='userInfo' style={{border: '1px solid black', width: '60%', height: '350px', margin: '0 auto', marginTop: '20px'}}>
              <div className='userIcon'style={{width: '170px', height: '170px', border: '1px solid black', borderRadius: '50%', margin: '2rem' }} >

              </div>
            </div>
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
    </div>
  );
}


export default MyPage;