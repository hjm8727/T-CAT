import React from 'react';
import {Layout} from 'antd';
import TCalendar from './Section/Side/TCalendar'
import Poster from './Section/Summary/Poster';
import Info from './Section/Summary/Info';
import DBody from './Section/Body/DBody';
import MainHeader from '../MainHeader/MainHeader';
const { Content, Footer, Sider } = Layout;

// 상세페이지
function Detail() {
  const item_name = '태양의서커스 <뉴 알레그리아>';
  const price = 150000;
  return (
    <div>
      <Layout style={{width: '100%'}}>
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

            <Sider className="site-layout-background" width={300} style={{borderRadius: '1.2rem', backgroundColor: 'silver', overflow: 'auto', height: '575px', position: 'fixed', left: '1200px', top: '6.5rem', bottom: '0'}} >
              <TCalendar item_name={item_name} price={price}/>
            </Sider>

          </Layout>
          <Content style={{width: '70rem' }}>
              <DBody/>
          </Content>
        </Content>
        <Footer style={{backgroundColor: 'skyblue'}}>
          Footer 영역
        </Footer>
      </Layout>
    </div>
  )
}
  
export default Detail;

