import PosterCategory from "./PosterCategory";
import PosterImg from "./PosterImg";
import styled from "styled-components";

const PosterContainer = styled.div`
    width: 50%;
    margin: 30px 0;
    align-items: center;
    display: inline-block;
    /* border: solid 1px black; */
    a {
        float: right;
        text-decoration:none;
        color: #1a1a1a;
        /* cursor: pointer; */
    }
    @media (max-width : 1440px){
        width: 100%;
        margin: 15px 0;
    }
    `

const Poster = (props) =>{
    return(
        <PosterContainer>
            <PosterCategory name = {props.name}/>
            <PosterImg/>
            <a>더보기</a>
        </PosterContainer>
    )
}

export default Poster;