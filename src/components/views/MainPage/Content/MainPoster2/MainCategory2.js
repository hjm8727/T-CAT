import { useState } from "react";
import styled from "styled-components";

const PosterCategoryContainer = styled.div`
    width: 100%;
    /* border: solid 1px black; */
    .PosterTitle{
        /* min-width: 540px; */
        margin: 5px;
        display: flex;
        justify-content: center;
    }
    h2{
        display: inline-block;
        font-size: 1.5em;
        font-weight: bold;
        margin-right: 10px;
    }
    li{
        font-size: 1.2em;
        list-style: none;
        padding : 0.5em;
        margin: 0 50px;
        cursor: pointer;
    }
    /* @media (max-width : 1025px){
        h2{
            font-size: 1em;
        }
        li{
            font-size: 0.8em;
            margin: 0 1;
        }
    } */
    `

const categories = [
        {
            name : 'popularity',
            text : '인기공연'
        },
        {
            name : 'concert',
            text : '공연장공연'
        },
        {
            name : 'soon',
            text : '개막예정'
        },
        {
            name : 'comming',
            text : '종료임박'
        }
    ]

const PosterCategory2 = () =>{
    const [category , setCategory] = useState('popularity');
    const onSelect = (e) =>{
        setCategory(e)
    }
    // console.log(category)
    return(
        <PosterCategoryContainer>
            <div className="PosterTitle">
            {categories.map(c=>(
                <li 
                    key={c.name}
                    active={category === c.name}
                    onClick={()=>onSelect(c.name)}
                >{c.text}</li>
            ))}
            </div>
        </PosterCategoryContainer>
    )
}
export default PosterCategory2;