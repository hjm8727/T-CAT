import styled from "styled-components";
import {MyInfo} from './PopupContent2';

const Body1Style2 = styled.div`
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
  .seat-container {
    border: 1px solid black;  
    width: 400px;
    margin-top: 10px;
  }
  li{
    display: inline-block;
    margin-top: 10px;
  }
  .price-info {
    float: right;
    margin-right: 150px;        
    margin-top: 10px; 
  }
  .seat {
    float: left;
    margin-right: 30px;
    width: 20px;
    height: 20px;
    margin-top: 10px;
  }
  .seat-vip {
    background-color: red;
  }
  .seat-r {
    background-color: green;
  }
  .seat-s {
    background-color: royalblue;
  }
  .seat-a {
    background-color: aliceblue;
  }  
`;

function PopupContent(props) {
  const { item_name, price, date, cancelday } = props;
    return(
        <Body1Style2>
          <div>
            <h2>좌석 선택</h2>
            <div className='seat-container'>
              <ul>
                <span className='seat seat-vip'/>
                <li>VIP석 0석</li>
                <span className='price-info'>{price}원</span>
                <p />
                <span className='seat seat-r'/>
                <li>R석 5석</li>
                <span className='price-info'>{price}원</span>
                <p />
                <span className='seat seat-s'/>
                <li>S석 28석</li>
                <span className='price-info'>{price}원</span>
                <p />
                <span className='seat seat-a'/>
                <li>A석 94석</li>
                <span className='price-info'>{price}원</span>
                <p />
              </ul>
              </div>
                <hr />
            </div>
            <MyInfo item_name={item_name} cancelday={cancelday} date={date}/>
        </Body1Style2>
    );
}

export default PopupContent;