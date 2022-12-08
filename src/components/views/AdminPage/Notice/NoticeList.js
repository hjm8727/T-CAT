import TopBar from "../Tool/TopBar";
import styled from "styled-components";
import { useState, useEffect} from "react";
import { Link, useNavigate} from "react-router-dom";
import AdminApi from "../../../../api/AdminApi";
import Pagination from "../Tool/Pagination/Paging";


const NoticeList=()=>{
  const navigate = useNavigate();
   // 문의 내용을 가져와서 담기 위한 변수
  const [noticeList, setNoticeList] = useState('');
  const [loading, setLoading] = useState(false);

  const [limit, setLimit] = useState(7); //한페이지에 몇개씩 보여줄지
  const [page, setPage] = useState(2); 
  const offset = (page - 1) * limit;
  const [pageStart, setPageStart] = useState(0);


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
      noticeList.forEach((el) => idArray.push(el));
      setCheckItems(idArray);
      console.log(idArray);
    }
    else {
      // 전체 선택 해제 시 checkItems 를 빈 배열로 상태 업데이트
      setCheckItems([]);
    }
  }
  const onClickDelete=async()=>{
    // alert("공지사항을 삭제하시겠습니까?")
    console.log("체크박스삭제");
    const response = await AdminApi.noticeCheck(checkItems);
      // try{
      //   setNoticeList(response.data);
      //   console.log(response.data);
      // } catch (e) {
      //   console.log(e);
      // }
    };
    // deleteNotice();
    // setCheckItems([]);

    /** 문의 내용을 가져오는 useEffect */
  useEffect(() => {
    const noticeData = async()=> {
      try {
        const response = await AdminApi.noticeInfo(); // 전체 리스트 조회
        setNoticeList(response.data);
        console.log(response.data);
      } catch (e) {
        console.log(e);
      }
    };
    noticeData();
  }, []);
  

    return(
        <NoticeBlock>
        <TopBar name="공지사항 관리"/>
          <div className="container">
          <table>
                <thead>
                  <tr>
                  <th width = "50px">
                    <input type='checkbox' name='select-all' onChange={(e) => handleAllCheck(e.target.checked)}
                    // 데이터 개수와 체크된 아이템의 개수가 다를 경우 선택 해제 (하나라도 해제 시 선택 해제)
                    checked={checkItems.length === noticeList.length ? true : false} />
                    </th>
                    <th width = "100px">글번호</th>
                    <th width = "*">제목</th>
                    <th width = "150px">작성자</th>
                    <th width = "150px">작성일</th>
                  </tr>
                </thead>
                <tbody>
                  {noticeList && noticeList.slice(offset, offset + limit)
                  .map(({index,title,create_time}) => (
                  <tr>
                  <td><input type='checkbox' name={`select-${index}`} onChange={(e) => handleSingleCheck(e.target.checked,index)}
                   // 체크된 아이템 배열에 해당 아이템이 있을 경우 선택 활성화, 아닐 시 해제
                  checked={checkItems.includes(index) ? true : false} />
                  </td>
                    <td>{index}</td>
                    <td><Link to={`/admin/noticeDetail/${index}`}>{title}</Link></td>
                    <td>관리자</td>
                    <td>{create_time}</td>
                </tr>
                ))}
                </tbody>
              </table>
            </div>
            <Pagination
              total={noticeList.length}
              limit={limit}
              page={page}
              setPage={setPage}
              pageStart={pageStart}
              setPageStart={setPageStart}
              />

            <div className="buttonWrap">
                <button onClick={()=>{navigate('/admin/writeNotice')}}>작성하기</button>
                <button onClick={onClickDelete}>삭제하기</button>
            </div>
        </NoticeBlock>
    );
}
export default NoticeList;

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