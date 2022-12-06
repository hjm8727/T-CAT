import { useState } from "react";
import styled from "styled-components";
// import TopBar from "./Tool/TopBar";
import Modal from "../../../../util/Modal/Modal"
import TopBar from "../Tool/TopBar";

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
    {id: '1', title: '환불요청', userId:'blackuser',date:'2022-11-30'},
    {id: '2', title: '문의', userId:'qwerty',date:'2022-11-30'},
  ];
  



  return(
    <InquiryBlock>
        <TopBar name="큐앤에이 관리"/>
          <div className="container">
              <table>
                <thead>
                  <tr>
                    <th width = "90px">글번호</th>
                    <th width = "120px">문의유형</th>
                    <th width = "*">제목</th>
                    <th width = "120px">고객명</th>
                    <th width = "120px">문의일자</th>
                    <th style={{width : "80px"}}/>
                  </tr>
                </thead>
                  
              {data && data.map(data=>(
                <tbody key={data.id}>
                  <tr>
                    <td>{data.num}</td>
                    <td>{data.title}</td>
                    <td>{data.userId}</td>
                    <td>{data.date}</td>
                    <td>{data.date}</td>
                    <td><button onClick={()=>{setModalText(data); setModalOpen(true);}}>답장</button>
                      {modalOpen && <ReplyModal setModalOpen={setModalOpen}/>}
                    </td>
                  </tr>
                  </tbody>
                  ))}

              </table> 
              <ReplyModal open={modalOpen} close={closeModal} header="문의 내용"><div style={{color: 'white'}}>{modalText.title}</div>
              <div>{modalText.userId}</div>
              </ReplyModal>
            </div>
        </InquiryBlock>
        
    );
}
export default Inquiry;