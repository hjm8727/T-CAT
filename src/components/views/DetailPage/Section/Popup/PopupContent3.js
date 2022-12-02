import styled from "styled-components";
import PayReady from "../../../KakaoPay/PayReady";
import { MyInfo } from "./PopupContent2";


  const BodyContainer = styled.div`
  table ,tr {
      border: 1px solid black;
  }
  td{
      width: 200px;
      border-left: 1px solid silver;
  }
  th{
      width: 100px;
  }
  .BorderBottom{
      border-bottom: 1px solid silver;
  }
  .select-box{
      display: flex;
      justify-content: center;
      width: 125px;
  }
  .BuyOption{
      opacity: 60%;
  }
`;

function PopupContent3(props) {
  const { item_name } = props;
  const ticket = window.localStorage.getItem('ticket');
  const tax = window.localStorage.getItem('tax');
  const total = window.localStorage.getItem('total');
  const value = window.localStorage.getItem('value');
  PayReady(item_name, total, tax, value);
  const payUrl = window.localStorage.getItem('url');
  
    return(
        <BodyContainer>
          <MyInfo item_name={item_name} ticket={ticket} tax={tax} total={total} />
            <hr />
            <div>
                <a href={payUrl}><button className='pay-button'>카카오페이로 결제하기</button></a>
            </div>
        </BodyContainer>
    );
}

export default PopupContent3;