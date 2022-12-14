import React, { useEffect, useState } from 'react';
import { ScheduleOutlined, DeleteOutlined, WhatsAppOutlined, GithubFilled, EditOutlined, BookOutlined} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import MainHeader from '../MainHeader/MainHeader';
import { Route, Routes, useNavigate } from 'react-router-dom';
import RList from './section/RList';
import CList from './section/CList';
import Contact from './section/Iquiry/Contact';
import IqList from './section/Iquiry/IqList';
import Footer from '../Footer/Footer';
import InfoUpdate from './section/InfoUpdate';
import styled from 'styled-components';

const MyInfoStyle = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  min-width: 930px;
  /* height: auto; */
  h4{
    font-size: 18px;
    strong{
      font-size: 22px;
    }
  }
  .userInfo {
    display: flex;
    border: 1px solid black;
    width: 60%;
    min-width: 660px;
    /* height: 350px; */
    margin: 0 auto;
    margin-top: 20px;
  }
  .my-info {
    display: flex;
  }
  .info-des {
    margin: 1.5rem 0;
    font-size: 17px;
    border-left: 2px solid black;
  }
  .description {
    margin-left: 1.5rem;
  }
  .point-box {
    border: 1px solid brown;
    border-radius: 12rem;
  }
  .up-button {
    font-size: 18px;
    border: none; 
  }
  .up-wrap{
    display: flex;
    justify-content: center;
}
  .MypageMainContainer{
    height : 100%;
    height: 70%;
  }
  .MypageDataContainer{
    width: 60%;
    margin: 23px auto;
    min-width: 660px;
    min-height: 400px;
  }
  @media(max-width : 1024px){
    .userInfo{
      width: 80%;
    }
    .MypageDataContainer{
      width: 80%;
    }
}
`;

function MyPage() {
  const { Content, Sider } = Layout;

  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    const el = document.getElementsByClassName('ant-layout-sider-trigger');
    el[0].style.position = 'relative';
    const el2 = document.getElementsByClassName('ant-layout-sider-children');
    el2[0].style.height = '225px';
    const el3 = document.getElementsByClassName('ant-layout-sider ant-layout-sider-dark ant-layout-sider-has-trigger');
    el3[0].style.background = 'none';
  });
  
  function getItem(label, key, icon, children) {
    return { key, icon, children,label };
  }
  
  const items = [
    getItem('?????? ??????', '/MyPage/RList', <ScheduleOutlined />),
    getItem('?????? ??????', '/MyPage/CList', <DeleteOutlined />),
    getItem('?????? ??????', 'sub1', <WhatsAppOutlined />, [
      getItem('?????? ??????', '/MyPage/Contact'),
      getItem('?????? ??????', '/MyPage/IqList'),
    ]),
    getItem('?????? ?????? ??????', '/MyPage/InfoUpdate', <EditOutlined />),
    getItem('?????? ?????? ??????', 'sub', <BookOutlined />)
  ];
  const navigate = useNavigate();
  
  return (
    <MyInfoStyle> 
    <MainHeader/>
    <Layout>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} style={{minHeight: 'auto'}}>
        {/* <div className="logo" /> */}
        <Menu theme="dark" mode="inline" items={items} onClick={({key}) => navigate(key)}/>
      </Sider>
      <Layout className="site-layout">
        <Content className='MypageMainContainer'>
          <div className="site-layout-background">
            <div>
      
              <div className='userInfo'>
                <div className='Contain1'>
                  <GithubFilled style={{fontSize: '10rem', margin: '2rem'}} />
                </div>
                  <div className='info-des'>
                    <div className='description'>
                      <h4><strong>??????</strong>??? ????????? TCat??? ??????????????? ???????????????. ?????? ?????? ?????????</h4>
                      <p>?????? ???????????? jimin0601</p>
                      <p>?????? ???????????? jimin600155@naver.com</p>
                      <p>?????? ???????????? ???????????? <input className='point-box' readOnly value={50000}/></p>
                    </div>
                  </div>
              </div>
          </div>
          </div>
          <div className='MypageDataContainer' >
            <MyBody/>
          </div>
        </Content>
      </Layout>
    </Layout>
    <Footer/>
    </MyInfoStyle>
  );
}

const MyBody = () => (
  <>
    <Routes>
      <Route path='/RList' element={<RList/>}/>
      <Route path='/CList' element={<CList/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/IqLIst' element={<IqList/>}/>
      <Route path='/InfoUpdate' element={<InfoUpdate />} />
    </Routes>
    </>
);


export default MyPage;