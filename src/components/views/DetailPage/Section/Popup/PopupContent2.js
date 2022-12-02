import React, { useState } from "react";
import styled from "styled-components";

const BodyContainer = styled.div`
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

const MyInfo = props => {
    
  const { item_name, ticket, tax, total } = props;
  return(
      <div>
      <h2>My예매정보</h2>
          <table>
              <tr>
                  <th>제목</th>
                  <td>{item_name}</td>
                  <th>일시</th>
                  <td>2022년 11월 30일(수) 20:00</td>
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
                  <th>사용 가능 포인트</th>
                  <td>230</td>
              </tr>
              <tr>
                  <th>취소 기한</th>
                  <td>오늘</td>
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

  function PopupContent2(props) {
  const { item_name, price } = props;
	// 기본가 수량 선택
	const [value, setValue] = useState(0);
	const [stuValue, setStuValue] = useState(0);
	const [douValue, setDouValue] = useState(0);
	const [eveValue, setEveValue] = useState(0);
	// 티켓 * 수량 = 총 티켓 금액
	const [ticket, setTicket] = useState(0);
	// 비과세 = 총 티켓 금액의 5%
	const [tax,setTax] = useState(0);
	// 총 결제금액(비과세 포함 금액)
	const [total, setTotal] = useState(0);
	// 학생 할인 티켓 금액
	const student = price - (price / 10);
	// 더블 할인 티켓 금액
	const double = price - (price / 20);
	// 신규 오픈 티켓 금액
	const openEvent = price - (price / 20);
	// 이름을 가지고 어떤 것을 선택하는지 구분..
	const changeValue = e => {
		const name = e.target.name;
		let values,tickets, totals, taxs = 0;
		values = e.target.value;
		if(name === 'basic') {
      setValue(values);
      setDouValue(0);
      setEveValue(0);
      setStuValue(0);
      tickets = values * price;
      setTicket(tickets);
      taxs = Math.floor(tickets / 20);
      setTax(taxs);
      totals = tickets + taxs;
      setTotal(totals);
      // '12.01 가격 중복 x 수정 hardcoding... 수정 예정..'
		} else if(name === 'student') {
      setStuValue(values);
      setValue(0);
      setDouValue(0);
      setEveValue(0);
      tickets = values * student;
      setTicket(tickets);
      taxs = Math.floor(tickets / 20);
      setTax(taxs);
      totals = tickets + taxs;
      setTotal(totals);
		} else if(name === 'double') {
      setDouValue(values);
      setValue(0);
      setEveValue(0);
      setStuValue(0);
      tickets = values * double;
      setTicket(tickets);
      taxs = Math.floor(tickets / 20);
      setTax(taxs);
      totals = tickets + taxs;
      setTotal(totals);
		} else if(name === 'event') {
      setEveValue(values);
      setValue(0);
      setDouValue(0);
      setStuValue(0);
      tickets = values * openEvent;
      setTicket(tickets);
      taxs = Math.floor(tickets / 20);
      setTax(taxs);
      totals = tickets + taxs;
      setTotal(totals);
		}
    window.localStorage.setItem('value', values);
    window.localStorage.setItem('ticket', tickets)
    window.localStorage.setItem('tax', taxs);
    window.localStorage.setItem('total', totals);
	};
    return(
        <BodyContainer>
        <div>
            <h2>가격</h2>
            <div>
                <strong>중복 할인 불가입니다. 하나의 유형으로만 선택해주세요.</strong>
            </div>
            <table>
                <tr>
                <th className='BorderBottom'>기본가</th>
                <td className='BorderBottom'>일반</td>
                <td className='BorderBottom'>{price}</td>
                <td className='select-box'>
                    <select name='basic' value={value} onChange={changeValue}>
                        <option>{0}</option>
                        <option>{1}</option>
                        <option>{2}</option>
                        <option>{3}</option>
                    </select>
                    <span>수량</span>
                </td>
                </tr>
                <tr>
                <th rowSpan={3}>기본 할인</th>
                <td>학생 할인(10%)</td>
                <td>{student}</td>
                <td className='select-box'>
                    <select name='student' value={stuValue} onChange={changeValue}>
                        <option>{0}</option>
                        <option>{1}</option>
                        <option>{2}</option>
                        <option>{3}</option>
                    </select>
                    <span>수량</span>
                </td>
                </tr>
                <tr>
                <td>더블 할인(5%)</td>
                <td>{double}</td>
                <td className='select-box'>
                    <select name='double' value={douValue} onChange={changeValue}>
                        <option>{0}</option>
                        <option>{1}</option>
                        <option>{2}</option>
                        <option>{3}</option>
                    </select>
                    <span>수량</span>
                </td>
                </tr>
                <tr>
                <td>신규오픈 할인(5%)</td>
                <td>{openEvent}</td>
                <td className='select-box'>
                    <select name='event' value={eveValue} onChange={changeValue}>
                        <option>{0}</option>
                        <option>{1}</option>
                        <option>{2}</option>
                        <option>{3}</option>
                    </select>
                    <span>수량</span>
                </td>
                </tr>
            </table>
        </div>
        <div className='BuyOption'>
            <li>장애인, 국가유공자 할인가격 예매 시 현장수령만 가능하며 증빙된서류 미지참시 할인 불가능합니다.</li>
            <li>관람일 전일 아래시간까지만 취소 가능하며 당일 관람 상품 예매 시에는 취소 불가능 합니다.</li>
            <p> - 공연전일 평일/일요일/공휴일 오후 5시, 토요일 오전 11시단,토요일 공휴일인 경우는 오전 11시</p>
            <p> - 당일관람 상품예매시는 취소불가능합니다.</p>
            <p> - 취소수수료와 취소가능일자는 상품별로 다르니, 오른쪽 하단 My예매정보를 확인해주시기 바랍니다.</p>
            <li>동일 상품에 대해서 회차, 좌석 가격, 결제 등 일부 변경을 원하시는 경우, 기존 예매 건을 취소하시고 재예매 하셔야 합니다.
            단, 취소 시점에 따라 예매수수료가 환불 되지 않으며, 취소 수수료가 부과될 수 있습니다.</li>
        </div>
        <MyInfo item_name={item_name} ticket={ticket} tax={tax} total={total} />
        </BodyContainer>
    );
}


export {PopupContent2, MyInfo };