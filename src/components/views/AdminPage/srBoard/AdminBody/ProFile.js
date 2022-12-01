import styled from "styled-components"
// import {ProfileStyle} from "./Profile.css";
// import "./ProfileStyle.css"

const ProfileContainer = styled.div`
    width:20%;
    /* height: 500px; */
    border-radius: 20px;
        background-color: white;
        margin: 10px;
    .container{
        /* margin-left: 10px; */
        overflow: hidden;
        display: flex;
    }
    //올라가는지 확인
    .team-list{

    }
    
    img{
        width: 30px;
        height: 30px;
    }
    /* border: 1px solid black; */
    /* .container{
        width: 100vw;
    } */
    /* .itemContainer{
        margin-left: 20px;
    }
    .info{
        display: flex;
        justify-content: center;
    }  */
`
const ProfileItem =[
    {
        id : "1",
        name : "하정목",
        position : "대표이사"
    },
    {
        id : "2",
        name : "김성탁",
        position : "대표이사"
    },
    {
        id : "3",
        name : "박하린",
        position : "대표이사"
    },
    {
        id : "4",
        name : "지민",
        position : "대표이사"
    },
    {
        id : "5",
        name : "김승렬",
        position : "대표이사"
    },
]

const Profile = () =>{
    return(
        <ProfileContainer>
            <div className="container">
                <div className="team-list">
                    <div className="title">
                        Team Members
                    </div>
                    {ProfileItem.map(c=>(
                    <div className="body">
                     <ul className="image-list">
                       <li><img src="" alt="img" className="img"/><div>{c.name}</div><span className="desc">{c.position}</span></li>
                     </ul>
                    </div>
                    ))}
                </div>
            </div>
        </ProfileContainer>
    )
}

export default Profile;