import axios from "axios";
const HEADER = 'application/json';
const TCAT_DOMAIN= "http://localhost:8117";
// "http://cokebear756.synology.me:33060";

const AdminApi={
    //공지사항 쓰기 api
    writing : async function(inputTitle, inputDetail){
        const writing = {
            title : inputTitle,
            content : inputDetail
        }
        return await axios.post(TCAT_DOMAIN + "/notice/write", writing, HEADER)
    },
    // 공지사항 전체 목록
    noticeInfo : async function(){
        return await axios.post(TCAT_DOMAIN + "/notice/list", HEADER)
    },
    // 공지사항 상세페이지
    noticeDetail : async function(){
        return await axios.get(TCAT_DOMAIN + "/notice/post/7" , HEADER)
    },
    // 공지사항 삭제 
    noticeDelete : async function(index){
        return await axios.post(TCAT_DOMAIN + "/notice/delete/"+ index, HEADER)
    },
    // 공지사항 수정
    noticeEdit : async function(inputTitle, inputDetail){
        const editing = {
            title : inputTitle,
            content : inputDetail
        }
        return await axios.post(TCAT_DOMAIN + "/notice/edit", editing, HEADER)
        
    },
 
    // 회원 전체 조회
    totalMember : async function(){
        return await axios.post(TCAT_DOMAIN + "/member/list", HEADER)
    },
    // 고

}
export default AdminApi;