import styled from "styled-components";

const BarBlock=styled.div`
    .barContainer{
        border: none;
        margin-top: 15px;
        background-color: #E3CAA5;
        border-radius: 5px;
        width: 200px;
        height: 35px;
    }
    .title{
        text-align: center;
        font-size: 18px;
    }
`;

const NavBar=(props)=>{
    return(
        <BarBlock>
        <div className="barContainer">
            <div className="title">{props.name}</div>
        </div>
        </BarBlock>
    );
}
export default NavBar;