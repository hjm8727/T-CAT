import React from 'react';
import {Layout} from 'antd';
import TCalendar from './Section/Side/TCalendar'
import Poster from './Section/Summary/Poster';
import Info from './Section/Summary/Info';
import DBody from './Section/Body/DBody';
const { Header, Content, Footer, Sider } = Layout;

const Detail = () => (
  <div>
  <Layout>
    <Header className="header" style={{backgroundColor: 'skyblue'}}>
      메뉴가 오겠지
    </Header>
    <Content style={{width: '70rem', marginLeft: '10rem ', marginRight: '15rem', padding: '0 50px'}}>
      <Layout className="site-layout-background" style={{padding: '24px 0'}}>
        <Content style={{width: '30rem', padding: '0 24px', minHeight: 280}}>
          <Poster/>
        </Content>
        <hr style={{backgroundColor: 'silver'}} />

        <Content style={{width: '40rem'}}>
          <Info/>
        </Content>

        <Sider className="site-layout-background" width={300} style={{borderRadius: '1.2rem', backgroundColor: 'skyblue', overflow: 'auto', height: '30rem', position: 'fixed', right: '10rem', top: '5rem', bottom: '0'}} >
          <TCalendar/>
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
);
export default Detail;