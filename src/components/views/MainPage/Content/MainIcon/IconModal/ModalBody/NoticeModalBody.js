import { useState } from "react";
import styled from "styled-components"
const BodyContainer = styled.div`
    table{
        border-bottom:1px solid silver;
    }
    td{
        cursor: pointer;
        width: 600px;
        height: 60px;
        border-bottom:1px solid silver;
    }
    th{
        width: 100px;
        text-align: center;
        border-bottom:1px solid silver;
    }
    .answer{
        margin: 20px;
        background-color: #f5f5f5;
    }
    .answerTitle{
        font-size: 18px;
        font-weight: bold;
    }
    .answerAccent{
        color: rgb(0, 128, 0);
    }
    p{
        font-size: 16px;
    }
    .strong{
        color : #cc0000;
    }    
`
const notice = [
    {

        id : '1',
        categories : 'Notice',
        title : "1번공지",
        text : '1번 공지사항 내용입니다.'
    },
    {
        id : '2',
        categories : 'Notice',
        title : "2번공지",
        text : '2번 공지사항 내용입니다.'
    },
    {
        id : '3',
        categories : 'Event',
        title : "3번공지",
        text : '3번 이벤트 내용입니다.'
    },
    {
        id : '4',
        categories : 'Event',
        title : "4번공지",
        text : '4번 이벤트 내용입니다.'
    },
]

const NoticeModalBody = () => {

    return(
        <BodyContainer>
            <div className='NoticeOption'>
                    <table>
                        <tr>
                            <th>제목</th>
                            <th>내용</th>
                        </tr>
                        {notice.map(c=>(
                        <tr >
                            <th>{c.title}</th>
                            <td>{c.text}</td>
                        </tr>
                        ))}
                    </table>
            </div>
        </BodyContainer>
    );
}

export default NoticeModalBody;