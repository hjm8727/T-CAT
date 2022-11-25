import styled from "styled-components";

const PosterImgContainer = styled.div`
    width: 100%;
    /* min-width: 720px; */
    background-color: #f5f5f5;
    margin-left: 3%;
    /* border: solid 1px black; */
    img{
        position: relative;
        width: 110px;
        height: 13vh;
    }
    ul{
        display: flex;
        list-style: none;
        margin: 0px;
    }
    li{
        margin:5px;
        list-style: none;
        display: inline-block;
        width: 20%;
    }
    p{
        position: relative;
        width: 110px;
        margin-top:10px;
        font-size: 0.8em;
    }
    
    @media (max-width : 1023px){
        
        img{
            width: 60px;
            height: 80px;
        }
        p{
            font-size: 0.5em;
            width: 60px;
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
                    <li>
                        <img key={c.id} src={c.img}></img>
                        <p>{c.name}</p>
                    </li>
                ))}
            </ul>
        </PosterImgContainer>
    )
}
export default PosterImg;

