import styled from "styled-components"

const ProFileContainer = styled.div`
    width:20%;
    border: 1px solid black;
    .itemContainer{
        margin-left: 20px;
    }
    .info{
        display: flex;
        justify-content: center;
    } 
`

const ProFileItem =[
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
        <ProFileContainer>
            {ProFileItem.map ( c =>(
                    <div className="itemContainer">
                        <h4>{c.name}</h4>
                        <div className="info">
                        <p>{c.position}</p>
                        </div>
                    </div>
                    ))}
        </ProFileContainer>
    )
}

export default Profile;