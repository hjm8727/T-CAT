import styled from "styled-components";

const PosterContainer = styled.div`
    margin: 5px;
    border: solid 1px black;
`
const PosterBody = () =>{

    return(
        <PosterContainer>
            <ul>
                <li><button>뮤지컬</button></li>
                <li><button>콘서트</button></li>
                <li><button>연극</button></li>
                <li><button>전시</button></li>
            </ul>
        </PosterContainer>
    )
}

export default PosterBody;