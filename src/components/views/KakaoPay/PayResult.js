import axios from "axios";
import { useEffect, useState } from "react"

const PayResult = props => {
    
    let search = window.location.search;
    const [state, setState] = useState({
        params: {
            cid: "TC0ONETIME",
            tid : window.localStorage.getItem("tid"),
            partner_order_id: "partner_order_id",
            // 가맹점 회원 id
            partner_user_id: "partner_user_id",
            // 결제승인 요청을 인정하는 토큰
            pg_token: search.split("=")[1],
        }
    });
    
    useEffect(() => {
        const { params } = state;

        axios({
            url: "https://kapi.kakao.com/v1/payment/approve",
            method: "POST",
            headers: {
                Authorization: "KakaoAK d853cf82728147a7a985cfeb193f4b8d",
                "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
            },
            params,
        }).then(response => {
            console.log(response);
        });
    })
    return(
        <div>
            <h2>Result Page Go Go</h2>
            <h1>Pay success</h1>
        </div>
    )
}
export default PayResult;