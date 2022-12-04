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
    // 회원 전체 조회
    totalMember : async function(){
        return await axios.post(TCAT_DOMAIN + "/member/list", HEADER)
    },

}
export default AdminApi;