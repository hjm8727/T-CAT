import axios from "axios";
const HEADER = 'application/json';
const TCAT_DOMAIN="http://localhost:8115";

const AdminApi={
    //공지사항 쓰기 api
    writing : async function(inputTitle, inputDetail){
        const writing = {
            title : inputTitle,
            content : inputDetail
        }
        return await axios.post(TCAT_DOMAIN + "/write", writing, HEADER)
    },

}
export default AdminApi;