import axios from "axios";
const HEADER = 'application/json';
const TCAT_DOMAIN= "http://localhost:8118";
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
        return await axios.get(TCAT_DOMAIN + "/notice/list", HEADER)
    },
    // 공지사항 상세페이지
    noticeDetail : async function(index){
        return await axios.get(TCAT_DOMAIN + "/notice/detail/" + index, HEADER)
    },

    // 공지사항 삭제 
    noticeDelete : async function(index){
        return await axios.delete(TCAT_DOMAIN + "/notice/delete/"+ index, HEADER)
    },

    // 체크박스로 삭제
    noticeCheck : async function(obj){
        console.log(obj);
        const noticeObj = {
            obj: obj
        };
        return await axios.post(TCAT_DOMAIN + "/notice/delete/list",noticeObj, HEADER)
    },

    // 공지사항 수정
    noticeEdit : async function(inputTitle, inputDetail, index){
        const editing = {
            title : inputTitle,
            content : inputDetail
        }
        return await axios.put(TCAT_DOMAIN + "/notice/edit/" +index, editing, HEADER)
    },

    // 회원 전체 조회
    totalMember : async function(){
        return await axios.get(TCAT_DOMAIN + "/memberlist", HEADER)
    },
    // 블랙리스트 회원 조회
    totalBlackMember : async function(){
        return await axios.get(TCAT_DOMAIN + "/blacklist", HEADER)
    },
    // 회원 탈퇴(관리자)
    deleteMemberAdmin : async function(){
        return await axios.post(TCAT_DOMAIN + "/notice/delete/"+ HEADER)
    },
    // 일대일문의(qna) 전체 조회
    qnaList : async function(){
        return await axios.get(TCAT_DOMAIN + "/qna/list", HEADER)
    },
    // qna 관리자 답장
    qnaReply : async function(id, qna_content) {
        const qna = {
            id : id,
            qna_content : qna_content
        }
        return await axios.post(TCAT_DOMAIN + "/qna-reply", qna, HEADER);
    },

    // deleteComment: async function (postId) {
    //     console.log("댓글 번호 : " + postId);
    //     const deleteObj = {
    //       postId: String(postId),
    //     };
    //     return await axios.post(DOMAIN + "deleteComment", deleteObj, HEADER);
    //   },
}
export default AdminApi;