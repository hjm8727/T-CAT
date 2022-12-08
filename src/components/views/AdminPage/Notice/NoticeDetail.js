import styled from "styled-components";
import TopBar from "../Tool/TopBar";
import React, { useState, useEffect, useHistory} from "react";
import { useNavigate, useParams, Link} from "react-router-dom";
import AdminApi from "../../../../api/AdminApi";


const NoticeDetail=()=>{
  const params = useParams().index;
  const [noticeDetail, setNoticeDetail] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const noticeData = async()=> {
    //  setLoading(true);
      try {
        console.log(params);
        const response = await AdminApi.noticeDetail(params);
        setNoticeDetail(response.data);
        console.log(response.data);
      } catch (e) {
        console.log(e);
      }
      // setLoading(false);
    };
    noticeData();
  }, []);

  const onClickDelete=async()=>{
    const res = await AdminApi.noticeDelete(params);
    console.log("삭제 되었습니다.");
    alert("삭제 되었습니다.");
    navigate('/admin/noticeList');
  };
  
    return(
        <>
        <DetailBlock>
            <TopBar name="공지사항 상세보기"/>
              {noticeDetail && noticeDetail.map((Info, index)=>(
                <React.Fragment key={index}>
              <div className="container">
                <div className="topTitle">
                  <div>
                      <p className="date"> 관리자 | 작성날짜</p>
                      <p className="title">{Info.title}</p>
                  </div>
                </div>
                  <div className="notice-content">{Info.content}</div>
              </div>
              </React.Fragment>
              ))}
                <div className="buttonWrap">
                    <button className="noticeBtn" onClick={()=>{navigate('/admin/noticeList')}}>목록으로</button>
                    <button className="noticeBtn" onClick={()=>{navigate(`/admin/noticeUpdate/${params}`)}}>수정하기</button>
                    <button className="noticeBtn" onClick={onClickDelete}>삭제하기</button>
                </div>
        </DetailBlock>
        </>
    )
}
export default NoticeDetail;

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
    .noticeBtn{
      border: none;
      margin: 15px 0;
      margin: 20px 10px;
      background-color: #E3CAA5;
      border-radius: 5px;
      width: 150px;
      height: 50px;
    }
   
`;