import styled from "styled-components";

const BackContainer = styled.div`
    img{
        width: 100%;
        height: 400px;
    }
    .ContentContainer{
        width: 300vw;
    }
    .ContentWrapSlide{
        width: 100vw;
        float: left;
    }
    `
const ContentWarp = () =>{
    
    return(
        <BackContainer>
            <div className="ContentWrapContainer">
                <div className="ContentWrapSlide"><img src="http://ticketimage.interpark.com/TCMS4/Main/202202/MainVisual_059f5f0e-3477-4c7f-95a4-bdc6e5e0c887.jpg"></img></div>
                <div className="ContentWrapSlide"><img src="http://ticketimage.interpark.com/TCMS4/Main/202202/MainVisual_059f5f0e-3477-4c7f-95a4-bdc6e5e0c887.jpg"></img></div>
                <div className="ContentWrapSlide"><img src="http://ticketimage.interpark.com/TCMS4/Main/202202/MainVisual_059f5f0e-3477-4c7f-95a4-bdc6e5e0c887.jpg"></img></div>
            </div>
        </BackContainer>
    )
}

export default ContentWarp;