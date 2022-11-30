import styled from "styled-components";
import { useNavigate} from "react-router-dom";
import TopBar from "../Tool/TopBar";
import { useState } from "react";


const WriteBlock=styled.div`
     margin:0 auto;
     box-sizing: border-box;
    .container{
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
        input{
            margin-left: 20px;
            width: 1000px;
            height: 40px;
        }
    }
    .date{
        float: right;
    }
    .content{
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
const WriteNotice=()=>{
  const navigate = useNavigate();
  const [inputTitle, setInputTitle] = useState("");
  const [inputDetail, setInputDetail] = useState("");

  const onChangeTitle=(e)=>{
    setInputTitle(e.target.value);
    console.log(inputTitle);

  }
  const onChangeDetail=(e)=>{
    setInputDetail(e.target.value);
  }

  const onClickSubmit=async()=>{


  }
    return(
        <>
        <WriteBlock>
            <TopBar name="공지사항 작성하기"/>
                 <div className="container">
                    <div className="topTitle">
                        <p className="title">제목
                            <input type="text" placeholder="제목을 입력하세요" value={inputTitle} onChange={onChangeTitle}/>
                        </p>
                    </div>
                    <div className="content">
                        <textarea placeholder="내용 입력" value={inputDetail} onChange={onChangeDetail}/>
                    </div>
                    <div className="buttonWrap">
                        <button onClick={()=>{navigate('/admin/noticeList')}}>뒤로가기</button>
                        <button onClick={onClickSubmit}>등록하기</button>
                    </div>
                </div>
        </WriteBlock>
        </>
    )
}
export default WriteNotice;