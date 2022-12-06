import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './calendar.css';
import 'react-calendar/dist/Calendar.css';
import styled from 'styled-components';
import PayPopup from '../Popup/PayPopup';
import PopupHeader from '../Popup/PopupHeader';
import PopupContent from '../Popup/PopupContent';
import {PopupContent2} from '../Popup/PopupContent2';
import PopupContent3 from '../Popup/PopupContent3';
import moment from 'moment';

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

/** 
 * 
 * Detail에서 props로 전달 받기 
 */
function TCalendar (props) {
	const { item_name, price } = props;
    const [date, setDate] = useState(new Date());
    const [modalOpen, setModalOpen] = useState(false);
    const [id, setId] = useState(1);

    let tat = date;
    const tas = moment(tat);
    // 현재 일
    const today = tas.format('YYYY-MM-DD');
    // 7일 전
    const cancelday = moment(tat, 'YYYY-MM-DD').subtract(7, 'day')._d.toLocaleDateString();

    const plusId = () => setId(id + 1);
    const minusId =() => setId(id - 1);
    
    const openModal = () => setModalOpen(true);
    const closeModal = () => {
        setModalOpen(false);
        setId(1);
    }

    const topics = [
        {id:1, title: <PayPopup id={id} plus={plusId} open={openModal} minus={minusId} close={closeModal} header={<PopupHeader />} body={<PopupContent date={today} item_name={item_name} cancelday={cancelday} price={price} />}/>},
        {id:2, title:<PayPopup id={id} plus={plusId} minus={minusId} open={openModal} close={closeModal} header={<PopupHeader />} body={<PopupContent2 date={today} cancelday={cancelday} item_name={item_name} price={price} />} />},
        {id:3, title:<PayPopup id={id} minus={minusId} open={openModal} close={closeModal} header={<PopupHeader />} body={<PopupContent3 date={today} cancelday={cancelday} item_name={item_name} />}/>}
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
                    formatDay={(locale, date) => date.toLocaleString("en", { day: "numeric" })}/>
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