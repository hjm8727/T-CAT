




import React from 'react';
import {Layout} from 'antd';
import TCalendar from './Section/Side/TCalendar'
import Poster from './Section/Summary/Poster';
import Info from './Section/Summary/Info';
import DBody from './Section/Body/DBody';
import MainHeader from '../MainHeader/MainHeader';
import styled from 'styled-components';
const { Content, Footer, Sider } = Layout;

const DetailContainer = styled.div`
  width: 100%;
  .ItemContainer{
    width: 80%;
    padding: 0px;
    margin: 0 auto;
    margin-top: 40px;
    min-width: 930px;
    /* border: 1px solid black; */
  }
  .MainItem{
    display: flex;
    margin: 0 100px 40px 100px;
    /* margin-left:100px; */
    /* margin-bottom: 40px; */
  }
  .PosterContainer{
  }
  .InfoContainer{
    /* border-left: 1px solid black; */

  }
  .SideContainer{
    border-radius: 1.2rem;
    background-color: silver;
    overflow: auto;
    height: 575px;
    position: fixed;
    left:1150px;
    top:6.5rem;
    bottom:0;
  }
  
  @media (max-width : 1024px){
    .MainItem{
      margin-left: 20px;
    }
    .PosterContainer{
      /* width:50%; */
    }
    .InfoContainer{
      /* margin-left: 20px; */
    }
    .SideContainer{
      position: unset;
      display: flex;
      background-color: white;
    }
  }
`
// 상세페이지
function Detail() {
  const item_name = '태양의서커스 <뉴 알레그리아>';
  const price = 150000;
  return (
    <DetailContainer>
      <MainHeader/>
      <div className='ItemContainer'>
        <div className='MainItem'>
          <div className='PosterContainer'>
            <Poster/>
          </div>
          <div className='InfoContainer'>
            <Info/>
          </div>
        </div>
          <div className='SideContainer'>
            <TCalendar item_name={item_name} price={price}/>
          </div>
          <div className='BodyWrap'>
            <DBody/>
          </div>
      </div>
    </DetailContainer>
  )
}
  
export default Detail;

