import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';
import ContentWarp from "./Content/ContentWarp";
import PosterBody from "./Content/PosterBody";
import Header from "../Header/Header";

const ItemContainer = styled.div`
    width: 75%;
    margin: 0 auto;
    padding: 0px;
    align-items: center;
    justify-content: center;
`
const MainContainer = styled.div`
    width : 100%;
    margin: 0px;
    padding: 0px;
`
const MainPage = () =>{
    return(
        <MainContainer>
            <Header/>
                <ContentWarp/>
                    <ItemContainer>
                        <PosterBody/>
                    </ItemContainer>
        </MainContainer>
    )
}

export default MainPage;