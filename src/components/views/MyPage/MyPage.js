import React, { useEffect, useState } from 'react';
import { ScheduleOutlined, DeleteOutlined, WhatsAppOutlined, GithubFilled} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import MainHeader from '../MainHeader/MainHeader';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
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
  height: 100vh;
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
    border: 1px solid black;
    width: 60%;
    margin: 0 auto;
    margin-top: 20px;
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
  })
  
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
    <MyInfoStyle> 
    <MainHeader/>
    <Layout>
      <Sider  collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
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
                  <div className='up-wrap'>
                    <Link to='./update'><button className='up-button'>회원 정보 수정</button></Link>
                  </div>
                </div>
                  <div className='info-des'>
                    <div className='description'>
                      <h4><strong>지민</strong>님 오늘도 TCat을 방문해주셔 감사합니다. 좋은 하루 되세요</h4>
                      <p>나의 아이디는 jimin0601</p>
                      <p>나의 이메일은 jimin600155@naver.com</p>
                      <p>현재 회원님의 포인트는 <input className='point-box' readOnly value={50000}/></p>
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
      <Route path='/update' element={<InfoUpdate />} />
      <Route path='/RList' element={<RList/>}/>
      <Route path='/CList' element={<CList/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/IqLIst' element={<IqList/>}/>
    </Routes>
    </>
);


export default MyPage;