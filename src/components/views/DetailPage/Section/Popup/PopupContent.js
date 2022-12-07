import React, { useState } from "react";
import styled from "styled-components";
import { PayReady } from "../../../KakaoPay/PayReady";

const Body1Style2 = styled.div`
  table ,tr {
    border: 1px solid black;
  }
  td{
      width: 200px;
    border-left: 1px solid silver;
  }
  th{
    width: 100px;
  }
  .seat-container {
    border: 1px solid black;  
    width: 400px;
    margin-top: 10px;
  }
  li{
    display: inline-block;
    margin-top: 10px;
  }
  .price-info {
    float: right;
    margin-right: 150px;        
    margin-top: 10px; 
  }
  .seat {
    float: left;
    margin-right: 30px;
    width: 20px;
    height: 20px;
    margin-top: 10px;
  }
  .seat-vip {
    background-color: red;
  }
  .seat-r {
    background-color: green;
  }
  .seat-s {
    background-color: royalblue;
  }
  .seat-a {
    background-color: aliceblue;
  }
  .BorderBottom{
    border-bottom: 1px solid silver;
  }
  .select-box{
      display: flex;
      justify-content: center;
      width: 125px;
  }
  .BuyOption{
      opacity: 60%;
  }
`;

function PopupContent(props) {
  const { item_name, price, date, cancelday } = props;
    return(
        <Body1Style2>
          <div>
            <h2>좌석 선택</h2>
            <div className='seat-container'>
              <ul>
                <span className='seat seat-vip'/>
                <li>VIP석 0석</li>
                <span className='price-info'>{price}원</span>
                <p />
                <span className='seat seat-r'/>
                <li>R석 5석</li>
                <span className='price-info'>{price}원</span>
                <p />
                <span className='seat seat-s'/>
                <li>S석 28석</li>
                <span className='price-info'>{price}원</span>
                <p />
                <span className='seat seat-a'/>
                <li>A석 94석</li>
                <span className='price-info'>{price}원</span>
                <p />
              </ul>
              </div>
                <hr />
            </div>
            <MyInfo item_name={item_name} cancelday={cancelday} date={date}/>
        </Body1Style2>
    );
  }

  const MyInfo = props => {
    
    const { item_name, date, ticket, tax, total,  cancelday } = props;
    return(
      <div>
        <h2>My예매정보</h2>
        <table>
          <tr>
            <th>제목</th>
            <td>{item_name}</td>
            <th>일시</th>
            <td>{date}</td>
          </tr>
          <tr>
            <th>선택 좌석</th>
            <td>현 좌석</td>
            <th>티켓 금액</th>
            <td>{ticket}</td>
          </tr>
          <tr>
            <th>비과세(5%)</th>
            <td>{tax}</td>
            <th>현재 포인트</th>
            <td>230 <span><button>포인트 사용하기</button></span></td>
          </tr>
          <tr>
            <th>취소 기한</th>
            <td>{cancelday}까지</td>
            <th>취소 수수료</th>
            <td>티켓금액의 0~30%</td>
          </tr>
          <tr>
            <th>총 결제금액</th>
            <td>{total}</td>
          </tr>
        </table>
      </div>
    );
  }
export default PopupContent;