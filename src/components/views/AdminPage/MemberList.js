import styled from "styled-components";
import TopBar from "./Tool/TopBar";
import { useState, useEffect } from "react";
import AdminApi from "../../../api/AdminApi";


const MemberList=()=>{
  const [memberList, setMemberList] = useState('');

  
  // 체크된 아이템을 담을 배열
  const [checkItems, setCheckItems] = useState([]);
  // 체크박스 단일 선택
  const handleSingleCheck = (checked, id) => {
    if (checked) {
      // 단일 선택 시 체크된 아이템을 배열에 추가
      setCheckItems(prev => [...prev, id]);
      console.log(id);
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
      memberList.forEach((el) => idArray.push(el));
      setCheckItems(idArray);
    }
    else {
      // 전체 선택 해제 시 checkItems 를 빈 배열로 상태 업데이트
      setCheckItems([]);
    }
  }
  useEffect(() => {
    const memberData = async()=> {
      try {
        const response = await AdminApi.totalMember(); // 전체 멤버 조회
        setMemberList(response.data);
        console.log(response.data);
      } catch (e) {
        console.log(e);
      }
    };
    memberData();
  }, []);

    return(
        <MemberBlock>
          <TopBar name="일반회원관리"/>
          <div className="container">
          <table>
                <thead>
                  <tr>
                  <th>
                    <input type='checkbox' name='select-all' onChange={(e) => handleAllCheck(e.target.checked)}
                    // 데이터 개수와 체크된 아이템의 개수가 다를 경우 선택 해제 (하나라도 해제 시 선택 해제)
                    checked={checkItems.length === memberList.length ? true : false} />
                    </th>
                    <th>아이디</th>
                    <th>이름</th>
                    <th>가입일</th>
                    <th>이메일</th>
                    <th>주소</th>
                  </tr>
                </thead>
                <tbody>
                  {memberList && memberList.map((data,key) => (<tr key={key}>
                  <td><input type='checkbox' name={`select-${data}`} onChange={(e) => handleSingleCheck(e.target.checked, data)}
                   // 체크된 아이템 배열에 해당 아이템이 있을 경우 선택 활성화, 아닐 시 해제
                  checked={checkItems.includes(data) ? true : false} />
                  </td>
                    <td>{data.id}</td>
                    <td>{data.name}</td>
                    <td>{data.date}</td>
                    <td>{data.email}</td>
                    <td>{data.address}</td>
                </tr>
                ))}
                </tbody>
              </table>
            </div>
        </MemberBlock>
    );
}
export default MemberList;

const MemberBlock=styled.div`
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
`;