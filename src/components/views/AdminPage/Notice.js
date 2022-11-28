import TopBar from "./Tool/TopBar";
import styled from "styled-components";
import { useState } from "react";
import { useNavigate} from "react-router-dom";

const NoticeBlock=styled.div`
  margin:0 auto;
    box-sizing: border-box;
    width: 100vw;
.container {
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
.noticeButton{
  border: none;
      margin-bottom: 5px;
      /* margin: 20px 10px; */
      background-color: #E3CAA5;
      border-radius: 5px;
      width: 150px;
      height: 40px;

}

`;
const Notice=()=>{
  const navigate = useNavigate();
  const [noticeList, setNoticeList] = useState("");


    const onClickNotice=()=>{
      // 클릭하면 공지 내용 볼 수 있게
    }
    return(
        <NoticeBlock>
        <TopBar name="공지사항 관리"/>
          <div className="container">
          <table>
              <thead>
                <tr>
                  <th width="150px">글번호</th>
                  <th>제목</th>
                  <th width="150px">작성자</th>
                  <th width="150px">작성일</th>
                  <th width="150px">조회수</th>
                </tr>
              </thead>
              <tbody>
                {noticeList&& noticeList.map((list)=>(
                  <tr>
                  <td>{list.num}</td>
                  <td onClick={onClickNotice}>{list.title}</td>
                  <td>관리자</td>
                  <td>{list.date}</td>
                  <td>{list.reviews}</td>
                  </tr>
                ))}
              </tbody>
          </table>
          </div>
          <button className="noticeButton" onClick={()=>{navigate('/admin/writeNotice')}}>작성하기</button>

        </NoticeBlock>
    );
}
export default Notice;