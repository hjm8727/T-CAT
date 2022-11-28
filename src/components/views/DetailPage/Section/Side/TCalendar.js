import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './calendar.css';
import 'react-calendar/dist/Calendar.css';
import styled from 'styled-components';
import PayPopup from '../PayPopup';

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

const Header = () => {
    return(
        <div>
            <h1>헤더</h1>
        </div>
    )
}

const Body = () => {
    return(
        <div>
            <h1>바디입니따</h1>
        </div>

    );
}


// 달력
function TCalendar () {
    const [date, setDate] = useState(new Date());
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

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
                    <PayPopup open={modalOpen} close={closeModal} header={<Header />} body={<Body />}>

                    </PayPopup>
                </div>
            </Styleside>
        </div>
    );
}

export default TCalendar;