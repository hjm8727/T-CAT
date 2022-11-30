import React, { useState } from 'react';
import { ScheduleOutlined, DeleteOutlined, WhatsAppOutlined, GithubFilled} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import MainHeader from '../MainHeader/MainHeader';
import { Route, Routes, useNavigate } from 'react-router-dom';
import RList from './section/RList';
import CList from './section/CList';
import Contact from './section/Iquiry/Contact';
import IqList from './section/Iquiry/IqList';
import Footer from '../Footer/Footer';

function MyPage() {
  const { Content, Sider } = Layout;

function getItem(label, key, icon, children) {
  return { key, icon, children,label };
}

const items = [
  getItem('예매 내역', '/MyPage/RList', <ScheduleOutlined />),
  getItem('취소 내역', '/MyPage/CList', <DeleteOutlined />),
  getItem('문의 관련', 'sub1', <WhatsAppOutlined />, [
    getItem('문의 하기', '/MyPage/Contact'),
    getItem('문의 조회', '/MyPage/IqList'),
  ]),
  getItem('관리자와 채팅', 'sub2', <GithubFilled />, [
    getItem('정경수', '5'),
    getItem('김성탁', '6'),
  ])
];
  const navigate = useNavigate();
  
  return (
    <div>
    <MainHeader/>
    <Layout>
      <Sider style={{height: '350px'}}>
        <div className="logo" />
        <Menu theme="dark" mode="inline" items={items} onClick={({key}) => navigate(key)}/>
      </Sider>
      <Layout className="site-layout">
        <Content style={{margin: '0 16px' }}>
          <div className="site-layout-background">
            <div className='userInfo' style={{border: '1px solid black', width: '60%', height: '350px', margin: '0 auto', marginTop: '20px'}}>
              <div className='userIcon'style={{width: '170px', height: '170px', border: '1px solid black', borderRadius: '50%', margin: '2rem' }} >

              </div>
            </div>
          </div>
          <div style={{border: '1px solid black', width: '60%', height: '350px', margin: '0 auto', marginTop: '20px'}}>
            <MyBody/>
          </div>
        </Content>
        <Footer/>
      </Layout>
    </Layout>
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