import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';
import ContentWarp from "./Content/ContentWarp";
import MainHeader from "../MainHeader/MainHeader";
import MainPoster from "./Content/MainPoster/MainPoster";
import MainIcon from "./Content/MainIcon/MainIcon";
import MainNotice from "./Content/MainNotice/MainNotice";
import MainBanner from "./Content/MainBanner/MainBanner";
import Footer from "../Footer/Footer";
import MainPoster2 from "./Content/MainPoster2/MainPoster2";
import PosterCategory2 from "./Content/MainPoster2/MainCategory2";
import MainReview from "./Content/MainReview/MainReview";

const ItemContainer = styled.div`
    width: 80%;
    padding: 0px;
    margin: 0 auto;
    min-width: 930px;
    /* background-color: #f5f5f7; */
    hr{
        margin: 0;
    }
    `
const MainContainer = styled.div`
    width : 100%;
    margin: 0px;
    padding: 0px;
    min-width: 900px;
`

const MainPage = () =>{
    return(
        
        <MainContainer>    
            <MainHeader/>
                
                <ContentWarp/>

                    <ItemContainer>
                        <MainPoster name = "주간 랭킹"/>
                        <MainPoster name = "일간 랭킹"/>
                        
                        <MainNotice/>
                        <hr></hr>
                        <MainBanner/>
                        <PosterCategory2/>
                        <MainPoster2/>
                    </ItemContainer>


                    <ItemContainer>
                        <MainReview/>
                        <hr></hr>
                        <MainIcon/>
                        <hr></hr>
                    </ItemContainer>
                    <Footer/>
        </MainContainer>
    )
}

export default MainPage;