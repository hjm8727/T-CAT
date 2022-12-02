import axios from "axios";
import { useEffect, useState } from "react"
import styled from "styled-components";

const SelectStyle = styled.div`
  table, th, tr, td {
    border: 1px solid black;
  }
`;

const PaySelcet = () => {
  
  const [list, setList] = useState({});
  const [data, setData] = useState({
    next_redirect_pc_url: "",
    tid:"",
    params: {
      cid: "TC0ONETIME",
      tid: window.localStorage.getItem("tid")
    },
  });
  
  useEffect(() => {
        const { params } = data;
        
        axios({
            url: "/v1/payment/order",
            method: "GET",
            headers: {
                Authorization: "KakaoAK d853cf82728147a7a985cfeb193f4b8d",
                "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
            },
            params
        }).then(response => {
            const data = [
                response.data.cid,
            ];
            const datas = response.data;
            setList(
              {
                item_name : datas.item_name,
                quantity : datas.quantity,
                amount_total : datas.amount.total,
                payment_method_type: datas.payment_method_type,
                status : datas.status,
                approved_at : datas.approved_at
              }
            );
            console.log(response);
            console.log(data);
            console.log(list);
        });
      }, []);
    
    return(
      <SelectStyle>
      <div>
        <table>
          <thead>
            <tr>
              <th>상품 이름</th>
              <th>상품 수량</th>
              <th>상품 총 가격</th>
              <th>결제 수단</th>
              <th>결제 상태</th>
              <th>결제 완료 시간</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{list.item_name}</td>
              <td>{list.quantity}</td>
              <td>{list.amount_total}</td>
              <td>{list.payment_method_type}</td>
              <td>{list.status}</td>
              <td>{list.approved_at}</td>
            </tr>
          </tbody>
        </table>
      </div>
      </SelectStyle>
    )
}

export default PaySelcet;