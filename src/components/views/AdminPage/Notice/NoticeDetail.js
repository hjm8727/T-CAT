import styled from "styled-components";
import TopBar from "../Tool/TopBar";
import { useNavigate} from "react-router-dom";


const DetailBlock=styled.div`
    margin : 0 auto;
    width: 100vw;
    .container{
        margin: 0 auto;
        position: relative;
    }
    .topTitle{
        overflow: hidden;
        border-top: 1px solid black;
        border-bottom: 1px solid #dae0e9;
        height: 70px;
        padding: 0 20px;
        line-height: 70px;
    }
    .title{
        float: left;
    }
    .date{
        float: right;
    }
    .content{
        display: block;
        height: 500px;
        border-bottom: 1px solid #dae0e9;
    }
    .noticeButton{
        text-align: center;
        border: none;
       margin: 15px 0;
      /* margin: 20px 10px; */
      background-color: #E3CAA5;
      border-radius: 5px;
      width: 150px;
      height: 40px;
    }
`;

const NoticeDetail=()=>{
  const navigate = useNavigate();

    return(
        <>
        <DetailBlock>
            <TopBar name="공지사항 상세보기"/>
                <div className="container">
                    <div className="topTitle">
                        <p className="title">제목</p>
                        <p className="date">작성자 | 작성날짜</p>
                    </div>
                    <div className="content"></div>
                    <button className="noticeButton" onClick={()=>{navigate('/admin/noticeList')}}>목록으로</button>
                </div>
        </DetailBlock>
        </>
    )
}
export default NoticeDetail;