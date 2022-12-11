import styled from "styled-components";
import TopBar from "./Tool/TopBar";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AdminApi from "../../../api/AdminApi";
import Pagination from "./Tool/Pagination/Paging";
import { useNavigate} from "react-router-dom";



const BlackList=()=>{
  const navigate = useNavigate();
  // 페이지네이션 변수
  const [limit, setLimit] = useState(10); // 한페이지에 보여지는 게시물 갯수
  const [page, setPage] = useState(1); // 현재 페이지 번호
  const offset = (page - 1) * limit; // 각 페이지별 첫 게시물의 위치 계산
  const [pageStart, setPageStart] = useState(0);

  // 체크박스 변수
  const [memberList, setMemberList] = useState('');
  const [checkItems, setCheckItems] = useState([]); 

  // 체크박스 단일 선택
  const handleSingleCheck = (checked, obj) => {
    if (checked) {
      setCheckItems(prev => [...prev, obj]);
      console.log(obj); // 선택한 db 값 
      console.log(obj.index);
    } else {
      // 단일 선택 해제 시 체크된 아이템을 제외한 배열 (필터)
      setCheckItems(checkItems.filter((el) => el !== obj));
    }
  };

  // 체크박스 전체 선택
  const handleAllCheck = (checked) => {
    if(checked) {
      // 전체 선택 클릭 시 데이터의 모든 아이템(id)를 담은 배열로 checkItems 상태 업데이트
      const idArray = [];
      memberList.forEach((el) => idArray.push(el.id));
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
        const res = await AdminApi.totalBlackMember(); // 전체 멤버 조회
        setMemberList(res.data);
        console.log(res.data);
      } catch (e) {
        console.log(e);
      }
    };
    memberData();
  }, []);

  const onClickDelete=async()=>{
    if(checkItems.length<1){
      alert("체크박스 한개 이상 체크해주세요")
      navigate('/admin/noticeList');
    } else{
      console.log(checkItems);
      const res = await AdminApi.noticeCheck(checkItems);
      console.log(res.data);
      alert("선택하신 공지사항이 삭제되었습니다.");
      navigate('/admin/noticeList');
      try{
        console.log("통신넘어가나? :" + res.data);
      }catch(e){
        console.log(e);
      }
      navigate('/admin/noticeList');
    } 
    setCheckItems({}); // 삭제버튼 누르고 데이터 넘기면 초기화
  };

    return(
        <MemberBlock>
        <TopBar name="블랙리스트 관리"/>
        <div className="container">
          <table>
                <thead>
                  <tr>
                  <th width = "50px">
                    <input type='checkbox' name='select-all' onChange={(e) => handleAllCheck(e.target.checked)}
                    // 데이터 개수와 체크된 아이템의 개수가 다를 경우 선택 해제 (하나라도 해제 시 선택 해제)
                    checked={checkItems.length === memberList.length ? true : false} />
                    </th>
                    <th width = "100px">아이디</th>
                    <th width = "100px">이름</th>
                    <th width = "150px">이메일</th>
                    <th width = "150px">가입일</th>
                    <th width = "100px">신고횟수</th>
                  </tr>
                </thead>
                <tbody>
                {memberList && memberList.slice(offset, offset + limit).map(({id,name,email,date,memberStatus}) => (<tr>
                  <td><input type='checkbox' name={`select-${id}`} onChange={(e) => handleSingleCheck(e.target.checked, id)}
                   // 체크된 아이템 배열에 해당 아이템이 있을 경우 선택 활성화, 아닐 시 해제
                  checked={checkItems.includes(id) ? true : false} />
                  </td>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{email}</td>
                    <td>{date}</td>
                    <td>{memberStatus}</td>
                </tr>
                ))}
                </tbody>
              </table>
            </div>
            <Pagination
            total={memberList.length}
            limit={limit}
            page={page}
            setPage={setPage}
            pageStart={pageStart}
            setPageStart={setPageStart}
            />
            <div className="delete"><button onClick={onClickDelete}>탈퇴하기</button></div>
        </MemberBlock>
    );

}
export default BlackList;

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
.delete{
  float: right;
  button{
    border: none;
    margin: 20px 10px;
      background-color: #E3CAA5;
      border-radius: 5px;
      width: 340px;
      height: 50px;
}  
}
`;