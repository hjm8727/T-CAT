// import Profile from "./Dashboard/Profile";
// import RecentComment from "./Dashboard/RecentComment";
// import Chart from "./Dashboard/Chart";
// import TopBar from "./Tool/TopBar";
// import TopChart from "./Dashboard/TopChart";
import styled from "styled-components";
import AdminTop from "./srBoard/AdminTop";
import AdminBody from "./srBoard/AdminBody";
import RecentComment from "./srBoard/RecentComment";


const AdminBlock=styled.div`
    width: 100%;
    /* border: 1px solid black; */
    background-color: #E3CAA5;
    .topchart{
        /* top: 0%; */
        width: 100vw;
    }
    .chart{
        width: 100%;
    }
`;
const AdminHome=()=>{
    return(
        <AdminBlock>
        <div className="home">
            <AdminTop/>
            <AdminBody/>
            <RecentComment/>
        </div>
        </AdminBlock>

    )
}
export default AdminHome;