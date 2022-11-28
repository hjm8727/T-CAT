import styled from "styled-components";
import NavBar from "./Tool/TopBar";
import SearchBar from "./Tool/SearchBar";
import { useState, useEffect } from "react";
// import Modal from "antd/es/modal/Modal";
import axios from "axios";
import Pagination from "react-js-pagination";
import PaginationAdmin from "./Tool/Pagination/Paging";
import Paging from "./Tool/Pagination/Paging";
// import Modal from "../../../util/./Modal/ModalPop";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";


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

const onClickModal=()=>{
  
}

const BlackList=()=>{
  const [products, setProducts] = useState([]);  // 리스트에 나타낼 아이템들
  const [count, setCount] = useState(0); // 아이템 총 개수
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지. default 값으로 1
  const [postPerPage] = useState(5); // 한 페이지에 보여질 아이템 수 
  const [indexOfLastPost, setIndexOfLastPost] = useState(0); // 현재 페이지의 마지막 아이템 인덱스
  const [indexOfFirstPost, setIndexOfFirstPost] = useState(0); // 현재 페이지의 첫번째 아이템 인덱스
  const [currentPosts, setCurrentPosts] = useState(0); // 현재 페이지에서 보여지는 아이템들
  const [openModal, setOpenModal] = useState(false);

  const setPage = (error) => {
    setCurrentPage(error);
  };
  const data = [
    {id: 0, user: '선택 1', name: '곰돌이', date:'2022-12-02',email:'gg@naver.com',report:'5'},
    {id: 1, user: '선택 2', name: '토끼', date:'2022-10-02',email:'rabit@naver.com',report:'25'},
    {id: 2, user: '선택 3', name: '곰돌이', date:'2022-12-02',email:'gg@naver.com',report:'5'},
    {id: 3, user: '선택 4', name: '곰돌이', date:'2022-12-02',email:'gg@naver.com',report:'5'},
    {id: 4, user: '선택 5', name: '곰돌이', date:'2022-12-02',email:'gg@naver.com',report:'5'},
    {id: 4, user: '선택 5', name: '곰돌이', date:'2022-12-02',email:'gg@naver.com',report:'5'},
    {id: 4, user: '선택 5', name: '곰돌이', date:'2022-12-02',email:'gg@naver.com',report:'5'},
   


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


  }
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  

    return(
        <MemberBlock>
        <NavBar name="블랙리스트 관리"/>
          <div className="container">
          <table>
                <thead>
                  <tr>
                  <th>
                    <input type='checkbox' name='select-all' onChange={(e) => handleAllCheck(e.target.checked)}
                    // 데이터 개수와 체크된 아이템의 개수가 다를 경우 선택 해제 (하나라도 해제 시 선택 해제)
                    checked={checkItems.length === data.length ? true : false} />
                    </th>
                    <th>아이디</th>
                    <th>이름</th>
                    <th>가입일</th>
                    <th>이메일</th>
                    <th>신고횟수</th>
                  </tr>
                </thead>
                <tbody>
                  {data && data.map((data,key) => (<tr key={key}>
                  <td><input type='checkbox' name={`select-${data.id}`} onChange={(e) => handleSingleCheck(e.target.checked, data.id)}
                   // 체크된 아이템 배열에 해당 아이템이 있을 경우 선택 활성화, 아닐 시 해제
                  checked={checkItems.includes(data.id) ? true : false} />
                  </td>
                    <td>{data.user}</td>
                    <td>{data.name}</td>
                    <td>{data.date}</td>
                    <td>{data.email}</td>
                    <td onClick={() => handleShow()}>{data.report}</td>
                </tr>
                ))}
                </tbody>
              </table>
              <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>신고사유</Modal.Title>
        </Modal.Header>
        <Modal.Body>생각해보니까 신고사유가 없네 모달창 없애도 될</Modal.Body>
      </Modal>
            </div>
            <div className="delete"><button onClick={onClickDelete}>탈퇴하기</button></div>
            <Paging page={currentPage} count={count} setPage={setPage} />
        </MemberBlock>
    );

}
export default BlackList;