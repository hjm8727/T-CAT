import styled from "styled-components";
import Card from 'react-bootstrap/Card';

const RecentBlock=styled.div`
        width:100%;
        height:100%;
        overflow: hidden;
    .container{
        display: inline-block;
        margin: 10px;
        text-align: center;
        width:20%;
        height:200px;
    }
    // 제목이 길어진경우 , ... 으로 생략하는 css 입니다.
    .title{
        text-overflow: ellipsis;
        overflow:hidden;
        white-space: nowrap;
    }
    // 내용 길어진경우 , ... 으로 생략하는 css 입니다.
    .info{
        white-space: normal;
        word-wrap: break-word;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }
    img{
        margin: 0 auto;
        width: 120px;
        height: 100px;    
    }
`;

const reviewItem = [
    {
        title : "제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목",
        img : "/images/TCat.jpg",
        info : "후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기"
    },
    {
        title : "제목",
        img : "/images/TCat.jpg",
        info : "후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기"
    },
    {
        title : "제목",
        img : "/images/TCat.jpg",
        info : "후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기"
    },
    {
        title : "제목",
        img : "/images/TCat.jpg",
        info : "후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기후기"
    }
]
const RecentComment=()=>{
    return(
    <RecentBlock>
            {reviewItem.map ( c=>(
            <div className="container">
                <div className="imgContainer">
                    <img src={process.env.PUBLIC_URL + c.img}></img>
                </div>
                <div className="titleContainer">
                    <p className="title">{c.title}</p>
                </div>
                <div className="infoContainer">
                    <p className="info">{c.info}</p>
                </div>
            </div>
            ))}
        </RecentBlock>
        );
    }
export default RecentComment;