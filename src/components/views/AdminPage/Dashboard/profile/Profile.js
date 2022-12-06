import './profile.css';

const Profile=()=>{
    const data=[
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
    return(
        <div className="profile-container">
            <spam className="profile-title">직원목록</spam>
            {data.map(c=>(
        <ul className='profile-list'>
            <li className='listItem'>
                {/* <img src='logo192.png' alt='' className='profile-img'/> */}
                <div className='user'>
                    <span className='userName'>{c.name}</span>
                    <span className='userTitle'>{c.position}</span>
                </div>
            </li>

        </ul>
         ))}
        </div>
    )

}
export default Profile;