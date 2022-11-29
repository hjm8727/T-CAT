import styled from "styled-components";

const BarBlock=styled.div`
    .block{
        float: right;
    }
    .bar{
    border-radius: 10px;
    border: 1px solid #bbb;
    margin: 10px 0;
    padding: 10px 12px;
    width: 300px;
    height: 35px;

    }
    .btn{
        border-radius: 10px;
    border: 1px solid #bbb;
    margin: 10px 5px;
    height: 35px;
    }
`;
const SearchBar=()=>{
    return(
        <BarBlock>
        <div className="block">
        <input type="text" className="bar"/>
        <button className="btn">검색</button>
        </div>
        </BarBlock>
    );
}
export default SearchBar;