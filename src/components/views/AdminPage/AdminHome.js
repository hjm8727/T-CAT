import Profile from "./Profile";
import RecentComment from "./RecentComment";
import Chart from "./Tool/Chart";
import TopBar from "./Tool/TopBar";
import TopChart from "./Tool/TopChart";

const AdminHome=()=>{
    return(
        <div className="home">
            <TopBar name = "Dashboard"/>
            <TopChart/>
            <Chart/>
            <RecentComment/>
            {/* <Chart/>
            <RecentComment/>
            <Profile/> */}
        </div>
    )
}
export default AdminHome;