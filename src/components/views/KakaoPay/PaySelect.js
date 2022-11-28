import axios from "axios";
import { useEffect, useState } from "react"


const PaySelcet = () => {
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
            let data = [
                response.data.cid,
                response.data.item_name,
                response.data.payment_method_type,
                response.data.quantity,
                response.data.amount.total
            ];
            console.log(data);
            console.log(response);
            // 결제 승인에 대한 응답 출력
            console.log(`조회 데이터 : 가맹점 고유 번호${response.data.cid}`);
            console.log(`조회 데이터 : 결제한 상품 이름${response.data.item_name}`);
            console.log(`조회 데이터 : 결제 방법${response.data.payment_method_type}`);
            console.log(`조회 데이터 : 결제 총 개수${response.data.quantity}`);
            console.log(`조회 데이터 : 결제 총 금액${response.data.amount.total}`);
        });
    });

    return(
        <div>
            <h2>결제 내역 조회 페이지</h2>
        </div>
    )
}

export default PaySelcet;