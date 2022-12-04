import styled from "styled-components";
import TopBar from "../Tool/TopBar";
import { useNavigate} from "react-router-dom";
import { useState, useEffect} from "react";
import AdminApi from "../../../../api/AdminApi";
import { InfoCircleFilled } from "@ant-design/icons";



const DetailBlock=styled.div`
   margin:0 auto;
  box-sizing: border-box;
    .container{
        margin: 0 auto;
        position: relative;
        width: 100vw;
    margin : 10px;
    display: flex;
    border: 1px solid black;
    height: 60%;
    flex-direction: column;
    text-align: center;
    padding: 3rem;
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
        hover{
            cursor: pointer;
            background-color: red;
        }
    }
    .date{
        float: right;
    }
    .content{
        display: block;
        height: 500px;
        border-bottom: 1px solid #dae0e9;
    }
    .buttonWrap{
        text-align: center;
        justify-content: center;
    }
    button{
      border: none;
      margin: 15px 0;
      margin: 20px 10px;
      background-color: #E3CAA5;
      border-radius: 5px;
      width: 150px;
      height: 50px;
    }
   
`;

const NoticeDetail=()=>{
  const navigate = useNavigate();
  const [noticeContent, setNoticeContent] = useState('');

  useEffect(() => {
    const noticeData = async()=> {
      try {
        const response = await AdminApi.noticeInfo(); // 전체 리스트 조회
        setNoticeContent(response.data);
        console.log(response.data);
      } catch (e) {
        console.log(e);
      }
    };
    noticeData();
  }, []);

    return(
        <>
        <DetailBlock>
            <TopBar name="공지사항 상세보기"/>
                <div className="container">
                    {noticeContent && noticeContent.map((Info)=>(
                    <div className="topTitle">
                            <div key={Info.index}>
                                <p className="title">{Info.title}</p>
                    </div>
                                <p className="date"> 관리자 | 작성날짜</p>
                                <div className="content">{Info.content}</div>
                            </div>
                        ))}

                </div>
                <div className="buttonWrap">
                    <button onClick={()=>{navigate('/admin/noticeList')}}>목록으로</button>
                </div>
        </DetailBlock>
        </>
    )
}
export default NoticeDetail;