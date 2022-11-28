import styled from "styled-components";
import NavBar from "./Tool/TopBar";

const InquiryBlock=styled.div`
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
`;

const Inquiry=()=>{
    return(
        <InquiryBlock>
        <NavBar name="큐앤에이 관리"/>
          <div className="container">
              <table>
                <thead>
                  <tr>
                    <th>번호</th>
                    <th>제목</th>
                    <th>작성자</th>
                    <th>작성일</th>
                  </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1</td>
                    <td>환불해주세요 제발요</td>
                    <td>rin777</td>
                    <td>2022.11.23</td>
                </tr>
                </tbody>
              </table> 
            </div>
        </InquiryBlock>
    );

}
export default Inquiry;