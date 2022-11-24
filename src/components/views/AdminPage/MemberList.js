import styled from "styled-components";
import SearchBar from "./Tool/SearchBar";
import NavBar from "./Tool/NavBar";

const MemberBlock=styled.div`
  margin:0 auto;
  box-sizing: border-box;
  
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
  .var {
    font-size: 2.5em;
    font-weight: bold;
    color: #ffd369;
    pointer-events: none;
    text-decoration: none;
    display: flex;
    justify-content: center;
}
.nav {
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90px;
    color: #ffd369;
}
.nav-link {
  font-size: 1.35em;
    color: white;
    color: #ffd369;
}
table,th,td {
  border: 1px solid black;
}
`;

const MemberList=()=>{
    return(
        <MemberBlock>
          <NavBar name="일반회원관리"/>
          <SearchBar/>
         <div className="container">
              <table>
                <thead>
                  <tr>
                    <th>아이디</th>
                    <th>이름</th>
                    <th>가입일</th>
                    <th>이메일</th>
                    <th>신고횟수</th>
                  </tr>
                </thead>
                <tbody>
                <tr>
                    <td>rin777</td>
                    <td>박하</td>
                    <td>2022.11.23</td>
                    <td>rin@gmail.com</td>
                    <td>5</td>
                </tr>
                </tbody>
              </table> 
            </div>
        </MemberBlock>
    );

}
export default MemberList;