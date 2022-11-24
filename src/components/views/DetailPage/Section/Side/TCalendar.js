import { useState } from 'react';
import Calendar from 'react-calendar';
import './calendar.css';
import 'react-calendar/dist/Calendar.css';


function TCalendar () {
    const [date, setDate] = useState(new Date());

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
            </p>
        </div>
    );
}

export default TCalendar;