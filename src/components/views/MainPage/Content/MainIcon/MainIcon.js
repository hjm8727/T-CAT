import styled from "styled-components";
import {QuestionCircleOutlined, 
    ClockCircleOutlined,
    DollarCircleOutlined,
    UserOutlined,
    SendOutlined,
    NotificationOutlined,
    } from "@ant-design/icons";
import { Link } from "react-router-dom";

const MainIconContainer = styled.div`
    /* border: 1px solid black; */
    width: 100%;
    display: flex;
    justify-content:space-between;
    align-items: center;
    /* min-width: 600px; */
    .MainIcon{
        display: flex;
        justify-content: center;
        font-size: 2em;
        color: #33333b;        
        opacity: 60%
    }  
    p{
        text-align: center;
        margin: 0px;
        margin-top: 5px;
        color:#33333b;
    }
    h2{
        margin:0px;
        padding:0px;
    }
    span , h5{
        margin: 0px;
        padding: 0px;
        display: inline;
    }
    /* @media (max-width : 1440px){
        .MainIcon{
            font-size: 1em;
        }
        p{
            font-size: 0.5em;
        }
        span{
            font-size: 0.5em;
        }
        h2{
            font-size: 1em;
        }
        h5{
            font-size: 0.7em;
        }
    } */
    @media (max-width : 1024px){
        .IconContainer2{
            display: none;
        }
        .IconContainer{
            /* min-width: 96px; */
            margin: 0 1em;
        }
    }
`
const MainIcon = () => {
    return(
    <MainIconContainer>
        <div className="IconContainer">
            <Link to = "#"><ClockCircleOutlined className="MainIcon" /></Link>
            <p>예매상황</p>
        </div>
        <div className="IconContainer">
            <Link to = "#"><DollarCircleOutlined className="MainIcon" /></Link>
            <p>취소/환불</p>
        </div>
        <div className="IconContainer">
            <Link to = "#"><UserOutlined className="MainIcon" /></Link>
            <p>My Page</p>
        </div>
        <div className="IconContainer">
            <Link to = "#"><SendOutlined className="MainIcon" /></Link>
            <p>1:1문의</p>
        </div>
        <div className="IconContainer">
            <Link to = "#"><NotificationOutlined className="MainIcon" /></Link>
            <p>공지사항</p>
        </div>
        <div className="IconContainer">
            <Link to = "#"><QuestionCircleOutlined className="MainIcon"/></Link>
            <p>자주묻는질문</p>
        </div>
        <div className="IconContainer2">
            <h2>02-1541-1633</h2>
            <h5>평일</h5><span> AM 09:00 ~ PM 06:00</span>
            <br></br>
            <h5>휴일</h5><span> AM 09:00 ~ PM 12:00</span>
        </div>
    </MainIconContainer>
    )
}

export default MainIcon;