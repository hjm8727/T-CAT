import styled from "styled-components";
import SearchBar from "./Tool/SearchBar";
import TopBar from "./Tool/TopBar";
import { useState } from "react";
import PaginationAdmin from "./Tool/Pagination/Paging";
import { Pagination } from "react-bootstrap";

const MemberBlock=styled.div`
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
  const [lists, setLists] = useState('');
  // 체크된 아이템을 담을 배열
  const [checkItems, setCheckItems] = useState([]);
  // 체크박스 단일 선택
  const handleSingleCheck = (checked, id) => {
    if (checked) {
      // 단일 선택 시 체크된 아이템을 배열에 추가
      setCheckItems(prev => [...prev, id]);
    } else {
      // 단일 선택 해제 시 체크된 아이템을 제외한 배열 (필터)
      setCheckItems(checkItems.filter((el) => el !== id));
    }
  };

  // 체크박스 전체 선택
  const handleAllCheck = (checked) => {
    if(checked) {
      // 전체 선택 클릭 시 데이터의 모든 아이템(id)를 담은 배열로 checkItems 상태 업데이트
      const idArray = [];
      lists.forEach((el) => idArray.push(el.id));
      setCheckItems(idArray);
    }
    else {
      // 전체 선택 해제 시 checkItems 를 빈 배열로 상태 업데이트
      setCheckItems([]);
    }
  }
    return(
        <MemberBlock>
          <TopBar name="일반회원관리"/>
          {/* <SearchBar/> */}
          <div className="container">
              <table>
                <thead>
                  <tr>
                  <th>
                    <input type='checkbox' name='select-all' onChange={(e) => handleAllCheck(e.target.checked)}
                    // 데이터 개수와 체크된 아이템의 개수가 다를 경우 선택 해제 (하나라도 해제 시 선택 해제)
                    checked={checkItems.length === lists.length ? true : false} />
                    </th>
                    <th>아이디</th>
                    <th>이름</th>
                    <th>가입일</th>
                    <th>이메일</th>
                    <th>연락처</th>
                  </tr>
                </thead>
                <tbody>
                  {lists && lists.map(({id, name, date, email, phone}) => (<tr>
                  <td><input type='checkbox' name={`select-${id}`} onChange={(e) => handleSingleCheck(e.target.checked, id)}
                   // 체크된 아이템 배열에 해당 아이템이 있을 경우 선택 활성화, 아닐 시 해제
                  checked={checkItems.includes(id) ? true : false} />
                  </td>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{date}</td>
                    <td>{email}</td>
                    <td>{phone}</td>
                </tr>
                ))}
                </tbody>
              </table> 
            </div>
            <PaginationAdmin/>
        </MemberBlock>
    );
}
export default MemberList;