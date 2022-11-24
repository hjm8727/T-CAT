import PosterCategory from "./PosterCategory";
import PosterImg from "./PosterImg";
import styled from "styled-components";

const PosterContainer = styled.div`
    width: 45%;
    min-width: 600px;
    margin: 0 10px ;
    display: inline-block;
    /* border: solid 1px black; */
    a{
        float: right;
        text-decoration:none;
        color: #1a1a1a;
        /* cursor: pointer; */
    }
    @media (max-width : 1441px){
        width: 100%;
        min-width: 0px;
        a{
            font-size: 0.5em;
        }
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