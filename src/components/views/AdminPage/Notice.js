import NavBar from "./Tool/NavBar";
import styled from "styled-components";

const NoticeBlock=styled.div`
.container {
    margin : 10px;
    display: flex;
    border: 1px solid black;
    width: 100vw;
    height: 60%;
    flex-direction: column;
    text-align: center;
    padding: 3rem;
  }
table,th,td {
  border: 1px solid black;
}

`;
const Notice=()=>{
    return(
        <NoticeBlock>
        <NavBar name="알림 관리"/>
          <div className="container">
          <table>
              <thead>
                <tr>
                  <th>번호</th>
                  <th>공지 제목</th>
                  <th>글 쓴 시간</th>
                </tr>
              </thead>
              <tbody>
                  <tr>
                  <td>1</td>
                  <td>공지사항 페이지를..글쓰기까지 만들어야 할거같음</td>
                  <td>11/25</td>
              </tr>
              </tbody>
          </table>
          </div>
        </NoticeBlock>
    );
}
export default Notice;