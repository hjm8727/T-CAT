import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';
import ContentWarp from "./Content/ContentWarp";
import MainHeader from "../MainHeader/MainHeader";
import MainPoster from "./Content/MainPoster/MainPoster";

const ItemContainer = styled.div`
    width: 75%;
    /* min-width:1024px; */
    padding: 0px;
    /* align-items: center; */
    /* justify-content: center; */
    margin: 0 auto;
    
    `
const MainContainer = styled.div`
    width : 100%;
    margin: 0px;
    padding: 0px;
`
const MainPage = () =>{
    return(
        <MainContainer>
            <MainHeader/>
                <ContentWarp/>
                    <ItemContainer>
                        <MainPoster name = "주간 랭킹"/>
                        <MainPoster name = "일간 랭킹"/>
                    </ItemContainer>
        </MainContainer>
    )
}

export default MainPage;