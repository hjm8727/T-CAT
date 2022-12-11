import TopBar from "../Tool/TopBar";
import styled from "styled-components";
import { useState, useEffect} from "react";
import { Link, useNavigate,useParams} from "react-router-dom";
import AdminApi from "../../../../api/AdminApi";
import Pagination from "../Tool/Pagination/Paging";
// import $ from 'jquery';


const NoticeList=()=>{
  const [loading, setLoading] = useState(false);
  const params = useParams().index;
  const navigate = useNavigate();
   // 페이지네이션 변수
   const [limit, setLimit] = useState(10); // 한페이지에 보여지는 게시물 갯수
   const [page, setPage] = useState(1); // 현재 페이지 번호
   const offset = (page - 1) * limit; // 각 페이지별 첫 게시물의 위치 계산
   const [pageStart, setPageStart] = useState(0);
 
   // 체크박스 변수
   const [noticeList, setNoticeList] = useState('');
   const [checkItems, setCheckItems] = useState([]); 
  // 체크박스 단일 선택
  const handleSingleCheck = (checked, obj) => {
    if (checked) {
      // 단일 선택 시 체크된 아이템을 배열에 추가
      setCheckItems(prev => [...prev, obj]);
      console.log(obj); // 아래에서 index 값을 받은거라 index 값 찍힘
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
      noticeList.forEach((el) => idArray.push(el.index));
      setCheckItems(idArray);
      console.log(idArray);
    }
    else {
      setCheckItems([]);
    }
  }
    // 체크한거 배열로 담기
    // useEffect(()=>{
    //   // console.log(checkItems)
    // }, [checkItems]
    // )

  // const checkArray = [checkItems];
  // // console.log("체크값 개수 : " + checkItems.length);
  // console.log("const array 값(인덱스번호): " + checkArray);
  // console.log(checkArray);

  // const row = [...checkItems];
  // console.log(row);

  // const myArr = []
  // const key = 'index';
  // const checkObj = {};

  // checkObj[key] = Number(`checkItems`);

  // debugger;



    /** 공지 목록을 가져오는 useEffect */
  useEffect(() => {
    const noticeData = async()=> {
      setLoading(true);
      try {
        const res = await AdminApi.noticeInfo();
        setNoticeList(res.data);
        // console.log(res.data);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    noticeData();
  }, []);
  
  if (loading) {
    return <div>로딩 중...</div>;
  }

  /**
  
   * @since   2022.12.10
   * @author  harin.
   * */
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
        <NoticeBlock>
        <TopBar name="공지사항 관리"/>
          <div className="notice-list-container">
            <input type="hidden" id="arrayParam" name="arrayParam"/>
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
                  .map(({index,title,createTime}) => (
                  <tr>
                  <td><input type='checkbox'  name={`select-${index}`} onChange={(e) => handleSingleCheck(e.target.checked,index)}
                  // className='notiitem' id={`select-${index}`}
                   // 체크된 아이템 배열에 해당 아이템이 있을 경우 선택 활성화, 아닐 시 해제
                  checked={checkItems.includes(index) ? true : false} />
                  </td>
                    <td>{index}</td>
                    <td><Link to={`/admin/noticeDetail/${index}`}>{title}</Link></td>
                    <td>관리자</td>
                    <td>{createTime}</td>
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
                <button className="noticeBtn" onClick={()=>{navigate('/admin/writeNotice')}}>작성하기</button>
                <button className="noticeBtn" onClick={onClickDelete}>삭제하기</button>
            </div>
            {/* <script>
              $(".notiitem").on("onclick", function(e){
                  $(this).attr("name")};                
              );
            </script> */}
        </NoticeBlock>
    );
}
export default NoticeList;

const NoticeBlock=styled.div`
    margin:0 auto;
  box-sizing: border-box;
  .notice-list-container {
    width: 70vw;
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
    .noticeBtn{
      border: none;
      margin: 15px 0;
      margin: 20px 10px;
      background-color: #E3CAA5;
      border-radius: 5px;
      width: 150px;
      height: 50px;
    }

`;