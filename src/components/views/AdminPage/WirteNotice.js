import styled from "styled-components";
import { useNavigate} from "react-router-dom";


const WriteBlock=styled.div`
margin:0 auto;
    box-sizing: border-box;
    width: 80vw;
.boardTitle {
    margin: 30px 0;
    strong {
    font-size: 3rem;
    }
}
.buttonWrap {
    margin-top: 30px;
    text-align: center;
}
.boardWrite {
    border-top: 2px solid #000;
}
.title{
    padding: 15px;
    width: 100%;
    dt , dd{
    display: inline-block;
    vertical-align: middle;
    font-size: 1.4rem;
    }
    dt{
        width: 100px;
    }
    input{
    padding: 10px;
    width: 700px;
    /* width: 80%; */
    }
}
.content{ border-bottom: 1px solid #000;}
textarea {
    display: block;
    width: 100%;
    height: 300px;
    padding: 15px;
    box-sizing: border-box;
    border: 0;
    resize: vertical;
}
button{
    border: none;
      /* margin-bottom: 5px; */
      margin: 5px;
      background-color: #E3CAA5;
      border-radius: 5px;
      width: 150px;
      height: 40px;

}

`;
const WriteNotice=()=>{
  const navigate = useNavigate();
    return(
        <>
        <WriteBlock>
            <div className="boardWrap">
                <div className="boardTitle">
                    <strong>공지사항</strong>
                </div>
                <div className="boardWriteWrap">
                    <div className="boardWrite">
                        <div className="title">
                            <dl>
                                <dt>제목</dt>
                                <dd><input type="text" placeholder="제목을 입력하세요"/></dd>
                            </dl>
                        </div>
                        <div className="content">
                            <textarea placeholder="내용 입력"/>
                        </div>
                    </div>
                    <div className="buttonWrap">
                        <button onClick={()=>{navigate('/admin/Notice')}}>뒤로가기</button>
                        <button onClick={()=>{navigate('/admin/Notice')}}>등록하기</button>

                    </div>
                </div>
            </div>
        </WriteBlock>
        </>
    )
}
export default WriteNotice;