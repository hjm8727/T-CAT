import { useState } from "react";
import styled from "styled-components";
import TopBar from "./Tool/TopBar";
import ReplyForm from "./Tool/Form";

const InquiryBlock=styled.div`
      margin:0 auto;
  box-sizing: border-box;
  /* width: 100vw; */
  .container {
    width: 100vw;
    margin : 10px;
    display: flex;
    border: 1px solid black;
    height: 60%;
    flex-direction: column;
    text-align: center;
    padding: 3rem;
  }
table,th,td {
  border: 1px solid black;
}
  button{
    width: 80px;
  }
`;

const Inquiry=()=>{
  const data = [
    {num: '1', title: '환불요청', userId:'blackuser',date:'2022-11-30'},
    {num: '2', title: '게시글 삭제 요청', userId:'qwerty',date:'2022-11-30'},
  ];
  
  const [open, setOpen] = useState(false);
  const [ inputReply, setInputReply] = useState("");

  const Test = () => {
    return(
      <div>
        {/* <input value={inputReply}/>
        <button onClick={submit}/> */}
        <ReplyForm/>
      </div>
    );
  }
  const onClick2 = () => {
    setOpen(!open);
  }

  const submit=()=>{

  }
  return(
    <InquiryBlock>
        <TopBar name="큐앤에이 관리"/>
          <div className="container">
              <table>
                <thead>
                  <tr>
                    <th>번호</th>
                    <th>제목</th>
                    <th>작성자</th>
                    <th>작성일</th>
                    <th style={{width : "80px"}}/>

                  </tr>
                </thead>

                <tbody>
                  {data && data.map((data,key) => (<tr key={key}>
                    <td>{data.num}</td>
                    <td>{data.title}</td>
                    <td>{data.userId}</td>
                    <td>{data.date}</td>
                    <td><button type="button" onClick={onClick2}>답장</button></td>
                    {/* <div className="reply">
                {open && <Test />}
              </div> */}
                </tr>
                ))}
                </tbody>
                <tbody style={{height : "20px"}}> 
                  <td colSpan = "5">
                  {/* {open && 
                    <input value={inputReply}/>
                    <button onClick={submit}/>
                  } */}
                  {open && <Test/>}
                  </td>
                </tbody>

                {/* <tbody>
                <tr>
                    <td>1</td>
                    <td>환불해주세요 제발요</td>
                    <td>rin777</td>
                    <td>2022.11.23</td>
                    <td><button type="button" onClick={onClick2}>답장</button></td>
                </tr>
                </tbody> */}
              </table> 
              {/* <div className="reply">
                {open && <Test />}
              </div> */}
            </div>
            
            
        </InquiryBlock>
    );
}
export default Inquiry;