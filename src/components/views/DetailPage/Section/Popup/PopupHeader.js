import styled from "styled-components";

const HeaderContainer = styled.div`
    h1{
        margin: 0;
        padding: 0;
    }
    .HederDiv{
        display: flex;
        justify-content: space-between;        
        margin: 0 auto;
    }
    li{
        display: flex;
        justify-content: center;
        list-style: none;
        width: 150px;
        font-size: 18px;
    }
`;

function PopupHeader() {
  return(
    <HeaderContainer>
        <h2>T-Cat 예매</h2>
        <div className='HederDiv'>
            <li>01 좌석선택</li>
            <li>02 가격/할인선택</li>
            <li>03 결제하기</li>
        </div>            
    </HeaderContainer>
  );
}

export default PopupHeader;