import Profile from "./Dashboard/Profile";
import RecentComment from "./Dashboard/RecentComment";
import Chart from "./Dashboard/Chart";
import TopBar from "./Tool/TopBar";
import TopChart from "./Dashboard/TopChart";
import styled from "styled-components";


const AdminBlock=styled.div`
    .topchart{
        top: 0%;
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
            <TopChart className="topChart"/>
            <Chart className="chart"/>
            <RecentComment/>
        </div>
        </AdminBlock>

    )
}
export default AdminHome;