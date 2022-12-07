import styled from "styled-components";
import { useNavigate, useParams} from "react-router-dom";
import TopBar from "../Tool/TopBar";
import { useState,useEffect } from "react";
import AdminApi from "../../../../api/AdminApi";

const UpdateNotice=()=>{
  const navigate = useNavigate();
  const params = useParams().index;

  const [noticeDetail, setNoticeDetail] = useState("");
  const [inputTitle, setInputTitle] = useState("");
  const [inputDetail, setInputDetail] = useState("");
  const onChangeTitle=(e)=>{setInputTitle(e.target.value);}
  const onChangeDetail=(e)=>{setInputDetail(e.target.value);}



  const onClickSubmit = async () => {
    const update = await AdminApi.noticeUpdate(params,inputTitle,inputDetail);
    if (update.data === true) {
      console.log("수정성공");
    } else {
      console.log("수정안됨");
    }
  };

  useEffect(() => {
    const noticeData = async()=> {
      try {
        console.log(params);
        const response = await AdminApi.noticeDetail(params);
        setInputTitle(response.data.title);
        setInputDetail(response.data.content);
        console.log(response.data);
      } catch (e) {
        console.log(e);
      }
    };
    noticeData();
  }, []);

  return(
    <>
    <UpdateBlock>
        <TopBar name="공지사항 수정하기"/>
            <div className="container">
                <div className="topTitle">
                    <div className="title">제목
                        <input type="text" placeholder="제목을 입력하세요" value={inputTitle} onChange={onChangeTitle}/>
                    </div>
                </div>
                <div className="content2">
                    <textarea placeholder="내용 입력" value={inputDetail} onChange={onChangeDetail}/>
                </div>
                <div className="buttonWrap">
                    <button onClick={()=>{navigate(`/admin/noticeDetail/${params}`)}}>뒤로가기</button>
                    <button onClick={onClickSubmit}>수정하기</button>
                </div>
            </div>
    </UpdateBlock>
    </>
  )

}
export default UpdateNotice;

const UpdateBlock=styled.div`
    margin:0 auto;
    box-sizing: border-box;
    .container{
        position: relative;
    width: 100vw;

    }
    .topTitle{
        /* overflow: hidden; */
        border-top: 1px solid black;
        border-bottom: 1px solid #dae0e9;
        height: 70px;
        padding: 0 20px;
        line-height: 70px;
    }
    .title{
        float: left;
        input{
            margin-left: 20px;
            /* width: 1000px; */
            height: 40px;
            width: auto;
        }
    }
    .date{
        float: right;
    }
    .content2{
        display: block;
        height: 520px;
        border-bottom: 1px solid #dae0e9;
        textarea{
            height: 480px;
            width: 100%;
            margin-top: 20px;
        }
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