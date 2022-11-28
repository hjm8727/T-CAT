import { useState } from "react"
import styled, { keyframes } from "styled-components"

const MainNoticeContainer = styled.div` 
   @keyframes slide{
       0%{
           transform: translateY(0);
        }
        25%{
            transform: translateY(-30px);
        }
        50%{
            transform: translateY(-60px);
        }
        75%{
            transform: translateY(-90px);
        }
        100%{
            transform: translateY(0px);
        }
    }
    height: 25px;
    display: block;
    overflow: hidden;
    /* background-color: #f5f5f5 ; */
    font-family: sans-serif;
    
    .Notice1{
        animation: slide 20s ease-out infinite;
        height: 30px;
        margin: 0px;
        padding: 0px;
    }
    a{
        padding : 0 3px;
        margin-right: 5px;
        border-radius: 5px;
        background-color: #fae100;
    }
    .Noticeimg{
        width: 25px;
        height: 20px;
        margin: 0 10px;
        /* margin-left: 10px;
        margin-right: 10px; */
    }
    @media (max-width : 1440px){
        /* font-size: 0.9em; */
        height: 20px;
        .Noticeimg{
            width: 20px;
            height: 15px;
        }
    }
    `
const notice = [
    {

        id : 'Notice1',
        categories : 'Notice',
        text : '1번 공지사항 내용입니다.'
    },
    {
        id : 'Notice2',
        categories : 'Notice',
        text : '2번 공지사항 내용입니다.'
    },
    {
        id : 'Notice3',
        categories : 'Event',
        text : '3번 이벤트 내용입니다.'
    },
    {
        id : 'Notice4',
        categories : 'Event',
        text : '4번 이벤트 내용입니다.'
    },
]


const MainNotice = () =>{
    
    return(
        <MainNoticeContainer>
            <div className="MainNotice">
                {notice.map(c=>(
                    <div className="Notice1">
                        <img className="Noticeimg" src="https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/6562f7bc017800001.png?type=thumb&opt=C72x72.fwebp"></img>
                        <a>{c.categories}</a>
                        <span key={c.id} >{c.text}</span>
                        <br></br>
                    </div>
                ))}
            </div>
        </MainNoticeContainer>
    )
}

export default MainNotice


{/* <div className="PosterTitle">
                <h2>{props.name}</h2>
            {categories.map(c=>(
                <li 
                    key={c.name}
                    active={category===c.name}
                    onClick={()=>onSelect(c.name)}
                >{c.text}</li>
            ))}
            </div> */}