import TopBar from "../Tool/TopBar";
import styled from "styled-components";
import { useState } from "react";
import { useNavigate} from "react-router-dom";

const NoticeBlock=styled.div`
    margin:0 auto;
  box-sizing: border-box;
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
    .buttonWrap{
        text-align: center;
        justify-content: center;
    }
    button{
      border: none;
      margin: 15px 0;
      margin: 20px 10px;
      background-color: #E3CAA5;
      border-radius: 5px;
      width: 150px;
      height: 50px;
    }

`;
const NoticeList=()=>{
  const navigate = useNavigate();
  const data = [
    {id: 0, num: '1', title: '크리스마스 기념 공지', date:'2022-12-02', views : 150},
  ];

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
      data.forEach((el) => idArray.push(el.id));
      setCheckItems(idArray);
    }
    else {
      // 전체 선택 해제 시 checkItems 를 빈 배열로 상태 업데이트
      setCheckItems([]);
    }
  }
  const onClickDelete=()=>{
    alert("공지사항을 삭제하시겠습니까?")
  }
    const onClickNotice=()=>{
      navigate('/admin/noticeDetail')
      // 클릭하면 공지 내용 볼 수 있게
    }

    return(
        <NoticeBlock>
        <TopBar name="공지사항 관리"/>
          <div className="container">
          <table>
                <thead>
                  <tr>
                  <th>
                    <input type='checkbox' name='select-all' onChange={(e) => handleAllCheck(e.target.checked)}
                    // 데이터 개수와 체크된 아이템의 개수가 다를 경우 선택 해제 (하나라도 해제 시 선택 해제)
                    checked={checkItems.length === data.length ? true : false} />
                    </th>
                    <th width = "100px">글번호</th>
                    <th>제목</th>
                    <th width = "150px">작성자</th>
                    <th width = "150px">작성일</th>
                    <th width = "150px">조회수</th>
                  </tr>
                </thead>
                <tbody>
                  {data && data.map((data,key) => (<tr key={key}>
                  <td><input type='checkbox' name={`select-${data.id}`} onChange={(e) => handleSingleCheck(e.target.checked, data.id)}
                   // 체크된 아이템 배열에 해당 아이템이 있을 경우 선택 활성화, 아닐 시 해제
                  checked={checkItems.includes(data.id) ? true : false} />
                  </td>
                    <td>{data.num}</td>
                    <td onClick={onClickNotice}>{data.title}</td>
                    <td>관리자</td>
                    <td>{data.date}</td>
                    <td>{data.views}</td>
                </tr>
                ))}
                </tbody>
              </table>
            </div>
            <div className="buttonWrap">
                <button onClick={()=>{navigate('/admin/writeNotice')}}>작성하기</button>
                <button onClick={onClickDelete}>삭제하기</button>
            </div>
          
        </NoticeBlock>
    );
}
export default NoticeList;