import styled from "styled-components";

const PosterImgContainer = styled.div`
    background-color: #f5f5f5;
    display: flex;
    justify-content: center;
    /* border: solid 1px black; */
    img{
        width: 110px;
        height: 130px;
    }
    ul{
        display: flex;
        list-style: none;
        margin: 0px;
        padding: 0px;
        overflow: hidden;
    }
    li{
        list-style: none;
        /* display: inline-block; */
        margin:10px;
    }
    p{
        width: 110px;
        margin-top:10px;
        font-size: 1em;
    }
    @media (max-width : 1440px){
        li{
            margin:10px 2.5em;
        }
    }   
`
const posterInfo = [
        {
            id : "1",
            name : '1번작품',
            img : 'http://ticketimage.interpark.com/rz/image/play/goods/poster/22/22012184_p_s.jpg'
        },
        {
            id : "2",
            name : '2번 작품은 조금 길어진 제목',
            img : 'http://ticketimage.interpark.com/rz/image/play/goods/poster/22/22014586_p_s.jpg'
        },
        {
            id : "3",
            name : '3번 작품',
            img : 'http://ticketimage.interpark.com/rz/image/play/goods/poster/22/22009029_p_s.jpg'
        },
        {
            id : "1",
            name : '1번작품',
            img : 'http://ticketimage.interpark.com/rz/image/play/goods/poster/22/22012184_p_s.jpg'
        },
    ]

const PosterImg = () =>{
    return(
        <PosterImgContainer>
            <ul>
                {posterInfo.map(c=>(
                    <li key={c.id} >
                        <img src={c.img}/>
                        <p>{c.name}</p>
                    </li>
                ))}
            </ul>
        </PosterImgContainer>
    )
}
export default PosterImg;

