import styled from "styled-components";

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
table,th,td {
  border: 1px solid black;
  background-color: red;
}
`;

const BlackList=()=>{
    return(
        <MemberBlock>
        <input/> 
        <button>검색</button>
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
export default BlackList;