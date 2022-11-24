import styled from "styled-components";

const BarBlock=styled.div`
    .barContainer{
        border: none;
        margin: 5px;
    }
    
`;

const NavBar=(props)=>{
    return(
        <BarBlock>
        <div className="barContainer">
            <div>{props.name}</div>
        </div>
        </BarBlock>
    );
}
export default NavBar;