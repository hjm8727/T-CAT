import styled from "styled-components"

const MainReviewContainer = styled.div`
    width: 100%;
    margin: 0 auto;
    height: 300px;
    /* border: 1px solid black; */
    .ReviewBox{
        display: flex;
        justify-content: center;
    }
    .MainReviewContents{
        border: 1px solid black;
        width: 300px;
        height: 200px;
        border: 1px solid #f5f5f5;
        margin: 0 5px;
    }
    li{
        list-style: none;
        float: left;
    }
    hr{
        margin: 0;
        padding: 0px;
    }
    .ReviewContents{
        display: block;
        background-color: #f5f5f5;
        margin:5px;
        height: 200px;
        opacity: 70%;
        overflow:hidden;
        text-overflow: initial;
    }
    .minititle{
        display: flex;
        justify-content: center;
        opacity: 90%;
    }
    h2{
        font-size: 1.5em;
        font-weight: bold;
}
    @media(max-width : 1024px){
        .ReviewBox{
            min-width: 600px;
        }
}
`
const Review =[
    {
        id : "1",
        title : "첫번째 후기 제목입니다.",
        contents : "재미있습니다."
    },
    {   
        id : "2",
        title : "첫번째 후기 제목입니다.",
        contents : "재미있습니다재미있습니다재미있습니다재미있습니다재미있습니다재미있습니다재미있습니다재미있습니다재미있습니다재미있습니다재미있습니다재미있습니다재미있습니다재미있습니다재미있습니다재미있습니다재미있습니다재미있습니다"
    },
    {
        id : "3",
        title : "첫번째 후기 제목입니다.",
        contents : "재미있습니다."
    },
    {
        id : "4",
        title : "첫번째 후기 제목입니다.",
        contents : "재미있습니다"
    },
    
]

const MainReview = () =>{
    return(
        <MainReviewContainer>
            <div className="TitleBox">
            <h2>관람 후기</h2>
            </div>
            <div className="ReviewBox">
            {Review.map (c => (
                <li className="MainReviewContents" key={c.id}>
                <p className="minititle">{c.title}</p>
                <hr></hr>
                <div className="ReviewContents">
                    <p>{c.contents}</p>
                </div>
            </li>
            ))}
            </div>
        </MainReviewContainer>
    )
}

export default MainReview