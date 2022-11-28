import axios from "axios";
import { useEffect, useState } from "react"
import KakaoPay from "./KakaoPay";

const PayReady = () => {
    let [data, setData] = useState({
        next_redirect_pc_url: "",
        tid: "",
        params: {
            // 가맹점 코드
            cid: "TC0ONETIME",
            // 가맹점 주문번호
            partner_order_id: "partner_order_id",
            // 가맹점 회원 id
            partner_user_id: "partner_user_id",
            // 상품 이름
            item_name: "태양의서커스 <뉴 알레그리아> (VIP석)",
            // 상품 수량
            quantity: 1,
            // 총 가격
            total_amount: 150000,
            // 상품 비과세
            tax_free_amount: 20000,
            // 결제 성공 URL
            approval_url: "http://localhost:3000/kakaopay/payresult",
            // 결제 실패 URL
            fail_url: "http://localhost:3000/resultfalse",
            // 결제 취소 URL
            cancel_url: "http://localhost:3000/resultfalse"
        }
    });
    
    useEffect(() => {
        const { params } = data;

        axios({
            url: "/v1/payment/ready",
            method: "POST",
            headers: {
                Authorization: "KakaoAK d853cf82728147a7a985cfeb193f4b8d",
                "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
                },
                params,
        }).then(response => {
            const {
                data: { next_redirect_pc_url, tid },
            } = response;
            console.log(next_redirect_pc_url);
            console.log(tid);
            window.localStorage.setItem("tid", tid);
            setData({ next_redirect_pc_url, tid });
        }).catch(error => {
            console.log(error);
        })
    })
    const { next_redirect_pc_url } = data;

    return (
            <div className="container">
                <h2 className="head-line">카카오페이 결제하기</h2>
                <a href={ next_redirect_pc_url }><img className="kakao" src="../images/test.png" alt="카카오페이" /></a>
                <div>
                    <KakaoPay/>
                </div>
            </div>
        )
}

export default PayReady;