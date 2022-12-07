import './recentComment.css'
const RecentComment=()=>{
    const Review =[
        {
            id : "1",
            title : "첫번째 후기 제목입니다.첫번째 후기 제목입니다.첫번째 후기 제목입니다.첫번째 후기 제목입니다.",
            contents : "재미있습니다."
        },
        {   
            id : "2",
            title : "첫번째 후기 제목입니다.",
            contents : "재미있습니다재미있습니다재미있습니다재미있습니다재미있습니다재미있습니다재미있습니다재미있습니다재미있습니다재미있습니다재미있습니다재미있습니다재미있습니다재미있습니다재미있습니다재미있습니다재미있습니다재미있습니다재미있습니다재미있습니다재미있습니다재미있습니다재미있습니다재미있습니다재미있습니다재미있습니다재미있습니다재미있습니다재미있습니다재미있습니다재미있습니다재미있습니다재미있습니다재미있습니다재미있습니다재미있습니다"
        },
        {
            id : "3",
            title : "첫번째 후기 제목입니다.",
            contents : "재미있습니다."
        },
        
    ]

    return(
        <div className="comment-container">
            <div className="ReviewBox">
            {Review.map (c => (
                <li className="MainReviewContents" key={c.id}>
                    <p className="minititle">{c.title}</p>
                <hr></hr>
                <div className="ReviewContents">
                    <p className="con">{c.contents}</p>
                </div>
            </li>
            ))}
            </div>
        </div>
    )
}
export default RecentComment;