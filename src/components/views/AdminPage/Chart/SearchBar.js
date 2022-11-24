import styled from "styled-components";

const BarBlock=styled.div`
    .bar{
        width: 40%;
    border-radius: 10px;
    border: 1px solid #bbb;
    margin: 10px 0;
    padding: 10px 12px;
    }
    .btn{
        border-radius: 10px;
    border: 1px solid #bbb;
    margin: 10px 5px;
    padding: 10px 12px;
    }
`;
const SearchBar=()=>{
    return(
        <BarBlock>
        <div>
        <input type="text" className="bar"/>
        <button className="btn">검색</button>
        </div>

        </BarBlock>
    );
}
export default SearchBar;