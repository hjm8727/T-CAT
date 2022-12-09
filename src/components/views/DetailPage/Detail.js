import React, { useEffect, useState } from 'react';
import {Layout} from 'antd';
import TCalendar from './Section/Side/TCalendar'
import Poster from './Section/Summary/Poster';
import Info from './Section/Summary/Info';
import DBody from './Section/Body/DBody';
import MainHeader from '../MainHeader/MainHeader';
import Footer from '../Footer/Footer';
import styled from 'styled-components';
import { ArrowCircleUp } from '@mui/icons-material';
const { Content, Sider } = Layout;

const DWrap = styled.div`
width: 100%;
.topBtn {
  position: fixed; 
  opacity: 0; 
  bottom: 40px; 
  right: 40px;
  z-index: -10; 
  border: 0 none;
  background: none;
  cursor: pointer;
  transition: opacity 0.3s ease-in;
}
.arrow {
  font-size: 50px;
}
.topBtn.active {
  z-index: 10; 
  opacity: 1; 
}

.topBtn:hover,
.topBtn:focus,
.topBtn:active { 
  outline: 0 none; 
}
`

// 상세페이지
function Detail() {
  const item_name = '태양의서커스 <뉴 알레그리아>';
  const price = 150000;
  const [ScrollY, setScrollY] = useState(0);
  const [BtnStatus, setBtnStatus] = useState(false);
  
  const handleFollow = () => {
    setScrollY(window.pageYOffset);
    if(ScrollY > 100) {
      setBtnStatus(true);
    } else {
      setBtnStatus(false);
    }
  }

  const handleTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
    setScrollY(0);
    setBtnStatus(false);
  }

  useEffect(() => {
    const watch = () => {
      window.addEventListener('scroll', handleFollow)
    }
    watch();
    return () => {
      window.removeEventListener('scroll', handleFollow)
    }
  })

  return (
    <DWrap>
      <button className={BtnStatus ? "topBtn active" : "topBtn"} onClick={handleTop}>
        <ArrowCircleUp className='arrow'/></button>
      <Layout style={{width: '100%', height: '100%'}}>
      <MainHeader/>
      <hr/>
        <Content style={{width: '70rem', marginLeft: '10rem ', marginRight: '15rem', padding: '0 50px'}}>
          <Layout className="site-layout-background" style={{padding: '24px 0'}}>
            <Content style={{width: '30rem', padding: '0 24px', minHeight: 280 ,border:'1px solid blakc'}}>
              <Poster/>
            </Content>
            <hr style={{backgroundColor: 'black', width: '1px', opacity: '0.6'}} />

            <Content style={{width: '40rem'}}>
              <Info/>
            </Content>

            <Sider className="site-layout-background" width={310} style={{borderRadius: '1.2rem', backgroundColor: 'silver', overflow: 'auto', height: '650px', position: 'fixed', left: '1200px', top: '6.5rem', bottom: '0'}} >
              <TCalendar item_name={item_name} price={price}/>
            </Sider>

          </Layout>
          <Content style={{width: '70rem' }}>
              <DBody/>
          </Content>
        </Content>
        <Footer/>
        {/* <Footer style={{backgroundColor: 'skyblue'}}>
          Footer 영역
        </Footer> */}
      </Layout>
    </DWrap>
  )
}
  
export default Detail;