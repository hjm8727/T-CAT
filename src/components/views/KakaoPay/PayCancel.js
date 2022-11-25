import axios from "axios";
import { useEffect, useState } from "react"


const PayCancel = () => {
    const[data, setData] = useState({
        next_redirect_pc_url : "",
        tid: "",
        params: {
            cid: "TC0ONETIME",
            tid: window.localStorage.getItem("tid"),
            cancel_amount: "300000",
            cancel_tax_free_amount:"20000",
        }
    });

    useEffect(() => {
        const { params } = data;

        axios({
            url: "/v1/payment/cancel",
            method: "POST",
            headers: {
                Authorization: "KakaoAK d853cf82728147a7a985cfeb193f4b8d",
                "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
            },
            params
        }).then(response => {
            const {
                data: { tid }
            } = response;
            setData({ tid });
            console.log(tid);
        });
    })

    return(
        <div>
            <h1>결제 취소 페이지 성공</h1>
        </div>
    )
}

export default PayCancel;