import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './calendar.css';
import 'react-calendar/dist/Calendar.css';
import styled from 'styled-components';
import PayPopup from '../Popup/PayPopup';
import PayPopup2 from '../Popup/PayPopup2'
import PayPopup3 from '../Popup/PayPopup3';

const Styleside = styled.div`
    .side-header{
        text-align: center;
    }
    .side-content {
        padding: 0 1.5rem;
    }
    .button {
        border: 1px solid #EF3F43;
        border-top-right-radius: 0.6rem;
        border-bottom-right-radius: 0.6rem;
        border-top-left-radius: 0.6rem;
        border-bottom-left-radius: 0.6rem;
        width: 120px;
        height: 45px;
        background-color: white;
        margin-left: 0.15rem;
        margin-right: 0.15rem;
    }
    .button:focus {
        color: #EF3F43;
    }
    .pay-button {
        width: 100%;
        height: 50px;
        font-weight: bold;
        background-color: #EF3F43;
        border: 0.1rem solid #EF3F43;
        border-radius: 1rem;
        text-align: center;
        box-sizing: border-box;
        color: #fff;
        margin-top: 1rem;
    }
`;

const HeaderContainer = styled.div`
    h1{
        margin: 0;
        padding: 0;
    }
    .HederDiv{
        display: flex;
        justify-content: space-between;        
        margin: 0 auto;
    }
    li{
        display: flex;
        justify-content: center;
        list-style: none;
        width: 150px;
        font-size: 18px;
    }
`
const Header = () => {
    return(
        <HeaderContainer>
            <h2>T-Cat 예매</h2>
            <div className='HederDiv'>
                <li>01 좌석선택</li>
                <li>02 가격/할인선택</li>
                <li>03 결제하기</li>
            </div>            
        </HeaderContainer>
    )
}

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
    
`
const Body = () => {
    // 수량 선택
    const [value, setValue] = useState(0);
    const [price, setPrice] = useState(35000);
    // 티켓 금액
    const ticket = price * value;
    // 비과세
    const tax = (value * price) / 20;
    // 총 결제금액
    const total = (value * price) + tax;
    // 학생 할인 티켓 금액
    const student = price - (price / 10);
    // 더블 할인 티켓 금액
    const double = price - (price / 20);
    // 신규 오픈 티켓 금액
    const openEvent = price- (price / 20);

    const changeValue = e => setValue(e.target.value);

    return(
        <BodyContainer>
        <div>
            <h2>가격</h2>
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
                    <select name='student' value={value} onChange={changeValue}>
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
                    <select name='double' value={value} onChange={changeValue}>
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
                    <select name='event' value={value} onChange={changeValue}>
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
        <div>
        <h2>My예매정보</h2>
            <table>
                <tr>
                    <th>제목</th>
                    <td>뮤지컬</td>
                    <th>일시</th>
                    <td>2022년 11월 30일(수) 20:00</td>
                </tr>
                <tr>
                    <th>선택좌석</th>
                    <td>현좌석</td>
                    <th>티켓금액</th>
                    <td>{ticket}</td>
                </tr>
                <tr>
                    <th>비과세(5%)</th>
                    <td>{tax}</td>
                    <th>사용가능 포인트</th>
                    <td>230</td>
                </tr>
                <tr>
                    <th>취소기한</th>
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
        </BodyContainer>
    );
}

const Body2 = () => {
    return(
        <div>
            <h2>2번 바디입니다.</h2>
        </div>
    );
}

const Body3 = () => {
    return(
        <div>
            <h3>3번 바디입니다.</h3>
        </div>
    );
}

// 달력
function TCalendar () {
    const [date, setDate] = useState(new Date());
    const [modalOpen, setModalOpen] = useState(false);
    const [id, setId] = useState(1);

    const plusId = () => setId(id + 1);
    const minusId = () => setId(id - 1);

    const openModal = () => setModalOpen(true);
    const closeModal = () => {
        setModalOpen(false);
        setId(1);
    }

    const topics = [
        {id:1, title: <PayPopup plus={plusId} open={openModal} close={closeModal} header={<Header />} body={<Body />}/>},
        {id:2, title:<PayPopup2 plus={plusId} minus={minusId} open={openModal} close={closeModal} header={<Header />} body={<Body2 />}/>},
        {id:3, title:<PayPopup3 minus={minusId} open={openModal} close={closeModal} header={<Header />} body={<Body3 />}/>}
    ];

    const ModalList = props => {
        const popup = [...props.topics];
        return(
            <>
            {popup && popup.map((list) => (
                <div key={list.id}>
                    {list.id === id && modalOpen && list.title}
                </div>
            ))}
            </>
        );
    }

    return (
        <div>
            <h3 className='text-center'>관람일</h3>
            <div className='calendar-container'>
            <Calendar onChange={setDate} value={date}
            formatDay={(locale, date) => date.toLocaleString("en", { day: "numeric" })}
            />
            </div>
            <p className='text-center'>
            <span className='bold'>선택한 날짜:</span>{' '}
            {date.toDateString()}
            <hr />
            </p>
            <Styleside>
                <div className='side-container'>
                    <h4 className='side-header'>회차</h4>
                    <div className='side-content'><button className='button select' type='button'>1회 20:00</button><button className='button no' type='button'>1회 20:00</button></div>
                    <small className='seat'>잔석 70</small>
                    <button className='pay-button' onClick={openModal}>예매하기</button>
                    <ModalList topics={topics} />
                </div>
            </Styleside>
        </div>
    );
}

export default TCalendar;