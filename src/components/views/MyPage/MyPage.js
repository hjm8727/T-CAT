import React from 'react';
import { ScheduleOutlined, DeleteOutlined, WhatsAppOutlined, GithubOutlined} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import MainHeader from '../MainHeader/MainHeader';
import { Route, Routes, useNavigate } from 'react-router-dom';
import RList from './section/RList';
import CList from './section/CList';
import Contact from './section/Iquiry/Contact';
import IqList from './section/Iquiry/IqList';

// function xxx(items) {
//   if(items.key === '2') {
//     alert("dmfkdkdk");
//   } 
// };

function MyPage() {
  const { Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}


const items = [
  getItem('예매 내역', '/MyPage/RList', <ScheduleOutlined />),
  getItem('취소 내역', '/MyPage/CList', <DeleteOutlined />),
  getItem('문의 관련', 'sub1', <WhatsAppOutlined />, [
    getItem('문의 하기', '/MyPage/Contact'),
    getItem('문의 조회', '/MyPage/IqList'),
  ]),
  getItem('관리자와 채팅', 'sub2', <GithubOutlined />, [
    getItem('정경수', '5'),
    getItem('김성탁', '6'),
  ])
];
  const navigate = useNavigate();
  // const [collapsed, setCollapsed] = useState(false);
  // collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} 사이드 안에 있었
  
  return (
    <div>
    <MainHeader/>
      <div style={{width: '70%', margin: '0 auto'}}>
    <Layout>
      <Sider>
        <div className="logo"/>
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} onClick={({key})=>{navigate(key);}}
        />
      </Sider>
      <Layout className="site-layout">
        <Content style={{margin: '0 16px' }}>
          <div className="site-layout-background">
            <div className='userInfo' style={{border: '1px solid black', width: '60%', height: '350px', margin: '0 auto', marginTop: '20px'}}>
              <div className='userIcon'style={{width: '25%', height: '40%', border: '1px solid black', borderRadius: '50%', margin: '2rem' }} >

              </div>
            </div>
          </div>
        </Content>
        <Footer></Footer>
      </Layout>
    </Layout>
    <br/>
      <div style={{border: '1px solid black', width: '100%', height: '350px'}}>
        <MyBody/>
      </div>
      </div>
    </div>
  );
}

const MyBody = () => (
    <>
    <Routes>
      <Route path='/RList' element={<RList/>}/>
      <Route path='/CList' element={<CList/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/IqLIst' element={<IqList/>}/>
    </Routes>
    </>
);

export default MyPage;